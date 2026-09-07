// ============================================
// PORTFOLIO DATA — Single source of truth
// ============================================

export const personalInfo = {
  name: 'Mayur Chavan',
  firstName: 'Mayur',
  tagline: 'Turning ideas into intelligent software.',
  subTagline:
    'I build practical software solutions by combining software engineering, AI, and modern AI-assisted development.',
  roles: ['Software Developer', 'AI Builder', 'Vibe Coder', 'Prompt Engineer'],
  location: 'Pune',
  email: 'mbchavan04@gmail.com',
  phone: '9529764211',
  github: 'https://github.com/MayurChavan12', // placeholder — update with real URL
  linkedin: '#',                             // update with real LinkedIn URL
};

export const summary = `I am a Computer Engineering graduate with a strong foundation in programming, 
software development, databases, data science, and machine learning. I enjoy transforming ideas 
into practical applications and exploring modern AI-assisted development techniques. 
I am particularly interested in software development, AI-powered applications, prompt engineering, 
and rapid AI-assisted product development.`;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export const developerIdentities = [
  {
    number: '01',
    title: 'Software Developer',
    description:
      'Build reliable and practical applications using modern programming languages, frameworks, and software engineering principles.',
    icon: 'Code2',
    color: '#6366f1',
  },
  {
    number: '02',
    title: 'AI Builder',
    description:
      'Explore AI/ML-powered solutions — from machine learning models to intelligent applications that solve real problems.',
    icon: 'Brain',
    color: '#8b5cf6',
  },
  {
    number: '03',
    title: 'Vibe Coder',
    description:
      'Use AI-assisted development to rapidly transform ideas into working prototypes and products while still focusing on code quality, debugging and testing.',
    icon: 'Zap',
    color: '#22d3ee',
  },
  {
    number: '04',
    title: 'Prompt Engineer',
    description:
      'Design structured prompts and AI workflows to improve reasoning, generation, debugging, development and productivity.',
    icon: 'MessageSquare',
    color: '#f59e0b',
  },
];

export const buildSteps = [
  {
    step: '01',
    title: 'IDEA',
    description: 'Understand the problem and define the goal.',
    icon: 'Lightbulb',
  },
  {
    step: '02',
    title: 'PROMPT',
    description: 'Break the problem into clear instructions.',
    icon: 'MessageSquare',
  },
  {
    step: '03',
    title: 'AI ASSIST',
    description: 'Use AI to explore solutions and accelerate development.',
    icon: 'Brain',
  },
  {
    step: '04',
    title: 'CODE',
    description: 'Implement the solution using appropriate technologies.',
    icon: 'Code2',
  },
  {
    step: '05',
    title: 'TEST',
    description: 'Debug, validate and improve.',
    icon: 'TestTube',
  },
  {
    step: '06',
    title: 'DEPLOY',
    description: 'Turn the working solution into a usable product.',
    icon: 'Rocket',
  },
];

export const skillCategories = {
  Programming: [
    { name: 'Python', icon: '🐍' },
    { name: 'C++', icon: '⚡' },
    { name: 'Java (Basic)', icon: '☕' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'PHP', icon: '🐘' },
    { name: 'HTML', icon: '🌐' },
  ],
  'Frameworks & Tools': [
    { name: 'React', icon: '⚛️' },
    { name: 'Scikit-learn', icon: '🤖' },
    { name: 'Pandas', icon: '🐼' },
    { name: 'Matplotlib', icon: '📊' },
    { name: 'Git', icon: '🔀' },
    { name: 'GitHub', icon: '🐙' },
    { name: 'VS Code', icon: '💻' },
    { name: 'Google Colab', icon: '🧪' },
    { name: 'Jupyter Notebook', icon: '📓' },
  ],
  Databases: [
    { name: 'MySQL', icon: '🐬' },
    { name: 'MongoDB', icon: '🍃' },
  ],
  Concepts: [
    { name: 'OOP', icon: '🏗️' },
    { name: 'Data Structures', icon: '🌳' },
    { name: 'Data Science', icon: '📈' },
    { name: 'Clustering', icon: '🔵' },
    { name: 'Classification', icon: '🏷️' },
    { name: 'Android Dev (Basic)', icon: '📱' },
  ],
};

export const projects = [
  {
    id: 'p1',
    number: '01',
    title: 'AI Powered Job Recommendation System using Hybrid ConvFM Model',
    period: 'Jun 2025 – Jan 2026',
    shortDescription:
      'AI-based job recommendation system with multi-platform job aggregation and a hybrid deep learning model.',
    description:
      'Developed an AI-based job recommendation system that aggregates job listings from multiple platforms and delivers personalized recommendations using a hybrid deep learning model.',
    problem:
      'Job seekers struggle to find relevant opportunities across multiple platforms, and existing systems often rely on simple keyword matching rather than semantic understanding of skills and preferences.',
    solution:
      'Built a hybrid Conv-DeepFM architecture that combines Convolutional Neural Networks, Deep Neural Networks, and Factorization Machines to capture both local feature patterns and complex user-item interactions for accurate personalized matching.',
    features: [
      'Multi-platform job aggregation',
      'Hybrid Conv-DeepFM model for personalized matching',
      'Resume parsing and skill extraction',
      'ATS (Applicant Tracking System) scoring',
      'Job alerts and notifications',
    ],
    technologies: ['Python', 'CNN', 'DNN', 'Factorization Machine', 'Scikit-learn', 'Pandas'],
    architecture: [
      'Job Sources (Multiple Platforms)',
      'Job Data Aggregation & Cleaning',
      'Feature Processing',
      'User / Resume Information',
      'Hybrid Conv-DeepFM Model',
      'Personalized Job Recommendations',
    ],
    github: null,
    color: '#6366f1',
  },
  {
    id: 'p2',
    number: '02',
    title: 'Customer Segmentation using K-Means Clustering',
    period: 'Jan 2025 – Apr 2025',
    shortDescription:
      'Machine learning model using K-Means clustering to segment customers based on purchasing behavior.',
    description:
      'Implemented a machine learning model using K-Means clustering to segment customers based on their purchasing behavior. Enabled businesses to identify distinct customer groups for targeted marketing and better decision-making.',
    problem:
      'Businesses often struggle to understand diverse customer behaviors and effectively target different segments with personalized marketing strategies.',
    solution:
      'Applied unsupervised K-Means clustering to group customers by purchasing patterns, providing actionable segments that businesses can use to optimize marketing campaigns and customer engagement.',
    features: [
      'Data preprocessing and feature engineering',
      'K-Means clustering implementation',
      'Optimal cluster selection (Elbow method)',
      'Customer segment visualization',
      'Business insight generation',
    ],
    technologies: ['Python', 'Google Colab', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    architecture: [
      'Raw Customer Data',
      'Data Preprocessing',
      'Feature Engineering',
      'K-Means Clustering',
      'Cluster Visualization',
      'Business Insights',
    ],
    github: null,
    color: '#8b5cf6',
  },
  {
    id: 'p3',
    number: '03',
    title: 'Tourism Information System',
    period: 'Aug 2024 – Nov 2024',
    shortDescription:
      'Responsive web application to provide information about tourist destinations with search and recommendation features.',
    description:
      'Designed and developed a responsive web application to provide comprehensive information about tourist destinations. Includes user login, search functionality, and recommendation features to enhance the travel planning experience.',
    problem:
      'Travelers need a centralized, user-friendly platform to discover and explore tourist destinations with relevant information and personalized recommendations.',
    solution:
      'Built a full-stack web application with a clean user interface, authentication system, and search and recommendation features to help users discover tourist destinations effectively.',
    features: [
      'User registration and login system',
      'Destination search functionality',
      'Recommendation features',
      'Responsive design',
      'Destination information pages',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL'],
    architecture: [
      'Frontend (HTML/CSS/JS)',
      'PHP Backend',
      'MySQL Database',
      'User Authentication',
      'Search & Filter Engine',
      'Recommendation System',
    ],
    github: null,
    color: '#22d3ee',
  },
];

export const timelineItems = [
  {
    year: '2019–2020',
    title: 'SSC',
    subtitle: 'Champaben Wadilal Dnyanmandir, Tasgaon',
    detail: '96%',
    type: 'education',
    icon: 'GraduationCap',
  },
  {
    year: '2020–2022',
    title: 'HSC',
    subtitle: 'Bapuji Salunkhe Junior College, Karad',
    detail: '82%',
    type: 'education',
    icon: 'GraduationCap',
  },
  {
    year: '2022–2026',
    title: 'Bachelor of Computer Engineering',
    subtitle: 'International Institute Of Information Technology, Pune',
    detail: 'CGPA: 8.85',
    type: 'education',
    icon: 'BookOpen',
  },
  {
    year: '2024',
    title: 'Tourism Information System',
    subtitle: 'Full-Stack Web Project',
    detail: 'HTML • PHP • MySQL',
    type: 'project',
    icon: 'Globe',
  },
  {
    year: '2025',
    title: 'Customer Segmentation',
    subtitle: 'ML Clustering Project',
    detail: 'Python • Scikit-learn',
    type: 'project',
    icon: 'BarChart2',
  },
  {
    year: '2025–2026',
    title: 'AI Job Recommendation System',
    subtitle: 'Final Year Project — Hybrid ConvFM',
    detail: 'AI/ML • Deep Learning',
    type: 'project',
    icon: 'Brain',
  },
];

export const achievements = [
  {
    id: 'a1',
    icon: 'Award',
    title: 'AICTE – Google AI/ML Virtual Internship',
    description:
      'Completed a virtual internship focused on AI and Machine Learning, covering Image Classification, Object Identification, TensorFlow, and Python.',
    tags: ['Image Classification', 'TensorFlow', 'Python', 'AI/ML'],
    color: '#6366f1',
  },
  {
    id: 'a2',
    icon: 'Zap',
    title: 'Smart India Hackathon',
    description:
      'Qualified for the second round of the prestigious Smart India Hackathon, demonstrating problem-solving ability and technical skills.',
    tags: ['Hackathon', 'Problem Solving', 'Innovation'],
    color: '#f59e0b',
  },
  {
    id: 'a3',
    icon: 'FileText',
    title: 'Paper Publication',
    description:
      'Published a review paper titled "The Theory of Big Bang" in the International Journal of Research and Development in Technology.',
    tags: ['Research', 'Publication', 'Academic'],
    color: '#22d3ee',
  },
  {
    id: 'a4',
    icon: 'Trophy',
    title: 'Certificate of Participation',
    description:
      'Received a Certificate of Participation in the Wisdom Sprouts Daily Programming Challenge Competition.',
    tags: ['Programming', 'Competition', 'Certificate'],
    color: '#10b981',
  },
];

export const education = [
  {
    degree: 'Bachelor of Computer Engineering',
    institution: 'International Institute Of Information Technology, Pune',
    score: 'CGPA: 8.85',
    period: '2022 – 2026',
    icon: 'University',
  },
  {
    degree: 'Higher Secondary Certificate (HSC)',
    institution: 'Bapuji Salunkhe Junior College, Karad',
    score: '82%',
    period: '2020 – 2022',
    icon: 'School',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Champaben Wadilal Dnyanmandir, Tasgaon',
    score: '96%',
    period: '2019 – 2020',
    icon: 'BookOpen',
  },
];
