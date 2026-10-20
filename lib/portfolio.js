export const profile = {
  name: "Abhishek Sairam Gaduputi",
  email: "ag2936@njit.edu",
  phone: "+1 (908) 356-9089",
  github: "https://github.com/sairam782",
  linkedin: "https://linkedin.com/in/abhishek-sairam-gaduputi",
  resume: "/assets/resume/Abhi_Gaduputi_Resume.pdf",
};

export const experience = [
  {
    role: "Teaching Assistant",
    company: "New Jersey Institute of Technology",
    team: "Ying Wu College of Computing",
    location: "Newark, NJ",
    dates: "Sep 2026 — Present",
    current: true,
    tags: ["CS 106", "YWCC 207", "Teaching & mentorship"],
    points: [
      "Support CS 106 (Introduction to Computing) and YWCC 207 (Computing and Effective Communication), leading office hours and labs to help students debug code and build programming fundamentals.",
      "Evaluate programming assignments, technical reports, and presentations with structured feedback. Work with faculty to identify common misconceptions and improve course materials.",
    ],
  },
  {
    role: "Senior Executive, R&D",
    company: "Montra Electric Tractor",
    team: "TI Clean Mobility · Murugappa Group",
    location: "Chennai, India",
    dates: "Nov 2024 — Jul 2025",
    tags: ["YOLOv11", "MiDaS", "Autonomous systems", "BMS"],
    points: [
      "Fine-tuned and optimized YOLOv11 object detection and MiDaS monocular depth estimation for autonomous fertilizer spraying, reducing reliance on heavy sensor hardware and lowering system cost by 15–21%.",
      "Designed and tested the Battery Management System, cutting 0–80% charging time by 23 minutes. Integrated a 3 kW onboard charger for EV charging in low-grid regions without a transformer.",
    ],
  },
  {
    role: "Machine Learning Engineer",
    company: "Froker",
    team: "Arroz Technologies",
    location: "Bangalore, India",
    dates: "May 2022 — Oct 2024",
    tags: ["Recommender systems", "MongoDB", "Azure AI Foundry", "Analytics"],
    points: [
      "Built and deployed an end-to-end recommendation engine for food, short videos, and prompts, increasing user engagement by 37% and orders by 11%.",
      "Built and optimized MongoDB data pipelines for recommendations and large-scale analysis, scaling internal analytics tooling into production infrastructure.",
      "Designed and deployed a multimodal content scoring pipeline using Azure AI Foundry APIs, evaluating foundation models and tuning hyperparameters to meet platform evaluation requirements.",
      "Built Retool, Mixpanel, and Google Analytics 4 dashboards for product decisions and company-wide reporting.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    company: "Manipal Institute of Technology",
    team: "Embedded Systems",
    location: "Manipal, India",
    dates: "Sep 2021 — Feb 2022",
    tags: ["Robotics", "PID control", "Embedded systems"],
    points: [
      "Built an autonomous line-following and obstacle-avoiding robot using closed-loop PID control, an IR sensor array, and ultrasonic sensing for real-time obstacle detection and dynamic path rerouting.",
    ],
  },
];

export const projects = [
  {
    id: "trinetra", number: "01", title: "Trinetra", category: "Agentic AI",
    subtitle: "From incident to informed action.",
    description: "A multi-agent incident response system that brings alerts, logs, metrics, and traces into one decision-making workflow.",
    detail: "Tiered commander, telemetry, triage/adjudication, and documentation agents reason over a live web application’s incident context and select an approved remediation runbook. A gated, dry-run-first executor and structured audit trail keep actions reviewable.",
    tags: ["LLM agents", "MCP", "Incident response"],
    href: "https://github.com/sairam782/Trinetra",
    takeaway: "Observe → reason → safely remediate",
  },
  {
    id: "gymcom", number: "02", title: "GymCom", category: "Applied AI",
    subtitle: "Better movement. Smarter feedback.",
    description: "An AI workout coach combining browser-side pose tracking with real-time form analysis and Claude-powered coaching reports.",
    detail: "Exercise-specific joint angle thresholds drive rep counting, form scoring, and posture/symmetry feedback. Real-time and uploaded-video modes share a FastAPI backend, with browser-side frame sampling to keep payloads lightweight on Vercel and Render.",
    tags: ["Computer vision", "FastAPI", "Claude API"],
    href: "https://github.com/sairam782/GymCom",
    takeaway: "Pose tracking → form analysis → coaching",
  },
  {
    id: "mri", number: "03", title: "Synthetic MRI generation", category: "Computer vision",
    subtitle: "More data for the rare cases.",
    description: "A 2D denoising diffusion model generating synthetic FLAIR MRI slices to address rare-tumor data scarcity.",
    detail: "Built with MONAI using BraTS-PED data. Synthetic training slices improved ResNet18 tumor detection accuracy from 82% to 88% in the project evaluation.",
    tags: ["Diffusion models", "MONAI", "ResNet18"],
    takeaway: "82% → 88% tumor detection accuracy",
  },
  {
    id: "deepfake", number: "04", title: "Deepfake detection", category: "Computer vision",
    subtitle: "Local details. A global perspective.",
    description: "A hybrid ResNet and Vision Transformer approach combining local forgery artifacts with global facial semantics.",
    detail: "Combined complementary ResNet and ViT features for deepfake classification, reaching up to 86% accuracy on Celeb-DF v2.",
    tags: ["ResNet", "Vision Transformers", "Celeb-DF v2"],
    takeaway: "Up to 86% accuracy on Celeb-DF v2",
  },
];

export const education = [
  { school: "New Jersey Institute of Technology", degree: "MS, Artificial Intelligence", dates: "Sep 2025 — Expected May 2027", grade: "4.0 / 4.0 GPA", note: "Newark, New Jersey" },
  { school: "Manipal Institute of Technology", degree: "BTech, Electronics & Instrumentation", dates: "Sep 2020 — Jun 2024", grade: "8.08 / 10 CGPA", note: "Minor in Data Science · Manipal, India" },
];

export const skills = [
  { title: "Languages", items: ["Python", "C", "C++", "SQL", "Cypher"] },
  { title: "Machine learning & AI", items: ["PyTorch", "TensorFlow", "Scikit-learn", "MONAI", "YOLOv11", "MiDaS", "Vision Transformers", "Diffusion models", "Recommender systems", "Computer vision", "LLM agents", "MCP", "Claude API"] },
  { title: "Data & databases", items: ["Pandas", "NumPy", "Matplotlib", "PySpark", "MapReduce", "MongoDB", "Neo4j"] },
  { title: "Cloud & tools", items: ["Azure AI Foundry", "AWS EC2", "FastAPI", "Vercel", "Render", "Git", "GitHub", "CI/CD", "Tableau", "Retool", "Mixpanel", "Google Analytics 4"] },
];
