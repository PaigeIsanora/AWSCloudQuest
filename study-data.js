// ===== CloudQuest: AWS Cloud Practitioner Study Data =====
// Organized by the 4 exam domains

const STUDY_DATA = {
    flashcards: [],
    quizzes: []
};

// ===== FLASHCARDS =====
STUDY_DATA.flashcards = [
    // ===== Domain 1: Cloud Concepts =====
    {
        id: 'cc-1',
        domain: 'cloud-concepts',
        question: 'What are the 6 advantages of cloud computing according to AWS?',
        answer: '1) Trade capital expense for variable expense, 2) Benefit from massive economies of scale, 3) Stop guessing capacity, 4) Increase speed and agility, 5) Stop spending money running data centers, 6) Go global in minutes'
    },
    {
        id: 'cc-2',
        domain: 'cloud-concepts',
        question: 'What is the AWS Well-Architected Framework?',
        answer: 'A set of best practices across 6 pillars: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability'
    },
    {
        id: 'cc-3',
        domain: 'cloud-concepts',
        question: 'What are the 3 cloud computing deployment models?',
        answer: 'Cloud (fully deployed in the cloud), Hybrid (mix of cloud and on-premises), On-Premises / Private Cloud (using virtualization and resource management tools)'
    },
    {
        id: 'cc-4',
        domain: 'cloud-concepts',
        question: 'What are the 3 cloud service models?',
        answer: 'IaaS (Infrastructure as a Service) - e.g., EC2; PaaS (Platform as a Service) - e.g., Elastic Beanstalk; SaaS (Software as a Service) - e.g., Gmail, Salesforce'
    },
    {
        id: 'cc-5',
        domain: 'cloud-concepts',
        question: 'What does "elasticity" mean in cloud computing?',
        answer: 'The ability to automatically scale resources up or down based on demand, so you only pay for what you use'
    },
    {
        id: 'cc-6',
        domain: 'cloud-concepts',
        question: 'What does "high availability" mean in AWS?',
        answer: 'A system designed to operate continuously without failure for a long time, typically by running in multiple Availability Zones to survive component failures'
    },
    {
        id: 'cc-7',
        domain: 'cloud-concepts',
        question: 'What is an AWS Region?',
        answer: 'A physical location in the world with multiple isolated data centers (Availability Zones). Each Region is completely independent.'
    },
    {
        id: 'cc-8',
        domain: 'cloud-concepts',
        question: 'What is an Availability Zone (AZ)?',
        answer: 'One or more discrete data centers within a Region, each with redundant power, networking, and connectivity. AZs are isolated from each other to prevent correlated failures.'
    },
    {
        id: 'cc-9',
        domain: 'cloud-concepts',
        question: 'What are Edge Locations?',
        answer: 'Sites that Amazon CloudFront uses to cache copies of content closer to users for faster delivery. There are more Edge Locations than Regions.'
    },
    {
        id: 'cc-10',
        domain: 'cloud-concepts',
        question: 'What is the AWS Shared Responsibility Model?',
        answer: 'AWS is responsible for security OF the cloud (hardware, software, networking, facilities). Customers are responsible for security IN the cloud (data, OS, network/firewall config, IAM).'
    },
    // ===== Domain 2: Security & Compliance =====
    {
        id: 'sec-1',
        domain: 'security',
        question: 'What is AWS IAM?',
        answer: 'Identity and Access Management - a service that lets you manage access to AWS services and resources. You create Users, Groups, Roles, and Policies.'
    },
    {
        id: 'sec-2',
        domain: 'security',
        question: 'What is the principle of least privilege?',
        answer: 'Grant only the minimum permissions a user/service needs to perform their task. Start with no permissions and add only what is needed.'
    },
    {
        id: 'sec-3',
        domain: 'security',
        question: 'What is MFA in AWS?',
        answer: 'Multi-Factor Authentication - adds an extra layer of security by requiring a code from a physical or virtual device in addition to username/password.'
    },
    {
        id: 'sec-4',
        domain: 'security',
        question: 'What is AWS CloudTrail?',
        answer: 'A service that logs all API calls and account activity across your AWS infrastructure. Used for auditing, compliance, and security analysis.'
    },
    {
        id: 'sec-5',
        domain: 'security',
        question: 'What is AWS Shield?',
        answer: 'A managed DDoS protection service. Shield Standard is free and automatic. Shield Advanced provides enhanced protections and 24/7 support for an additional fee.'
    },
    {
        id: 'sec-6',
        domain: 'security',
        question: 'What is AWS WAF?',
        answer: 'Web Application Firewall - protects web applications from common exploits like SQL injection and cross-site scripting (XSS) by filtering HTTP/HTTPS requests.'
    },
    {
        id: 'sec-7',
        domain: 'security',
        question: 'What is the root user in AWS?',
        answer: 'The account created with the email address when you first set up your AWS account. It has unrestricted access to all resources. Best practice: lock it away, enable MFA, and use IAM users instead.'
    },
    {
        id: 'sec-8',
        domain: 'security',
        question: 'What is an IAM Policy?',
        answer: 'A JSON document that defines permissions (allow or deny) for actions on AWS resources. Policies are attached to users, groups, or roles.'
    },
    {
        id: 'sec-9',
        domain: 'security',
        question: 'What is an IAM Role?',
        answer: 'An identity with specific permissions that can be assumed temporarily by users, applications, or services. Unlike users, roles do not have permanent credentials.'
    },
    {
        id: 'sec-10',
        domain: 'security',
        question: 'What is AWS KMS?',
        answer: 'Key Management Service - creates and manages cryptographic keys for encrypting your data. Integrated with many AWS services for encryption at rest.'
    },
    {
        id: 'sec-11',
        domain: 'security',
        question: 'What is AWS GuardDuty?',
        answer: 'An intelligent threat detection service that continuously monitors for malicious activity and unauthorized behavior using machine learning and anomaly detection.'
    },
    {
        id: 'sec-12',
        domain: 'security',
        question: 'What is AWS Config?',
        answer: 'A service that tracks and records AWS resource configurations over time. Helps assess compliance, audit changes, and troubleshoot issues.'
    },
    // ===== Domain 3: Cloud Technology & Services =====
    {
        id: 'tech-1',
        domain: 'technology',
        question: 'What is Amazon EC2?',
        answer: 'Elastic Compute Cloud - provides resizable virtual servers (instances) in the cloud. You choose instance type, OS, and pay by the second/hour.'
    },
    {
        id: 'tech-2',
        domain: 'technology',
        question: 'What is Amazon S3?',
        answer: 'Simple Storage Service - object storage with 99.999999999% (11 nines) durability. Store and retrieve any amount of data. Used for backups, static websites, data lakes.'
    },
    {
        id: 'tech-3',
        domain: 'technology',
        question: 'What is Amazon RDS?',
        answer: 'Relational Database Service - managed database service supporting MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, and Aurora. AWS handles patching, backups, and scaling.'
    },
    {
        id: 'tech-4',
        domain: 'technology',
        question: 'What is AWS Lambda?',
        answer: 'A serverless compute service that runs your code in response to events. You pay only for compute time consumed - no servers to manage.'
    },
    {
        id: 'tech-5',
        domain: 'technology',
        question: 'What is Amazon VPC?',
        answer: 'Virtual Private Cloud - lets you provision a logically isolated network in AWS where you can launch resources. You control IP ranges, subnets, route tables, and gateways.'
    },
    {
        id: 'tech-6',
        domain: 'technology',
        question: 'What is Amazon CloudFront?',
        answer: 'A Content Delivery Network (CDN) that delivers data, videos, and APIs to users globally with low latency using Edge Locations.'
    },
    {
        id: 'tech-7',
        domain: 'technology',
        question: 'What is Amazon DynamoDB?',
        answer: 'A fully managed NoSQL database service offering single-digit millisecond performance at any scale. Serverless with automatic scaling.'
    },
    {
        id: 'tech-8',
        domain: 'technology',
        question: 'What is Amazon SQS?',
        answer: 'Simple Queue Service - a fully managed message queuing service for decoupling and scaling microservices, distributed systems, and serverless applications.'
    },
    {
        id: 'tech-9',
        domain: 'technology',
        question: 'What is Amazon SNS?',
        answer: 'Simple Notification Service - a pub/sub messaging service for sending notifications via SMS, email, HTTP, or to SQS queues and Lambda functions.'
    },
    {
        id: 'tech-10',
        domain: 'technology',
        question: 'What is AWS Elastic Beanstalk?',
        answer: 'A PaaS that deploys and scales web applications automatically. You upload code and Beanstalk handles capacity provisioning, load balancing, and auto-scaling.'
    },
    {
        id: 'tech-11',
        domain: 'technology',
        question: 'What is Amazon Route 53?',
        answer: 'A scalable DNS web service that routes users to applications by translating domain names into IP addresses. Supports domain registration and health checking.'
    },
    {
        id: 'tech-12',
        domain: 'technology',
        question: 'What is AWS Auto Scaling?',
        answer: 'Automatically adjusts the number of EC2 instances based on demand. Scales out (adds instances) when demand increases and scales in (removes) when demand decreases.'
    },
    {
        id: 'tech-13',
        domain: 'technology',
        question: 'What is Elastic Load Balancing (ELB)?',
        answer: 'Automatically distributes incoming application traffic across multiple targets (EC2 instances, containers, IPs). Types: Application LB (Layer 7), Network LB (Layer 4), Gateway LB.'
    },
    {
        id: 'tech-14',
        domain: 'technology',
        question: 'What is Amazon ECS / EKS?',
        answer: 'ECS (Elastic Container Service) and EKS (Elastic Kubernetes Service) are container orchestration services. ECS is AWS-native; EKS is managed Kubernetes.'
    },
    {
        id: 'tech-15',
        domain: 'technology',
        question: 'What is AWS Fargate?',
        answer: 'A serverless compute engine for containers. Works with ECS and EKS. You do not need to manage the underlying EC2 instances.'
    },
    {
        id: 'tech-16',
        domain: 'technology',
        question: 'What is Amazon Aurora?',
        answer: 'A MySQL and PostgreSQL-compatible relational database built for the cloud. Up to 5x faster than standard MySQL and 3x faster than PostgreSQL, with automatic scaling.'
    },
    {
        id: 'tech-17',
        domain: 'technology',
        question: 'What is Amazon Redshift?',
        answer: 'A fast, fully managed data warehouse for running complex analytics queries against petabytes of structured data using SQL.'
    },
    {
        id: 'tech-18',
        domain: 'technology',
        question: 'What is AWS CloudFormation?',
        answer: 'Infrastructure as Code (IaC) service that lets you model and provision AWS resources using JSON or YAML templates. Automates and standardizes deployments.'
    },
    // ===== Domain 4: Billing & Pricing =====
    {
        id: 'bill-1',
        domain: 'billing',
        question: 'What is the AWS Free Tier?',
        answer: 'Offers 3 types of free offers: Always Free (e.g., Lambda 1M requests/mo), 12 Months Free (e.g., EC2 t2.micro 750 hrs/mo), and Trials (short-term for specific services).'
    },
    {
        id: 'bill-2',
        domain: 'billing',
        question: 'What are the EC2 pricing models?',
        answer: 'On-Demand (pay per second/hour), Reserved Instances (1 or 3 year commitment, up to 72% discount), Spot Instances (up to 90% off, can be interrupted), Savings Plans (flexible commitment).'
    },
    {
        id: 'bill-3',
        domain: 'billing',
        question: 'What is AWS Cost Explorer?',
        answer: 'A tool that lets you visualize, understand, and manage your AWS costs and usage over time. Provides forecasting and recommendations for Savings Plans.'
    },
    {
        id: 'bill-4',
        domain: 'billing',
        question: 'What is AWS Budgets?',
        answer: 'Lets you set custom cost and usage budgets and receive alerts when you exceed or are forecasted to exceed your thresholds.'
    },
    {
        id: 'bill-5',
        domain: 'billing',
        question: 'What is the AWS Pricing Calculator?',
        answer: 'A web tool that lets you estimate the cost of AWS services before you use them. Helps plan and budget by creating cost estimates for your architecture.'
    },
    {
        id: 'bill-6',
        domain: 'billing',
        question: 'What is Consolidated Billing in AWS Organizations?',
        answer: 'Combines billing from multiple AWS accounts into one bill for easier tracking. Provides volume discounts since usage is aggregated across all accounts.'
    },
    {
        id: 'bill-7',
        domain: 'billing',
        question: 'What are AWS Support Plans?',
        answer: 'Basic (free, documentation/forums), Developer ($29/mo, email support), Business (from $100/mo, 24/7 phone/chat), Enterprise (from $15K/mo, TAM + concierge).'
    },
    {
        id: 'bill-8',
        domain: 'billing',
        question: 'What is AWS Trusted Advisor?',
        answer: 'An online tool that provides real-time guidance to help provision resources following AWS best practices across 5 categories: cost optimization, performance, security, fault tolerance, service limits.'
    },
    {
        id: 'bill-9',
        domain: 'billing',
        question: 'What are Tags in AWS and how do they help with billing?',
        answer: 'Key-value pairs attached to resources. Cost allocation tags let you track costs by project, team, or environment in detailed billing reports.'
    },
    {
        id: 'bill-10',
        domain: 'billing',
        question: 'What is the Total Cost of Ownership (TCO) concept?',
        answer: 'TCO compares the full cost of running on-premises infrastructure (hardware, power, cooling, staff, real estate) vs. cloud. Cloud typically has lower TCO due to eliminating capital expenses.'
    },
    // ===== AWS Cloud Adoption Framework (CAF) =====
    {
        id: 'caf-1',
        domain: 'cloud-concepts',
        question: 'What is the AWS Cloud Adoption Framework (CAF)?',
        answer: 'A framework that provides guidance and best practices to help organizations develop an efficient plan for their cloud adoption journey. It organizes guidance into 6 Perspectives across 3 transformation domains.'
    },
    {
        id: 'caf-2',
        domain: 'cloud-concepts',
        question: 'What are the 6 Perspectives of the AWS CAF?',
        answer: 'Business, People, Governance (business-focused), and Platform, Security, Operations (technology-focused).'
    },
    {
        id: 'caf-3',
        domain: 'cloud-concepts',
        question: 'What does the Business Perspective of the AWS CAF focus on?',
        answer: 'Ensures IT aligns with business needs and IT investments link to key business results. Stakeholders: CEO, CFO, COO, CIO, business managers.'
    },
    {
        id: 'caf-4',
        domain: 'cloud-concepts',
        question: 'What does the People Perspective of the AWS CAF focus on?',
        answer: 'Bridges the gap between technology and business by evolving organizational culture and roles. Focuses on training, staffing, and change management. Stakeholders: HR, CIO, managers.'
    },
    {
        id: 'caf-5',
        domain: 'cloud-concepts',
        question: 'What does the Governance Perspective of the AWS CAF focus on?',
        answer: 'Aligns IT strategy with business strategy. Focuses on skills and processes for managing budgets, measuring cloud investments, and managing risk. Stakeholders: CIO, PMO, enterprise architects.'
    },
    {
        id: 'caf-6',
        domain: 'cloud-concepts',
        question: 'What does the Platform Perspective of the AWS CAF focus on?',
        answer: 'Helps design, implement, and optimize AWS infrastructure. Focuses on provisioning new solutions and migrating workloads. Stakeholders: CTO, IT managers, solutions architects.'
    },
    {
        id: 'caf-7',
        domain: 'cloud-concepts',
        question: 'What does the Security Perspective of the AWS CAF focus on?',
        answer: 'Ensures the organization meets security objectives for visibility, auditability, control, and agility. Focuses on IAM, detective controls, infrastructure security, data protection. Stakeholders: CISO, IT security managers.'
    },
    {
        id: 'caf-8',
        domain: 'cloud-concepts',
        question: 'What does the Operations Perspective of the AWS CAF focus on?',
        answer: 'Ensures you run and recover IT workloads to meet business needs. Defines procedures and manages day-to-day operations. Stakeholders: IT operations managers, IT support managers.'
    },
    {
        id: 'caf-9',
        domain: 'cloud-concepts',
        question: 'What are the 4 Cloud Transformation Domains in the AWS CAF?',
        answer: '1) Technology (migrate/modernize infrastructure), 2) Process (digitize/automate operations), 3) Organization (reimagine your operating model), 4) Product (reimagine your business model).'
    },
    {
        id: 'caf-10',
        domain: 'cloud-concepts',
        question: 'What are the 3 CAF Transformation Phases?',
        answer: '1) Envision - demonstrate how cloud accelerates business outcomes, 2) Align - identify gaps across the 6 perspectives, 3) Launch - deliver pilot initiatives, 4) Scale - expand production pilots and business value.'
    },
];

// ===== QUIZ QUESTIONS =====
STUDY_DATA.quizzes = [
    // ===== Domain 1: Cloud Concepts =====
    {
        id: 'qcc-1',
        domain: 'cloud-concepts',
        question: 'Which advantage of cloud computing refers to the ability to acquire resources as you need them and release when you don\'t?',
        options: ['Go global in minutes', 'Benefit from economies of scale', 'Stop guessing capacity', 'Trade capital expense for variable expense'],
        correct: 2,
        explanation: '"Stop guessing capacity" means you can scale up or down based on actual demand, rather than over-provisioning or under-provisioning.'
    },
    {
        id: 'qcc-2',
        domain: 'cloud-concepts',
        question: 'A company wants to run workloads both on-premises and in the AWS Cloud. Which deployment model describes this approach?',
        options: ['Public Cloud', 'Private Cloud', 'Hybrid Cloud', 'Multi-Cloud'],
        correct: 2,
        explanation: 'Hybrid Cloud combines on-premises infrastructure (or a private cloud) with public cloud resources.'
    },
    {
        id: 'qcc-3',
        domain: 'cloud-concepts',
        question: 'Which pillar of the Well-Architected Framework focuses on running workloads effectively and gaining insight into operations?',
        options: ['Reliability', 'Operational Excellence', 'Performance Efficiency', 'Security'],
        correct: 1,
        explanation: 'Operational Excellence focuses on running and monitoring systems to deliver business value and continually improving processes.'
    },
    {
        id: 'qcc-4',
        domain: 'cloud-concepts',
        question: 'What does "elasticity" in cloud computing mean?',
        options: ['Data is replicated across regions', 'Resources can automatically scale up and down', 'Services are available 99.99% of the time', 'You pay a fixed monthly fee'],
        correct: 1,
        explanation: 'Elasticity is the ability to automatically acquire resources when needed and release them when they are no longer needed.'
    },
    {
        id: 'qcc-5',
        domain: 'cloud-concepts',
        question: 'Which cloud service model gives the customer the MOST control over the underlying infrastructure?',
        options: ['SaaS', 'PaaS', 'IaaS', 'FaaS'],
        correct: 2,
        explanation: 'IaaS (Infrastructure as a Service) provides the most control - you manage the OS, middleware, and applications while AWS provides the hardware.'
    },
    {
        id: 'qcc-6',
        domain: 'cloud-concepts',
        question: 'What is the MINIMUM number of Availability Zones recommended for high availability?',
        options: ['1', '2', '3', '4'],
        correct: 1,
        explanation: 'AWS recommends deploying across at least 2 Availability Zones for high availability so your application survives a single AZ failure.'
    },
    {
        id: 'qcc-7',
        domain: 'cloud-concepts',
        question: 'Under the Shared Responsibility Model, which is the customer\'s responsibility?',
        options: ['Physical security of data centers', 'Patching the hypervisor', 'Configuring security groups', 'Maintaining network infrastructure'],
        correct: 2,
        explanation: 'Security groups (firewall rules) are configured by the customer. AWS handles physical security, hypervisor, and network infrastructure.'
    },
    // ===== Domain 2: Security & Compliance =====
    {
        id: 'qsec-1',
        domain: 'security',
        question: 'Which AWS service provides a managed DDoS protection?',
        options: ['AWS WAF', 'AWS Shield', 'Amazon GuardDuty', 'AWS Config'],
        correct: 1,
        explanation: 'AWS Shield provides managed DDoS protection. Shield Standard is automatic and free; Shield Advanced provides additional protections.'
    },
    {
        id: 'qsec-2',
        domain: 'security',
        question: 'What is the BEST practice for the AWS root user account?',
        options: ['Use it for daily tasks', 'Share credentials with admins', 'Enable MFA and avoid using it for everyday tasks', 'Delete it after creating IAM users'],
        correct: 2,
        explanation: 'Best practice is to enable MFA on the root account, use it only for tasks that require root, and use IAM users for everything else.'
    },
    {
        id: 'qsec-3',
        domain: 'security',
        question: 'Which service records API calls made in your AWS account for auditing?',
        options: ['Amazon CloudWatch', 'AWS CloudTrail', 'AWS Config', 'AWS X-Ray'],
        correct: 1,
        explanation: 'CloudTrail records API calls and account activity. CloudWatch monitors performance metrics. Config tracks resource configurations.'
    },
    {
        id: 'qsec-4',
        domain: 'security',
        question: 'An application on EC2 needs to access an S3 bucket. What is the recommended way to grant access?',
        options: ['Store access keys on the instance', 'Use an IAM Role attached to the EC2 instance', 'Make the bucket public', 'Hardcode credentials in the app'],
        correct: 1,
        explanation: 'IAM Roles provide temporary credentials automatically to EC2 instances. Never store long-term credentials on instances.'
    },
    {
        id: 'qsec-5',
        domain: 'security',
        question: 'Which service helps protect web applications from SQL injection and XSS attacks?',
        options: ['AWS Shield', 'AWS WAF', 'Amazon Inspector', 'AWS KMS'],
        correct: 1,
        explanation: 'AWS WAF (Web Application Firewall) lets you create rules to filter HTTP requests and block common attacks like SQL injection and XSS.'
    },
    {
        id: 'qsec-6',
        domain: 'security',
        question: 'Which AWS service uses machine learning to detect threats and unauthorized behavior?',
        options: ['AWS Config', 'Amazon Inspector', 'Amazon GuardDuty', 'AWS Trusted Advisor'],
        correct: 2,
        explanation: 'Amazon GuardDuty uses ML and anomaly detection to continuously monitor for malicious or unauthorized activity in your AWS accounts.'
    },
    {
        id: 'qsec-7',
        domain: 'security',
        question: 'What is the purpose of AWS KMS?',
        options: ['Monitor API calls', 'Manage encryption keys', 'Detect security threats', 'Configure firewalls'],
        correct: 1,
        explanation: 'AWS Key Management Service (KMS) lets you create, manage, and control cryptographic keys used to encrypt your data.'
    },
    // ===== Domain 3: Cloud Technology & Services =====
    {
        id: 'qtech-1',
        domain: 'technology',
        question: 'Which AWS service provides resizable compute capacity in the cloud?',
        options: ['Amazon S3', 'Amazon EC2', 'AWS Lambda', 'Amazon RDS'],
        correct: 1,
        explanation: 'Amazon EC2 (Elastic Compute Cloud) provides virtual servers with resizable compute capacity.'
    },
    {
        id: 'qtech-2',
        domain: 'technology',
        question: 'Which AWS service is a serverless compute service that runs code in response to events?',
        options: ['Amazon EC2', 'AWS Fargate', 'AWS Lambda', 'Amazon ECS'],
        correct: 2,
        explanation: 'AWS Lambda runs code without provisioning servers. You pay only for compute time consumed when your code is running.'
    },
    {
        id: 'qtech-3',
        domain: 'technology',
        question: 'Which S3 storage class is the MOST cost-effective for data that is rarely accessed but needs rapid retrieval?',
        options: ['S3 Standard', 'S3 Intelligent-Tiering', 'S3 Standard-IA', 'S3 Glacier'],
        correct: 2,
        explanation: 'S3 Standard-IA (Infrequent Access) is cheaper storage with a retrieval fee, designed for data accessed less frequently but needing millisecond access.'
    },
    {
        id: 'qtech-4',
        domain: 'technology',
        question: 'Which service distributes content to users globally with low latency using Edge Locations?',
        options: ['Amazon Route 53', 'Amazon CloudFront', 'Elastic Load Balancing', 'AWS Global Accelerator'],
        correct: 1,
        explanation: 'Amazon CloudFront is a CDN that caches content at Edge Locations around the world for faster delivery to users.'
    },
    {
        id: 'qtech-5',
        domain: 'technology',
        question: 'Which database service is a fully managed NoSQL database?',
        options: ['Amazon RDS', 'Amazon Aurora', 'Amazon DynamoDB', 'Amazon Redshift'],
        correct: 2,
        explanation: 'DynamoDB is a serverless NoSQL database with single-digit millisecond performance. RDS and Aurora are relational. Redshift is a data warehouse.'
    },
    {
        id: 'qtech-6',
        domain: 'technology',
        question: 'Which service automatically distributes incoming traffic across multiple EC2 instances?',
        options: ['Amazon Route 53', 'AWS Auto Scaling', 'Elastic Load Balancing', 'Amazon CloudFront'],
        correct: 2,
        explanation: 'Elastic Load Balancing (ELB) distributes incoming application traffic across multiple targets like EC2 instances, containers, and IPs.'
    },
    {
        id: 'qtech-7',
        domain: 'technology',
        question: 'Which AWS service lets you deploy infrastructure using code templates (IaC)?',
        options: ['AWS CodeDeploy', 'AWS CloudFormation', 'AWS Elastic Beanstalk', 'AWS OpsWorks'],
        correct: 1,
        explanation: 'CloudFormation lets you define infrastructure in JSON/YAML templates and deploy it as stacks. This is Infrastructure as Code.'
    },
    {
        id: 'qtech-8',
        domain: 'technology',
        question: 'A company wants a managed relational database. Which service should they use?',
        options: ['Amazon DynamoDB', 'Amazon RDS', 'Amazon ElastiCache', 'Amazon S3'],
        correct: 1,
        explanation: 'Amazon RDS is a managed relational database service supporting MySQL, PostgreSQL, Oracle, SQL Server, and MariaDB.'
    },
    {
        id: 'qtech-9',
        domain: 'technology',
        question: 'Which service provides DNS and domain name registration?',
        options: ['Amazon CloudFront', 'AWS Direct Connect', 'Amazon Route 53', 'Amazon VPC'],
        correct: 2,
        explanation: 'Route 53 is a scalable DNS web service that translates domain names to IP addresses and supports domain registration.'
    },
    {
        id: 'qtech-10',
        domain: 'technology',
        question: 'Which compute service runs containers without managing the underlying servers?',
        options: ['Amazon EC2', 'AWS Lambda', 'AWS Fargate', 'Amazon Lightsail'],
        correct: 2,
        explanation: 'AWS Fargate is a serverless compute engine for containers. It works with ECS and EKS without needing to manage EC2 instances.'
    },
    // ===== Domain 4: Billing & Pricing =====
    {
        id: 'qbill-1',
        domain: 'billing',
        question: 'Which EC2 pricing model provides the LARGEST discount but instances can be interrupted?',
        options: ['On-Demand', 'Reserved Instances', 'Spot Instances', 'Dedicated Hosts'],
        correct: 2,
        explanation: 'Spot Instances offer up to 90% discount but AWS can reclaim them with a 2-minute warning when capacity is needed.'
    },
    {
        id: 'qbill-2',
        domain: 'billing',
        question: 'Which tool provides real-time guidance on AWS best practices across cost, performance, security, and fault tolerance?',
        options: ['AWS Cost Explorer', 'AWS Budgets', 'AWS Trusted Advisor', 'AWS Config'],
        correct: 2,
        explanation: 'Trusted Advisor inspects your environment and provides recommendations across 5 categories including cost optimization and security.'
    },
    {
        id: 'qbill-3',
        domain: 'billing',
        question: 'Which service lets you set custom cost budgets and receive alerts when thresholds are exceeded?',
        options: ['AWS Cost Explorer', 'AWS Budgets', 'AWS Pricing Calculator', 'AWS Billing Dashboard'],
        correct: 1,
        explanation: 'AWS Budgets lets you set custom budgets for cost, usage, or reservation utilization and sends alerts via email or SNS when thresholds are breached.'
    },
    {
        id: 'qbill-4',
        domain: 'billing',
        question: 'A company has multiple AWS accounts. How can they get ONE combined bill and volume discounts?',
        options: ['AWS Budgets', 'AWS Cost Explorer', 'Consolidated Billing with AWS Organizations', 'AWS Marketplace'],
        correct: 2,
        explanation: 'Consolidated Billing in AWS Organizations combines usage across accounts for one bill and volume pricing discounts.'
    },
    {
        id: 'qbill-5',
        domain: 'billing',
        question: 'Which AWS Support plan provides a Technical Account Manager (TAM)?',
        options: ['Basic', 'Developer', 'Business', 'Enterprise'],
        correct: 3,
        explanation: 'Only the Enterprise Support plan includes a dedicated Technical Account Manager (TAM) and Concierge support team.'
    },
    {
        id: 'qbill-6',
        domain: 'billing',
        question: 'Which tool helps you estimate costs BEFORE deploying AWS resources?',
        options: ['AWS Cost Explorer', 'AWS Budgets', 'AWS Pricing Calculator', 'AWS Trusted Advisor'],
        correct: 2,
        explanation: 'The AWS Pricing Calculator lets you create cost estimates for your use case before you actually provision any resources.'
    },
    {
        id: 'qbill-7',
        domain: 'billing',
        question: 'What is a key benefit of Reserved Instances compared to On-Demand?',
        options: ['No upfront commitment', 'Up to 72% cost savings with 1-3 year commitment', 'Instances can be interrupted', 'Free tier eligible'],
        correct: 1,
        explanation: 'Reserved Instances offer significant discounts (up to 72%) compared to On-Demand pricing in exchange for a 1 or 3-year commitment.'
    },
    {
        id: 'qbill-8',
        domain: 'billing',
        question: 'Which feature helps you track AWS costs by project or team?',
        options: ['Security Groups', 'Cost Allocation Tags', 'IAM Policies', 'VPC Subnets'],
        correct: 1,
        explanation: 'Cost Allocation Tags are key-value pairs you attach to resources. When activated, they appear in billing reports to categorize costs.'
    },
    {
        id: 'qbill-9',
        domain: 'billing',
        question: 'Which of the following is included in the AWS Free Tier for 12 months?',
        options: ['Unlimited S3 storage', '750 hours/month of EC2 t2.micro', 'Unlimited Lambda invocations', 'Dedicated Host'],
        correct: 1,
        explanation: 'The 12-month free tier includes 750 hours/month of EC2 t2.micro (or t3.micro in some regions) for new AWS accounts.'
    },
    {
        id: 'qbill-10',
        domain: 'billing',
        question: 'Which service visualizes your AWS spending patterns over time and provides forecasts?',
        options: ['AWS Budgets', 'AWS Cost Explorer', 'AWS Trusted Advisor', 'AWS Organizations'],
        correct: 1,
        explanation: 'AWS Cost Explorer lets you visualize and manage costs/usage over time with graphs, filters, and forecasting capabilities.'
    },
    // ===== AWS Cloud Adoption Framework (CAF) =====
    {
        id: 'qcaf-1',
        domain: 'cloud-concepts',
        question: 'How many Perspectives does the AWS Cloud Adoption Framework (CAF) have?',
        options: ['4', '5', '6', '7'],
        correct: 2,
        explanation: 'The AWS CAF has 6 Perspectives: Business, People, Governance (business-focused) and Platform, Security, Operations (technology-focused).'
    },
    {
        id: 'qcaf-2',
        domain: 'cloud-concepts',
        question: 'Which AWS CAF Perspective focuses on training, staffing, and organizational change management?',
        options: ['Business', 'People', 'Governance', 'Operations'],
        correct: 1,
        explanation: 'The People Perspective focuses on evolving culture, organizational structure, roles, and training to support cloud adoption.'
    },
    {
        id: 'qcaf-3',
        domain: 'cloud-concepts',
        question: 'Which AWS CAF Perspective ensures IT investments link to key business outcomes?',
        options: ['People', 'Platform', 'Business', 'Governance'],
        correct: 2,
        explanation: 'The Business Perspective ensures cloud investments accelerate business outcomes. Common stakeholders include the CEO, CFO, and business managers.'
    },
    {
        id: 'qcaf-4',
        domain: 'cloud-concepts',
        question: 'Which AWS CAF Perspectives are TECHNOLOGY-focused?',
        options: ['Business, People, Governance', 'Platform, Security, Operations', 'Business, Security, Platform', 'People, Operations, Governance'],
        correct: 1,
        explanation: 'Platform, Security, and Operations are technology-focused. Business, People, and Governance are business-focused.'
    },
    {
        id: 'qcaf-5',
        domain: 'cloud-concepts',
        question: 'A company needs help designing and implementing their AWS infrastructure during migration. Which CAF Perspective applies?',
        options: ['Business', 'Operations', 'Platform', 'Governance'],
        correct: 2,
        explanation: 'The Platform Perspective helps build an enterprise-grade cloud platform, architect new solutions, and migrate existing workloads.'
    },
    {
        id: 'qcaf-6',
        domain: 'cloud-concepts',
        question: 'Which CAF Perspective focuses on managing budgets, measuring cloud benefits, and managing risk?',
        options: ['Business', 'People', 'Governance', 'Operations'],
        correct: 2,
        explanation: 'The Governance Perspective focuses on orchestrating cloud initiatives, maximizing organizational benefits, and minimizing transformation-related risks.'
    },
    {
        id: 'qcaf-7',
        domain: 'cloud-concepts',
        question: 'What are the Cloud Transformation Domains in the AWS CAF?',
        options: ['Technology, Process, Organization, Product', 'Plan, Build, Run, Optimize', 'Migrate, Modernize, Innovate, Scale', 'Envision, Align, Launch, Scale'],
        correct: 0,
        explanation: 'The 4 transformation domains are Technology, Process, Organization, and Product. (Envision, Align, Launch, Scale are the transformation phases.)'
    },
    {
        id: 'qcaf-8',
        domain: 'cloud-concepts',
        question: 'A CISO wants to ensure their cloud environment meets security objectives. Which CAF Perspective should they focus on?',
        options: ['Governance', 'Platform', 'Security', 'Operations'],
        correct: 2,
        explanation: 'The Security Perspective helps achieve confidentiality, integrity, and availability of data and cloud workloads. Key stakeholders include the CISO and security teams.'
    }
];
