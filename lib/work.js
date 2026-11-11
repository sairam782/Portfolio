// Case studies. Every number and claim here comes from the resume or the
// public project sources listed in docs/hackathon-sources.md.
// "flow" is the system as a sequence of stages, shown as a diagram.

export const caseStudies = [
  {
    slug: "froker-recommendation-engine",
    kind: "professional",
    title: "Recommendation engine for a food and short-video app",
    shortTitle: "Froker recommendation engine",
    organization: "Froker (Arroz Technologies)",
    role: "Machine Learning Engineer",
    period: "May 2022 to Oct 2024",
    location: "Bangalore, India",
    area: "Recommender systems",
    summary:
      "An end-to-end recommendation engine for food, short videos, and prompts that raised user engagement by 37% and orders by 11%.",
    metrics: [
      { value: "+37%", label: "user engagement" },
      { value: "+11%", label: "orders" },
    ],
    context: [
      "Froker serves food, short videos, and prompts in one app. I built and deployed the recommendation engine that decides what each person sees across all three.",
    ],
    built: [
      "An end-to-end recommendation engine covering food, short videos, and prompts.",
      "MongoDB data pipelines that feed the engine and support large-scale analysis. Internal analytics tooling grew into production infrastructure.",
      "A multimodal content scoring pipeline on Azure AI Foundry APIs. I evaluated multiple foundation models and tuned hyperparameters to meet the platform's evaluation requirements.",
      "Retool, Mixpanel, and Google Analytics 4 dashboards used for product decisions and company-wide reporting.",
    ],
    outcome: [
      "User engagement rose by 37% and orders by 11% after the engine went live.",
    ],
    flow: ["App data", "MongoDB pipelines", "Recommendation engine", "Food, video, and prompt feeds", "Dashboards"],
    stack: ["Recommender systems", "MongoDB", "Azure AI Foundry", "Retool", "Mixpanel", "Google Analytics 4"],
    links: [],
  },
  {
    slug: "montra-autonomous-spraying",
    kind: "professional",
    title: "Vision for autonomous fertilizer spraying on an electric tractor",
    shortTitle: "Montra autonomous spraying",
    organization: "Montra Electric Tractor (TI Clean Mobility, Murugappa Group)",
    role: "Senior Executive, R&D",
    period: "Nov 2024 to Jul 2025",
    location: "Chennai, India",
    area: "Computer vision",
    summary:
      "Camera-based detection and depth models that let an electric tractor spray on its own with less sensor hardware, lowering system cost by 15 to 21%.",
    metrics: [
      { value: "15 to 21%", label: "lower system cost" },
      { value: "23 min", label: "faster 0 to 80% charge" },
    ],
    context: [
      "The autonomous fertilizer spraying system leaned on heavy sensor hardware, and that hardware added cost. The goal was to move more of the perception work onto cameras and models.",
    ],
    built: [
      "Fine-tuned and optimized YOLOv11 for object detection in the spraying system.",
      "Fine-tuned and optimized MiDaS for monocular depth estimation, so depth comes from a single camera.",
      "Designed and tested the Battery Management System for the tractor.",
      "Integrated a 3 kW onboard charger that allows EV charging in low-grid regions without a transformer.",
    ],
    outcome: [
      "The vision models reduced reliance on heavy sensor hardware and lowered system cost by 15 to 21%.",
      "The battery work cut 0 to 80% charging time by 23 minutes.",
    ],
    flow: ["Camera frames", "YOLOv11 detection", "MiDaS depth", "Autonomous spraying system"],
    stack: ["YOLOv11", "MiDaS", "Computer vision", "Battery management systems"],
    links: [],
  },
  {
    slug: "trinetra",
    kind: "project",
    title: "Trinetra: multi-agent incident response",
    shortTitle: "Trinetra",
    organization: "Personal project",
    role: "Design and engineering",
    period: "2026",
    area: "Agent systems",
    summary:
      "A multi-agent LLM system that watches a live web application, reasons over the full incident context, and selects an approved remediation runbook.",
    highlight: "Four agent tiers, a dry-run-first executor, and a full audit trail",
    context: [
      "During an incident, the evidence is spread across alerts, logs, metrics, and traces. Trinetra brings that context into one decision-making workflow, and keeps every action reviewable.",
    ],
    built: [
      "Tiered agents with separate jobs: commander, telemetry, triage and adjudication, and documentation.",
      "A gated remediation executor that runs dry first. Agents choose from approved runbooks instead of improvising fixes.",
      "A structured audit trail that records what was seen, what was decided, and what was run.",
      "Tool access through the Model Context Protocol (MCP).",
    ],
    outcome: [
      "A working demo that investigates an incident on a live web application, picks a runbook, gates the fix, and verifies recovery.",
      "Related incident-response work went to two events: the Global AI Hackathon Series with Qwen Cloud (Trinetra) and OpenAI Build Week (CrisisOps).",
    ],
    flow: ["Alerts, logs, metrics, traces", "Telemetry agent", "Triage and adjudication", "Commander picks a runbook", "Gated executor, dry run first", "Audit trail"],
    stack: ["LLM agents", "MCP", "Node.js", "Docker", "Slack API"],
    links: [
      { label: "Source on GitHub", href: "https://github.com/sairam782/Trinetra" },
      { label: "Live demo", href: "https://trinetra-mauve.vercel.app/" },
    ],
  },
  {
    slug: "gymcom",
    kind: "project",
    title: "GymCom: a live workout form coach",
    shortTitle: "GymCom",
    organization: "Personal project",
    role: "Full-stack and ML engineering",
    area: "Computer vision",
    summary:
      "A full-stack workout analysis app that combines browser-side pose tracking, a FastAPI backend, and Claude-written coaching reports.",
    highlight: "Real-time and uploaded-video modes on one backend",
    context: [
      "Form feedback normally needs a coach watching. GymCom gives rep counts, form scores, and posture feedback from an ordinary camera.",
    ],
    built: [
      "Pose tracking that runs in the browser, in both real-time and uploaded-video modes.",
      "Exercise-specific joint angle thresholds for rep counting, form scoring, and posture and symmetry feedback.",
      "A FastAPI backend shared by both modes, with Claude producing the written coaching report.",
      "Browser-side frame sampling to keep payloads light on Vercel and Render.",
    ],
    outcome: [
      "A deployed app that turns a workout into rep counts, a form score, and a readable coaching report.",
    ],
    flow: ["Camera or video", "Browser pose tracking", "Frame sampling", "FastAPI: reps, form, symmetry", "Claude coaching report"],
    stack: ["Pose tracking", "FastAPI", "Claude API", "Vercel", "Render"],
    links: [{ label: "Source on GitHub", href: "https://github.com/sairam782/GymCom" }],
  },
  {
    slug: "synthetic-mri-generation",
    kind: "project",
    title: "Synthetic MRI generation for brain tumor classification",
    shortTitle: "Synthetic MRI generation",
    organization: "Academic research project",
    role: "Research and modeling",
    area: "Generative models",
    summary:
      "A 2D denoising diffusion model that generates synthetic FLAIR MRI slices to make up for scarce rare-tumor data.",
    metrics: [{ value: "82% to 88%", label: "ResNet18 tumor detection accuracy" }],
    context: [
      "Rare tumors have little training data, and classifiers suffer for it. This project tests whether generated scans can fill the gap.",
    ],
    built: [
      "A 2D denoising diffusion model built with MONAI.",
      "Training on FLAIR MRI slices from the BraTS-PED dataset.",
      "A ResNet18 tumor detector trained with and without the synthetic slices, to measure the difference.",
    ],
    outcome: [
      "Adding synthetic slices to training improved ResNet18 tumor detection accuracy from 82% to 88% in the project evaluation.",
    ],
    flow: ["BraTS-PED FLAIR slices", "Diffusion model (MONAI)", "Synthetic slices", "ResNet18 training", "Accuracy check"],
    stack: ["Diffusion models", "MONAI", "PyTorch", "ResNet18"],
    links: [],
    note: "Academic research project. Results are from the project evaluation.",
  },
  {
    slug: "deepfake-detection",
    kind: "project",
    title: "Hybrid ResNet and Vision Transformer for deepfake detection",
    shortTitle: "Deepfake detection",
    organization: "Academic research project",
    role: "Research and modeling",
    area: "Computer vision",
    summary:
      "A hybrid model that pairs ResNet features for local forgery artifacts with Vision Transformer features for global facial semantics.",
    metrics: [{ value: "86%", label: "accuracy on Celeb-DF v2 (up to)" }],
    context: [
      "Deepfakes leave two kinds of evidence: small local artifacts and a face that does not quite hold together as a whole. One architecture rarely catches both.",
    ],
    built: [
      "A ResNet branch that picks up local forgery artifacts.",
      "A Vision Transformer branch that reads global facial semantics.",
      "A combined classifier that uses both sets of features.",
    ],
    outcome: ["The hybrid model reached up to 86% accuracy on Celeb-DF v2."],
    flow: ["Face frames", "ResNet: local artifacts", "ViT: global semantics", "Combined features", "Real or fake"],
    stack: ["ResNet", "Vision Transformers", "Celeb-DF v2"],
    links: [],
    note: "Academic research project. Results are from the project evaluation.",
  },
];

export const getCaseStudy = (slug) => caseStudies.find((item) => item.slug === slug);

// Measured results, shown as a table on the home page.
export const results = [
  { value: "+37%", metric: "User engagement", detail: "Recommendation engine for food, short videos, and prompts", where: "Froker", slug: "froker-recommendation-engine" },
  { value: "+11%", metric: "Orders", detail: "Same engine, measured on orders placed", where: "Froker", slug: "froker-recommendation-engine" },
  { value: "15 to 21%", metric: "Lower system cost", detail: "Camera models replaced heavy sensor hardware on an autonomous sprayer", where: "Montra Electric", slug: "montra-autonomous-spraying" },
  { value: "23 min", metric: "Faster 0 to 80% charge", detail: "Battery Management System design and testing", where: "Montra Electric", slug: "montra-autonomous-spraying" },
  { value: "82% to 88%", metric: "Tumor detection accuracy", detail: "Classifier trained with synthetic MRI slices from a diffusion model", where: "Research", slug: "synthetic-mri-generation" },
  { value: "86%", metric: "Deepfake detection accuracy", detail: "Hybrid ResNet and Vision Transformer on Celeb-DF v2", where: "Research", slug: "deepfake-detection" },
];

// What the work falls into, each backed by linked evidence.
export const capabilities = [
  {
    title: "Agent systems",
    body: "LLM agents with clear roles, tool access through MCP, gated execution, and an audit trail. Evaluated before they are allowed to act.",
    evidence: [
      { label: "Trinetra", href: "/work/trinetra" },
      { label: "Pregame", href: "/hackathons#pregame" },
      { label: "CrisisOps", href: "/hackathons#crisisops" },
    ],
  },
  {
    title: "Computer vision",
    body: "Detection, monocular depth, pose tracking, and generative models for visual data. From tractors in a field to scans in a lab.",
    evidence: [
      { label: "Montra autonomous spraying", href: "/work/montra-autonomous-spraying" },
      { label: "GymCom", href: "/work/gymcom" },
      { label: "Synthetic MRI", href: "/work/synthetic-mri-generation" },
      { label: "Deepfake detection", href: "/work/deepfake-detection" },
    ],
  },
  {
    title: "Recommenders and data",
    body: "Ranking systems, the MongoDB pipelines that feed them, and the dashboards that show whether they work.",
    evidence: [{ label: "Froker recommendation engine", href: "/work/froker-recommendation-engine" }],
  },
];
