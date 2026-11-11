// Career, education, and skills. Wording follows the resume.

export const experience = [
  {
    id: "njit",
    role: "Teaching Assistant",
    company: "New Jersey Institute of Technology",
    team: "Ying Wu College of Computing",
    location: "Newark, NJ",
    start: "Sep 2026",
    end: "present",
    current: true,
    tags: ["CS 106", "YWCC 207", "CS 646"],
    points: [
      "Support CS 106 (Introduction to Computing) and YWCC 207 (Computing and Effective Communication), leading office hours and lab sessions to help students debug code and build programming fundamentals.",
      "Evaluate programming assignments, technical reports, and presentations with structured feedback, and work with faculty to identify common student misconceptions and improve course materials.",
    ],
  },
  {
    id: "montra",
    role: "Senior Executive, R&D",
    company: "Montra Electric Tractor",
    team: "TI Clean Mobility, Murugappa Group",
    location: "Chennai, India",
    start: "Nov 2024",
    end: "Jul 2025",
    caseStudy: "montra-autonomous-spraying",
    tags: ["YOLOv11", "MiDaS", "Autonomous systems", "Battery management"],
    points: [
      "Fine-tuned and optimized YOLOv11 (object detection) and MiDaS (monocular depth estimation) models for an autonomous fertilizer spraying system, reducing reliance on heavy sensor hardware and lowering system cost by 15 to 21%.",
      "Designed and tested the Battery Management System, cutting 0 to 80% charging time by 23 minutes, and integrated a 3 kW onboard charger enabling EV charging in low-grid regions without a transformer.",
    ],
  },
  {
    id: "froker",
    role: "Machine Learning Engineer",
    company: "Froker",
    team: "Arroz Technologies",
    location: "Bangalore, India",
    start: "May 2022",
    end: "Oct 2024",
    caseStudy: "froker-recommendation-engine",
    tags: ["Recommender systems", "MongoDB", "Azure AI Foundry", "Analytics"],
    points: [
      "Built and deployed an end-to-end recommendation engine for food, short videos, and prompts, increasing user engagement by 37% and orders by 11%.",
      "Built and optimized MongoDB data pipelines powering the recommendation engine and large-scale analysis, scaling internal analytics tooling into production infrastructure.",
      "Designed and deployed a multimodal content scoring pipeline using Azure AI Foundry APIs, evaluating multiple foundation models and tuning hyperparameters to meet platform evaluation requirements.",
      "Built Retool, Mixpanel, and Google Analytics 4 dashboards to drive data-driven product decisions and company-wide reporting.",
    ],
  },
  {
    id: "manipal",
    role: "Undergraduate Research Assistant, Embedded Systems",
    company: "Manipal Institute of Technology",
    team: "Embedded Systems",
    location: "Manipal, India",
    start: "Sep 2021",
    end: "Feb 2022",
    tags: ["Robotics", "PID control", "Embedded systems"],
    points: [
      "Built an autonomous line-following and obstacle-avoiding robot using closed-loop PID control over an IR sensor array and ultrasonic sensing for real-time obstacle detection and dynamic path rerouting.",
    ],
  },
];

export const education = [
  {
    school: "New Jersey Institute of Technology",
    degree: "Master of Science, Artificial Intelligence",
    start: "Sep 2025",
    end: "May 2027 (expected)",
    grade: "GPA 4.0 / 4.0",
    location: "Newark, NJ",
  },
  {
    school: "Manipal Institute of Technology",
    degree: "Bachelor of Technology, Electronics and Instrumentation",
    detail: "Minor in Data Science",
    start: "Sep 2020",
    end: "Jun 2024",
    grade: "CGPA 8.08 / 10",
    location: "Manipal, India",
  },
];

export const skills = [
  { title: "Languages", items: ["Python", "C", "C++", "SQL", "Cypher"] },
  {
    title: "Machine learning and AI",
    items: ["PyTorch", "TensorFlow", "Scikit-learn", "MONAI", "YOLOv11", "MiDaS", "Vision Transformers", "Diffusion models", "Recommender systems", "Computer vision", "LLM agents", "Model Context Protocol (MCP)", "Claude API"],
  },
  { title: "Data and databases", items: ["Pandas", "NumPy", "Matplotlib", "PySpark", "MapReduce", "MongoDB", "Neo4j"] },
  {
    title: "Cloud and tools",
    items: ["Azure AI Foundry", "AWS EC2", "FastAPI", "Vercel", "Render", "Git", "GitHub", "CI/CD", "Tableau", "Retool", "Mixpanel", "Google Analytics 4"],
  },
];
