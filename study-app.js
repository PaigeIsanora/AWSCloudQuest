// ===== CloudQuest: AWS Study Buddy - App Logic =====

(function() {
    'use strict';

    // ===== State =====
    const state = {
        currentScreen: 'home',
        selectedDomain: 'all',
        // Flashcard state
        flashcards: [],
        currentCardIndex: 0,
        isFlipped: false,
        knownCards: new Set(),
        reviewCards: new Set(),
        // Quiz state
        quizQuestions: [],
        currentQuizIndex: 0,
        quizScore: 0,
        quizAnswered: false,
        quizResults: [],
        // Progress (persisted to localStorage)
        progress: loadProgress()
    };

    // ===== DOM References =====
    const dom = {
        navBtns: document.querySelectorAll('.nav-btn'),
        screens: document.querySelectorAll('.screen'),
        domainBtns: document.querySelectorAll('.domain-btn'),
        // Flashcard
        flashcard: document.getElementById('flashcard'),
        cardQuestion: document.getElementById('cardQuestion'),
        cardAnswer: document.getElementById('cardAnswer'),
        cardDomainTag: document.getElementById('cardDomainTag'),
        cardCounter: document.getElementById('cardCounter'),
        cardProgressFill: document.getElementById('cardProgressFill'),
        prevCard: document.getElementById('prevCard'),
        nextCard: document.getElementById('nextCard'),
        shuffleCards: document.getElementById('shuffleCards'),
        flashcardDomain: document.getElementById('flashcardDomain'),
        markKnown: document.getElementById('markKnown'),
        markReview: document.getElementById('markReview'),
        startFlashcards: document.getElementById('startFlashcards'),
        // Quiz
        startQuiz: document.getElementById('startQuiz'),
        quizSetup: document.getElementById('quizSetup'),
        quizActive: document.getElementById('quizActive'),
        quizResults: document.getElementById('quizResults'),
        quizDomain: document.getElementById('quizDomain'),
        quizLength: document.getElementById('quizLength'),
        beginQuiz: document.getElementById('beginQuiz'),
        quizCounter: document.getElementById('quizCounter'),
        quizScore: document.getElementById('quizScore'),
        quizProgressFill: document.getElementById('quizProgressFill'),
        quizDomainTag: document.getElementById('quizDomainTag'),
        quizQuestionText: document.getElementById('quizQuestionText'),
        quizAnswers: document.getElementById('quizAnswers'),
        quizFeedback: document.getElementById('quizFeedback'),
        feedbackText: document.getElementById('feedbackText'),
        feedbackExplanation: document.getElementById('feedbackExplanation'),
        nextQuestion: document.getElementById('nextQuestion'),
        resultsScore: document.getElementById('resultsScore'),
        resultsMessage: document.getElementById('resultsMessage'),
        resultsBreakdown: document.getElementById('resultsBreakdown'),
        retryQuiz: document.getElementById('retryQuiz'),
        reviewMissed: document.getElementById('reviewMissed'),
        // Progress
        statCardsStudied: document.getElementById('statCardsStudied'),
        statQuizzesTaken: document.getElementById('statQuizzesTaken'),
        statAvgScore: document.getElementById('statAvgScore'),
        statStreak: document.getElementById('statStreak'),
        resetProgress: document.getElementById('resetProgress')
    };

    // ===== Progress Persistence =====
    function loadProgress() {
        try {
            const saved = localStorage.getItem('cloudquest-progress');
            if (saved) {
                return JSON.parse(saved);
            }
        } catch (e) {
            console.warn('Could not load progress:', e);
        }
        return {
            cardsStudied: 0,
            quizzesTaken: 0,
            totalScore: 0,
            totalQuestions: 0,
            lastStudyDate: null,
            streak: 0,
            domainScores: {
                'cloud-concepts': { correct: 0, total: 0 },
                'security': { correct: 0, total: 0 },
                'technology': { correct: 0, total: 0 },
                'billing': { correct: 0, total: 0 }
            }
        };
    }

    function saveProgress() {
        try {
            localStorage.setItem('cloudquest-progress', JSON.stringify(state.progress));
        } catch (e) {
            console.warn('Could not save progress:', e);
        }
    }

    function updateStreak() {
        const today = new Date().toDateString();
        if (state.progress.lastStudyDate !== today) {
            const yesterday = new Date();
            yesterday.setDate(yesterday.getDate() - 1);
            if (state.progress.lastStudyDate === yesterday.toDateString()) {
                state.progress.streak++;
            } else if (state.progress.lastStudyDate !== today) {
                state.progress.streak = 1;
            }
            state.progress.lastStudyDate = today;
            saveProgress();
        }
    }

    // ===== Navigation =====
    function switchScreen(screenName) {
        state.currentScreen = screenName;
        dom.screens.forEach(s => s.classList.remove('active'));
        dom.navBtns.forEach(b => b.classList.remove('active'));

        const targetScreen = document.getElementById('screen-' + screenName);
        if (targetScreen) targetScreen.classList.add('active');

        const targetBtn = document.querySelector(`[data-mode="${screenName}"]`);
        if (targetBtn) targetBtn.classList.add('active');

        if (screenName === 'progress') updateProgressDisplay();
        if (screenName === 'flashcards') initFlashcards();
    }

    // ===== Domain Selection =====
    function selectDomain(domain) {
        state.selectedDomain = domain;
        dom.domainBtns.forEach(btn => {
            btn.classList.toggle('selected', btn.dataset.domain === domain);
        });
    }

    // ===== Flashcard Logic =====
    function initFlashcards() {
        const domain = dom.flashcardDomain.value;
        state.flashcards = getCardsByDomain(domain);
        state.currentCardIndex = 0;
        state.isFlipped = false;
        if (state.flashcards.length > 0) {
            renderCard();
        } else {
            dom.cardQuestion.textContent = 'No cards available for this domain.';
            dom.cardAnswer.textContent = '';
            dom.cardCounter.textContent = '0 / 0';
            dom.cardProgressFill.style.width = '0%';
        }
    }

    function getCardsByDomain(domain) {
        if (domain === 'all') return [...STUDY_DATA.flashcards];
        return STUDY_DATA.flashcards.filter(c => c.domain === domain);
    }

    function renderCard() {
        const card = state.flashcards[state.currentCardIndex];
        if (!card) return;

        state.isFlipped = false;
        dom.flashcard.classList.remove('flipped');
        dom.cardQuestion.textContent = card.question;
        dom.cardAnswer.textContent = card.answer;
        dom.cardDomainTag.textContent = getDomainLabel(card.domain);
        dom.cardCounter.textContent = `${state.currentCardIndex + 1} / ${state.flashcards.length}`;
        const pct = ((state.currentCardIndex + 1) / state.flashcards.length) * 100;
        dom.cardProgressFill.style.width = pct + '%';
    }

    function flipCard() {
        state.isFlipped = !state.isFlipped;
        dom.flashcard.classList.toggle('flipped', state.isFlipped);
    }

    function nextCard() {
        if (state.flashcards.length === 0) return;
        state.currentCardIndex = (state.currentCardIndex + 1) % state.flashcards.length;
        renderCard();
    }

    function prevCard() {
        if (state.flashcards.length === 0) return;
        state.currentCardIndex = (state.currentCardIndex - 1 + state.flashcards.length) % state.flashcards.length;
        renderCard();
    }

    function shuffleCards() {
        for (let i = state.flashcards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [state.flashcards[i], state.flashcards[j]] = [state.flashcards[j], state.flashcards[i]];
        }
        state.currentCardIndex = 0;
        renderCard();
    }

    function markCardKnown() {
        if (state.flashcards.length === 0) return;
        const card = state.flashcards[state.currentCardIndex];
        state.knownCards.add(card.id);
        state.reviewCards.delete(card.id);
        state.progress.cardsStudied++;
        updateStreak();
        saveProgress();
        nextCard();
    }

    function markCardReview() {
        if (state.flashcards.length === 0) return;
        const card = state.flashcards[state.currentCardIndex];
        state.reviewCards.add(card.id);
        state.progress.cardsStudied++;
        updateStreak();
        saveProgress();
        nextCard();
    }

    // ===== Quiz Logic =====
    function startQuiz() {
        const domain = dom.quizDomain.value;
        const lengthVal = dom.quizLength.value;

        let questions = domain === 'all'
            ? [...STUDY_DATA.quizzes]
            : STUDY_DATA.quizzes.filter(q => q.domain === domain);

        // Shuffle
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }

        // Limit count
        if (lengthVal !== 'all') {
            questions = questions.slice(0, parseInt(lengthVal));
        }

        state.quizQuestions = questions;
        state.currentQuizIndex = 0;
        state.quizScore = 0;
        state.quizAnswered = false;
        state.quizResults = [];

        dom.quizSetup.style.display = 'none';
        dom.quizResults.style.display = 'none';
        dom.quizActive.style.display = 'block';

        renderQuizQuestion();
    }

    function renderQuizQuestion() {
        const q = state.quizQuestions[state.currentQuizIndex];
        if (!q) return;

        state.quizAnswered = false;
        dom.quizFeedback.style.display = 'none';
        dom.quizCounter.textContent = `Question ${state.currentQuizIndex + 1} of ${state.quizQuestions.length}`;
        dom.quizScore.textContent = `Score: ${state.quizScore}`;
        const pct = ((state.currentQuizIndex) / state.quizQuestions.length) * 100;
        dom.quizProgressFill.style.width = pct + '%';
        dom.quizDomainTag.textContent = getDomainLabel(q.domain);
        dom.quizQuestionText.textContent = q.question;

        // Render answer buttons
        dom.quizAnswers.innerHTML = '';
        q.options.forEach((option, idx) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-answer-btn';
            btn.textContent = option;
            btn.addEventListener('click', () => selectAnswer(idx));
            dom.quizAnswers.appendChild(btn);
        });
    }

    function selectAnswer(selectedIdx) {
        if (state.quizAnswered) return;
        state.quizAnswered = true;

        const q = state.quizQuestions[state.currentQuizIndex];
        const isCorrect = selectedIdx === q.correct;
        const answerBtns = dom.quizAnswers.querySelectorAll('.quiz-answer-btn');

        // Disable all buttons and show correct/incorrect
        answerBtns.forEach((btn, idx) => {
            btn.classList.add('disabled');
            if (idx === q.correct) btn.classList.add('correct');
            if (idx === selectedIdx && !isCorrect) btn.classList.add('incorrect');
        });

        // Update score
        if (isCorrect) {
            state.quizScore++;
            dom.feedbackText.textContent = 'Correct! Nice one!';
            dom.feedbackText.className = 'feedback-text correct-feedback';
        } else {
            dom.feedbackText.textContent = 'Not quite!';
            dom.feedbackText.className = 'feedback-text incorrect-feedback';
        }

        dom.feedbackExplanation.textContent = q.explanation;
        dom.quizFeedback.style.display = 'block';
        dom.quizScore.textContent = `Score: ${state.quizScore}`;

        // Record result
        state.quizResults.push({
            question: q,
            selectedIdx,
            isCorrect
        });

        // Update domain scores
        state.progress.domainScores[q.domain].total++;
        if (isCorrect) state.progress.domainScores[q.domain].correct++;
        saveProgress();
    }

    function nextQuizQuestion() {
        state.currentQuizIndex++;
        if (state.currentQuizIndex >= state.quizQuestions.length) {
            showQuizResults();
        } else {
            renderQuizQuestion();
        }
    }

    function showQuizResults() {
        dom.quizActive.style.display = 'none';
        dom.quizResults.style.display = 'block';

        const total = state.quizQuestions.length;
        const score = state.quizScore;
        const pct = Math.round((score / total) * 100);

        dom.resultsScore.innerHTML = `
            <span class="score-number">${score}</span>
            <span class="score-divider">/</span>
            <span class="score-total">${total}</span>
        `;

        // Message based on score
        let message = '';
        if (pct === 100) message = 'PERFECT SCORE! You are SO ready for Monday!';
        else if (pct >= 80) message = 'Amazing! You know your stuff!';
        else if (pct >= 60) message = 'Good work! A bit more review and you\'ll ace it!';
        else if (pct >= 40) message = 'Getting there! Focus on the domains you missed.';
        else message = 'Keep studying - you\'ve got this! Try the flashcards first.';
        dom.resultsMessage.textContent = message;

        // Domain breakdown
        const domainResults = {};
        state.quizResults.forEach(r => {
            const d = r.question.domain;
            if (!domainResults[d]) domainResults[d] = { correct: 0, total: 0 };
            domainResults[d].total++;
            if (r.isCorrect) domainResults[d].correct++;
        });

        let breakdownHTML = '<div style="text-align:left; margin-top:1rem;">';
        Object.keys(domainResults).forEach(d => {
            const dr = domainResults[d];
            const dpct = Math.round((dr.correct / dr.total) * 100);
            breakdownHTML += `<p style="margin:0.4rem 0; color: var(--text-muted);">
                ${getDomainLabel(d)}: <strong style="color: ${dpct >= 70 ? 'var(--green-lime)' : 'var(--orange-glow)'}">${dr.correct}/${dr.total} (${dpct}%)</strong>
            </p>`;
        });
        breakdownHTML += '</div>';
        dom.resultsBreakdown.innerHTML = breakdownHTML;

        // Update progress
        state.progress.quizzesTaken++;
        state.progress.totalScore += score;
        state.progress.totalQuestions += total;
        updateStreak();
        saveProgress();
    }

    function retryQuiz() {
        dom.quizResults.style.display = 'none';
        dom.quizSetup.style.display = 'block';
    }

    function reviewMissedCards() {
        // Filter flashcards to only domains where answers were missed
        const missedDomains = new Set();
        state.quizResults.forEach(r => {
            if (!r.isCorrect) missedDomains.add(r.question.domain);
        });

        if (missedDomains.size === 0) {
            // Perfect score, just go to flashcards
            switchScreen('flashcards');
            return;
        }

        switchScreen('flashcards');
        dom.flashcardDomain.value = 'all';
        state.flashcards = STUDY_DATA.flashcards.filter(c => missedDomains.has(c.domain));
        state.currentCardIndex = 0;
        renderCard();
    }

    // ===== Progress Display =====
    function updateProgressDisplay() {
        const p = state.progress;
        dom.statCardsStudied.textContent = p.cardsStudied;
        dom.statQuizzesTaken.textContent = p.quizzesTaken;
        dom.statStreak.textContent = p.streak;

        const avg = p.totalQuestions > 0
            ? Math.round((p.totalScore / p.totalQuestions) * 100)
            : 0;
        dom.statAvgScore.textContent = avg + '%';

        // Domain progress bars
        ['cloud-concepts', 'security', 'technology', 'billing'].forEach(d => {
            const ds = p.domainScores[d];
            const pct = ds.total > 0 ? Math.round((ds.correct / ds.total) * 100) : 0;
            const fillEl = document.getElementById('prog-' + d);
            const pctEl = document.getElementById('pct-' + d);
            if (fillEl) fillEl.style.width = pct + '%';
            if (pctEl) pctEl.textContent = pct + '%';
        });
    }

    function resetProgress() {
        if (confirm('Reset all progress? This cannot be undone!')) {
            state.progress = {
                cardsStudied: 0,
                quizzesTaken: 0,
                totalScore: 0,
                totalQuestions: 0,
                lastStudyDate: null,
                streak: 0,
                domainScores: {
                    'cloud-concepts': { correct: 0, total: 0 },
                    'security': { correct: 0, total: 0 },
                    'technology': { correct: 0, total: 0 },
                    'billing': { correct: 0, total: 0 }
                }
            };
            saveProgress();
            updateProgressDisplay();
        }
    }

    // ===== Utility =====
    function getDomainLabel(domain) {
        const labels = {
            'cloud-concepts': 'Cloud Concepts',
            'security': 'Security & Compliance',
            'technology': 'Technology & Services',
            'billing': 'Billing & Pricing'
        };
        return labels[domain] || domain;
    }

    // ===== Background Animations =====
    function createStars() {
        const container = document.getElementById('bgStars');
        if (!container) return;
        for (let i = 0; i < 60; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = (Math.random() * 3) + 's';
            star.style.animationDuration = (1.5 + Math.random() * 2) + 's';
            const size = 2 + Math.random() * 4;
            star.style.width = size + 'px';
            star.style.height = size + 'px';
            container.appendChild(star);
        }
    }

    function createSparkles() {
        const container = document.getElementById('bgSparkles');
        if (!container) return;
        const emojis = ['\u2728', '\u2B50', '\u2604', '\u2729', '\u269B'];
        for (let i = 0; i < 15; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            sparkle.style.left = Math.random() * 100 + '%';
            sparkle.style.animationDuration = (10 + Math.random() * 15) + 's';
            sparkle.style.animationDelay = (Math.random() * 10) + 's';
            sparkle.style.fontSize = (0.8 + Math.random() * 1) + 'rem';
            container.appendChild(sparkle);
        }
    }

    // ===== Event Listeners =====
    function init() {
        // Background effects
        createStars();
        createSparkles();

        // Navigation
        dom.navBtns.forEach(btn => {
            btn.addEventListener('click', () => switchScreen(btn.dataset.mode));
        });

        // Domain selection on home
        dom.domainBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                selectDomain(btn.dataset.domain);
            });
        });

        // Home action buttons
        dom.startFlashcards.addEventListener('click', () => {
            if (state.selectedDomain !== 'all') {
                dom.flashcardDomain.value = state.selectedDomain;
            }
            switchScreen('flashcards');
        });

        dom.startQuiz.addEventListener('click', () => {
            if (state.selectedDomain !== 'all') {
                dom.quizDomain.value = state.selectedDomain;
            }
            switchScreen('quiz');
        });

        // Flashcard events
        dom.flashcard.addEventListener('click', flipCard);
        dom.flashcard.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                flipCard();
            }
        });
        dom.nextCard.addEventListener('click', nextCard);
        dom.prevCard.addEventListener('click', prevCard);
        dom.shuffleCards.addEventListener('click', shuffleCards);
        dom.flashcardDomain.addEventListener('change', initFlashcards);
        dom.markKnown.addEventListener('click', markCardKnown);
        dom.markReview.addEventListener('click', markCardReview);

        // Quiz events
        dom.beginQuiz.addEventListener('click', startQuiz);
        dom.nextQuestion.addEventListener('click', nextQuizQuestion);
        dom.retryQuiz.addEventListener('click', retryQuiz);
        dom.reviewMissed.addEventListener('click', reviewMissedCards);

        // Progress events
        dom.resetProgress.addEventListener('click', resetProgress);

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            if (state.currentScreen === 'flashcards') {
                if (e.key === 'ArrowRight') nextCard();
                else if (e.key === 'ArrowLeft') prevCard();
                else if (e.key === ' ' && !e.target.closest('button, select')) {
                    e.preventDefault();
                    flipCard();
                }
            }
        });

        // Initialize flashcards on first load
        initFlashcards();
    }

    // Start the app
    init();

})();
