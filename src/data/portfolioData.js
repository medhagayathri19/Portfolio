export const personalData = {
  name: "KOLLI MEDHA GAYATHRI",
  shortName: "KOLLI MEDHA GAYATHRI",
  title: "Computer Science Student | Full-Stack Developer | Software Engineer",
  subtitles: [
    "Computer Science Engineering Student",
    "Full-Stack Web Developer",
    "Data Structures & Problem Solver",
    "Software Engineering Enthusiast"
  ],
  bio: "Dedicated 3rd-year Computer Science Engineering student at Vignan University with a strong academic standing (CGPA 8.93). Driven by a passion for building scalable full-stack web applications, smart software systems, and intuitive user experiences. Eager to leverage technical skills in challenging internships and real-world software engineering roles.",
  aboutExtended: "I am currently pursuing my B.Tech in Computer Science and Engineering (3rd Year) at Vignan's Foundation for Science, Technology & Research (Vignan University). My academic journey is built on a foundation of excellence, securing 98.2% in my Intermediate exams and 95% in SSC. I specialize in full-stack web development using React, Node.js, and modern databases, alongside strong expertise in Data Structures, C, Python, and Object-Oriented Programming.",
  email: "medhagayathri@email.com",
  phone: "+91 9381598421",
  location: "Andhra Pradesh, India",
  availability: "Available for Internships & Technical Projects",
  github: "https://github.com/medhagayathri19",
  linkedin: "https://linkedin.com",
  stats: [
    { label: "CGPA (B.Tech)", value: "8.93 / 10" },
    { label: "Intermediate", value: "98.2%" },
    { label: "SSC Board", value: "95%" },
    { label: "Projects Built", value: "4+" }
  ],
  careerInterests: [
    "Full-Stack Web Development",
    "Software Engineering",
    "Database Architecture & Systems",
    "Cloud Computing & Web Applications"
  ],
  languages: ["English (Professional)", "Telugu (Native)", "Hindi (Conversational)"]
};

export const skillsData = [
  {
    category: "Programming & Core",
    icon: "Code2",
    description: "Solid foundational programming and algorithmic logic",
    skills: [
      { name: "C Language", level: "Proficient", icon: "C", highlight: "Data Structures & Memory Concepts" },
      { name: "Python", level: "Proficient", icon: "Python", highlight: "Scripting, OOP & Logic Building" },
      { name: "JavaScript (ES6+)", level: "Proficient", icon: "JS", highlight: "Async/Await, DOM & Closures" },
      { name: "Data Structures", level: "Advanced", icon: "DS", highlight: "Arrays, Stacks, Queues, Trees, Graphs" },
      { name: "OOP Concepts", level: "Advanced", icon: "OOP", highlight: "Inheritance, Polymorphism, Abstraction" }
    ]
  },
  {
    category: "Frontend Development",
    icon: "Layout",
    description: "Building responsive, modern, user-centric interfaces",
    skills: [
      { name: "HTML5", level: "Proficient", icon: "HTML", highlight: "Semantic Structure & Accessibility" },
      { name: "CSS3", level: "Proficient", icon: "CSS", highlight: "Flexbox, Grid, Animations & Glassmorphism" },
      { name: "JavaScript", level: "Proficient", icon: "JS", highlight: "Dynamic UI Logic & Web APIs" },
      { name: "React.js", level: "Proficient", icon: "React", highlight: "Hooks, State Management, Router" },
      { name: "Advanced CSS3", level: "Proficient", icon: "CSS", highlight: "Flexbox, Grid, Animations & Responsive Layouts" }
    ]
  },
  {
    category: "Backend & APIs",
    icon: "Server",
    description: "Constructing reliable server-side logic and web services",
    skills: [
      { name: "Node.js", level: "Intermediate", icon: "Node", highlight: "Event-driven runtime & NPM Ecosystem" },
      { name: "Express.js", level: "Intermediate", icon: "Express", highlight: "RESTful API Routing & Middleware" },
      { name: "RESTful APIs", level: "Intermediate", icon: "API", highlight: "JSON Architecture & Endpoint Integration" }
    ]
  },
  {
    category: "Database Systems",
    icon: "Database",
    description: "Data modeling, querying, and persistent storage",
    skills: [
      { name: "MongoDB", level: "Intermediate", icon: "Mongo", highlight: "NoSQL Collections & Mongoose Schemas" },
      { name: "MySQL", level: "Proficient", icon: "SQL", highlight: "Relational Schemas, Joins & Indexing" },
      { name: "DBMS Concepts", level: "Proficient", icon: "DBMS", highlight: "ACID Properties, Normalization & ER Diagrams" }
    ]
  },
  {
    category: "Developer Tools",
    icon: "Wrench",
    description: "Essential workflow, version control and environment tools",
    skills: [
      { name: "Git", level: "Proficient", icon: "Git", highlight: "Version Control, Branching & Merging" },
      { name: "GitHub", level: "Proficient", icon: "GitHub", highlight: "Repository Management & Collaboration" },
      { name: "VS Code", level: "Proficient", icon: "VSCode", highlight: "Extensions, Debugging & Custom Setup" },
      { name: "Windows OS", level: "Proficient", icon: "Win", highlight: "PowerShell, System Admin & Environments" }
    ]
  }
];

export const projectsData = [
  {
    id: "study-planner",
    title: "Smart Study Planner",
    subtitle: "Smart Academic Schedule & Task Management System",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive web application designed to help university students organize study sessions, set assignment deadlines, track daily academic goals, and calculate time distribution for exams.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3"],
    keyFeatures: [
      "Dynamic timetable generator based on subject difficulty & exam proximity",
      "Interactive task queue with priority badges and deadline countdowns",
      "Study time tracker with built-in Pomodoro timer and break alerts",
      "Visual analytics dashboard charting daily study hours vs target goals"
    ],
    github: "https://github.com/medhagayathri19/studyplanner",
    liveDemo: "https://medhagayathri19.github.io/studyplanner/",
    featured: true
  },
  {
    id: "quiz-master",
    title: "Quiz Master",
    subtitle: "Interactive Real-Time Quiz & Knowledge Testing Platform",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=800&q=80",
    description: "An interactive online testing and trivia platform supporting custom quiz creation, timed questionnaires, live scoreboards, category filtering, and instant performance feedback.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "CSS3"],
    keyFeatures: [
      "Dynamic timed quiz sessions with automated scoring and instant feedback",
      "Custom quiz creator with multi-choice question builders and answer keys",
      "Leaderboard rankings and subject-wise accuracy analytics",
      "Categorized topic selection (Computer Science, Aptitude, General Knowledge)"
    ],
    github: "https://github.com/medha-gayathri/quiz-master",
    liveDemo: "https://quiz-master-demo.vercel.app",
    featured: true
  },
  {
    id: "spendwise",
    title: "SpendWise",
    subtitle: "Smart Personal Expense Tracker & Budget Analytics Platform",
    category: "Full-Stack",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive financial management web application designed to help users track daily expenses, monitor income streams, set monthly budgets, and visualize spending habits with interactive charts.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Chart.js", "CSS3"],
    keyFeatures: [
      "Interactive financial dashboard charting monthly income vs expense analytics",
      "Custom expense categorization (Food, Bills, Shopping, Travel) with budget alerts",
      "Transaction history filter with date range and payment method breakdown",
      "Secure user account authentication and recurring expense auto-logging"
    ],
    github: "https://github.com/medhagayathri19/SpendWise",
    liveDemo: "https://medhagayathri19.github.io/SpendWise/",
    featured: true
  },
  {
    id: "smart-parking",
    title: "Smart Parking Finder",
    subtitle: "IoT & Real-Time Parking Slot Finder",
    category: "Smart Systems",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80",
    description: "An intelligent parking management system that monitors parking lot occupancy in real time, alerting drivers to available spaces through a web dashboard.",
    technologies: ["Python", "Flask", "MySQL", "React.js", "Chart.js", "CSS3"],
    keyFeatures: [
      "Real-time video feed analysis for slot occupancy detection",
      "Live interactive map dashboard rendering green/red slot statuses",
      "Automated entry/exit logging with timestamp and duration metrics",
      "Historical parking usage reports and peak-hour predictive graphs"
    ],
    github: "https://github.com/medhagayathri19/smart-parking-finder",
    liveDemo: "https://medhagayathri19.github.io/smart-parking-finder/",
    featured: true
  }
];

export const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) - Computer Science & Engineering",
    institution: "Vignan's Foundation for Science, Technology & Research (Vignan University)",
    location: "Vadlamudi, Andhra Pradesh",
    period: "2024 - 2028 (Expected)",
    score: "CGPA: 8.93 / 10 (Current)",
    status: "3rd Year Student",
    highlights: [
      "Maintaining an outstanding CGPA of 8.93 in core Computer Science curriculum",
      "Key Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Web Development, Python Programming, Operating Systems",
      "Active participant in departmental coding events and technical seminars"
    ]
  },
  {
    degree: "Intermediate (Class XII - MPC)",
    institution: "Vignan Girls Junior College",
    location: "Andhra Pradesh",
    period: "2022 - 2024",
    score: "Percentage: 98.2%",
    status: "Completed with Distinction",
    highlights: [
      "Achieved an exceptional 98.2% in Mathematics, Physics, and Chemistry",
      "Demonstrated strong analytical aptitude and mathematical problem-solving skills"
    ]
  },
  {
    degree: "Secondary School Certificate (SSC - Class X)",
    institution: "Sri Navodaya Vidya Nikethan High School",
    location: "Andhra Pradesh",
    period: "2022",
    score: "Percentage: 95.0%",
    status: "Completed with Distinction",
    highlights: [
      "Secured 95% in Board Examinations with top performance in Science and Mathematics"
    ]
  }
];

export const experienceAchievementsData = [
  {
    title: "Academic Distinction & Merit Scholar",
    category: "Academic Achievement",
    organization: "Vignan University & Board of Intermediate Education",
    date: "2022 - Present",
    description: "Consistently recognized among top academic scorers with 98.2% in Intermediate and maintaining an 8.93 CGPA in B.Tech CSE.",
    tags: ["Academic Excellence", "Merit", "Top Scorer"]
  },
  {
    title: "Classroom Event Organizer & Student Coordinator",
    category: "Extracurricular",
    organization: "Vignan University Student Activities",
    date: "2024",
    description: "Actively coordinated technical quizzes, peer study circles, and cultural activities in college, honing leadership, time management, and team communication skills.",
    tags: ["Leadership", "Communication", "Event Management"]
  }
];
