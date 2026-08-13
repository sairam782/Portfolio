"use client";

<<<<<<< Updated upstream
import { motion } from "framer-motion";
import { BrainCircuit, BriefcaseBusiness, GraduationCap, Sparkles, UserRound } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const experience = [
  {
    company: "Montra Electric Tractor R&D, TI Clean Mobility",
    role: "Senior Executive, Research and Development",
    duration: "Nov 2024 - Jul 2025",
    details:
      "Worked in an electric mobility R&D environment with exposure to autonomous vehicle technology, sustainable mobility, and engineering-driven product development.",
  },
  {
    company: "Froker",
    role: "Machine Learning Engineer",
    duration: "May 2024 - Sep 2024",
    details:
      "Built recommendation logic, product analytics workflows, MongoDB-backed data flows, Retool dashboards, and reporting with Mixpanel and GA4.",
  },
  {
    company: "Froker",
    role: "Machine Learning Intern",
    duration: "Dec 2023 - Apr 2024",
    details:
      "Supported machine learning experiments, analytics work, and early product intelligence systems in a fast-moving startup environment.",
  },
];

const education = [
  {
    institution: "New Jersey Institute of Technology",
    degree: "MS in Artificial Intelligence",
    duration: "2025 - Present",
  },
  {
    institution: "Manipal Institute of Technology",
    degree: "BTech in Electronics with Minor in Data Science",
    duration: "2020 - 2024",
  },
];

const skillGroups = [
  {
    title: "AI / ML",
    skills: ["Python", "Deep Learning", "Computer Vision", "Recommendation Systems", "LLMs", "Model Evaluation"],
  },
  {
    title: "Data",
    skills: ["SQL", "MongoDB", "NoSQL", "Tableau", "Retool", "Mixpanel", "Google Analytics 4"],
  },
  {
    title: "Engineering",
    skills: ["Git", "GitHub", "APIs", "C", "C++", "Next.js", "Dashboards"],
  },
];

const aboutFacts = [
  ["Name", "Abhishek Sairam Gaduputi"],
  ["Email", "abhi.gaduputi@gmail.com"],
  ["Focus", "Applied AI, ML systems, analytics, GenAI"],
  ["Languages", "English, Telugu, Hindi"],
];

const tabMeta = [
  { value: "experience", label: "Experience", icon: BriefcaseBusiness },
  { value: "skills", label: "Skills", icon: BrainCircuit },
  { value: "education", label: "Education", icon: GraduationCap },
  { value: "about", label: "About", icon: UserRound },
];
=======
import { useState } from "react";
import { FaPython, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiC, SiMysql, SiMongodb, SiTableau } from "react-icons/si";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  BrainCircuit,
  Flame,
  Table2,
  Sigma,
  Network,
  Cloud,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Sparkles,
  User,
  ChevronDown,
} from "lucide-react";

const about = {
  title: "About",
  description:
    "I am a graduate researcher with hands-on experience across generative modeling, computer vision, and multi-agent systems, combined with production ML engineering experience shipping recommendation, perception, and analytics systems used at scale. I move comfortably between research experimentation and end-to-end deployment.",
  info: [
    { fieldName: "Name", fieldValue: "Abhishek Sairam Gaduputi" },
    { fieldName: "Email", fieldValue: "ag2936@njit.edu" },
    { fieldName: "Phone", fieldValue: "+1 (908) 356-9089" },
    { fieldName: "Location", fieldValue: "New Jersey, United States" },
    { fieldName: "GitHub", fieldValue: "github.com/sairam782" },
    { fieldName: "LinkedIn", fieldValue: "linkedin.com/in/abhishek-sairam-gaduputi" },
    { fieldName: "Languages", fieldValue: "English, Telugu, Hindi" },
    { fieldName: "Hobbies", fieldValue: "Badminton, Guitar, Singing, Artworks" },
  ],
};

const experience = {
  title: "Experience",
  description:
    "From battery-management systems for electric tractors to production-scale recommendation engines. I've shipped ML across hardware, mobile, and web.",
  items: [
    {
      company: "Montra Electric Tractor · TI Clean Mobility · Murugappa Group",
      position: "Senior Executive, R&D",
      duration: "Nov 2024 – Jul 2025",
      location: "Chennai, India",
      bullets: [
        "Fine-tuned YOLOv11 and MiDaS for autonomous fertilizer spraying. Cut system cost 15 to 21% by reducing sensor reliance.",
        "Designed and tested a BMS that shortened 0 to 80% charging by 23 minutes vs benchmark.",
        "Integrated a 3 kW onboard charger compatible with residential supply, enabling EV charging in low-grid regions.",
      ],
    },
    {
      company: "Froker · Arroz Technologies",
      position: "Machine Learning Engineer",
      duration: "May 2022 – Oct 2024",
      location: "Bangalore, India",
      bullets: [
        "Built and deployed a recommendation engine for food, short-video and prompts. Lifted engagement 37% and orders 11%.",
        "Scaled MongoDB pipelines from internal analytics into full production infrastructure.",
        "Shipped multimodal content-scoring pipeline on Azure AI Foundry APIs.",
        "Designed analytics dashboards with Retool, Mixpanel, and GA4 for company-wide reporting.",
      ],
    },
    {
      company: "Manipal Institute of Technology",
      position: "Undergraduate Research Assistant · Embedded Systems",
      duration: "Sep 2021 – Feb 2022",
      location: "Manipal, India",
      bullets: [
        "Built autonomous line-following + obstacle-avoiding robot with closed-loop PID on an IR sensor array.",
        "Integrated ultrasonic obstacle detection and tuned motor logic for stable turns on curved tracks.",
      ],
    },
  ],
};

const projects = {
  title: "Projects",
  description:
    "Multi-agent systems, generative models, and deep-learning pipelines built for real-world impact.",
  items: [
    {
      titleofproject: "Trinetra · Autonomous Incident Response",
      link: "https://trinetra-mauve.vercel.app/",
      description:
        "Multi-agent system monitoring live web apps across alerts, logs, metrics and traces. Tiered commander / telemetry / triage / documentation agents with gated dry-run remediation and MCP-based tool integration.",
      tags: ["Multi-Agent", "MCP", "SRE"],
    },
    {
      titleofproject: "GymCom · AI Workout Form Coach",
      link: "https://gymcom.vercel.app/live.html",
      description:
        "Full-stack pose-tracking app with FastAPI backend and Claude-powered coaching reports. Real-time rep counting, form scoring, and symmetry feedback.",
      tags: ["Computer Vision", "FastAPI", "Claude"],
    },
    {
      titleofproject: "ResNet-ViT Deepfake Detection",
      description:
        "Hybrid Residual Network and Vision Transformer capturing local forgery artifacts and global semantics. 86% accuracy on Celeb-DFv2.",
      tags: ["ViT", "Deepfakes", "Research"],
    },
    {
      titleofproject: "Synthetic MRI Diffusion",
      description:
        "2D denoising diffusion (MONAI) generating axial FLAIR MRI slices from BraTS-PED. Lifted downstream tumor detection from 82% to 88%.",
      tags: ["Diffusion", "Healthcare", "MONAI"],
    },
    {
      titleofproject: "Smart IoT Precision Farm",
      description:
        "Real-time IoT farm monitoring with soil, temperature and humidity sensors plus MongoDB Atlas. 14% simulated yield increase.",
      tags: ["IoT", "MongoDB"],
    },
  ],
};

const education = {
  title: "Education",
  description:
    "Currently pursuing my MS in Artificial Intelligence at NJIT, building on an EI + Data Science background from Manipal.",
  items: [
    {
      institution: "New Jersey Institute of Technology",
      degree: "M.S. Artificial Intelligence",
      detail: "GPA 4.0 / 4.0",
      duration: "Sep 2025 – May 2027 (expected)",
    },
    {
      institution: "Manipal Institute of Technology (MAHE)",
      degree: "B.Tech Electronics & Instrumentation · Minor: Data Science",
      detail: "CGPA 8.08 / 10",
      duration: "Sep 2020 – Jun 2024",
    },
  ],
};

const skills = {
  title: "Skills",
  description:
    "The stack I reach for across research and production. Languages, frameworks, cloud, and analytics tooling.",
  groups: [
    {
      name: "Languages",
      items: [
        { icon: <FaPython />, name: "Python" },
        { icon: <SiCplusplus />, name: "C++" },
        { icon: <SiC />, name: "C" },
        { icon: <SiMysql />, name: "SQL" },
        { icon: <FaDatabase />, name: "NoSQL" },
        { icon: <Network size={22} />, name: "Cypher" },
      ],
    },
    {
      name: "ML / AI",
      items: [
        { icon: <BrainCircuit size={22} />, name: "TensorFlow" },
        { icon: <Flame size={22} />, name: "PyTorch" },
        { icon: <Sigma size={22} />, name: "Scikit-learn" },
        { icon: <Table2 size={22} />, name: "Pandas" },
        { icon: <Sigma size={22} />, name: "NumPy" },
      ],
    },
    {
      name: "Cloud & Tools",
      items: [
        { icon: <Cloud size={22} />, name: "Azure AI Foundry" },
        { icon: <Cloud size={22} />, name: "AWS EC2" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaGitAlt />, name: "Git" },
        { icon: <FaGithub />, name: "GitHub" },
        { icon: <SiTableau />, name: "Tableau" },
      ],
    },
  ],
};

const DescriptionToggle = ({ text }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col gap-3">
      <p className="text-white/60 max-w-2xl">{text}</p>
      <button
        onClick={() => setOpen(!open)}
        className="text-xs uppercase tracking-[0.2em] text-accent hover:text-accent-hover inline-flex items-center gap-1 w-fit"
      >
        {open ? "Show less" : "Read more"}
        <ChevronDown
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="text-white/50 text-sm overflow-hidden"
          >
            Every card below is a distilled snapshot. Hover for details or click through to live builds.
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
>>>>>>> Stashed changes

const tabDefs = [
  { value: "experience", label: "Experience", icon: <Briefcase className="h-4 w-4" /> },
  { value: "projects", label: "Projects", icon: <FolderKanban className="h-4 w-4" /> },
  { value: "education", label: "Education", icon: <GraduationCap className="h-4 w-4" /> },
  { value: "skills", label: "Skills", icon: <Sparkles className="h-4 w-4" /> },
  { value: "about", label: "About", icon: <User className="h-4 w-4" /> },
];

const Resume = () => {
  return (
<<<<<<< Updated upstream
    <motion.main
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
      className="min-h-[80vh] py-14 xl:py-20"
    >
      <div className="container mx-auto">
        <div className="mb-12 max-w-4xl">
          <p className="eyebrow">Resume</p>
          <h1 className="h2 mt-4 text-white">A practical AI profile with product, analytics, and R&D experience.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/62">
            I combine machine learning, data workflows, and product thinking to build systems that are useful beyond the notebook.
          </p>
        </div>

        <Tabs defaultValue="experience" className="grid gap-8 xl:grid-cols-[320px_1fr]">
          <TabsList className="light-card grid h-auto gap-3 rounded-3xl p-3">
            {tabMeta.map((tab) => {
              const Icon = tab.icon;

              return (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="flex justify-start gap-3 rounded-2xl px-4 py-4 text-left data-[state=active]:bg-accent data-[state=active]:text-primary"
                >
                  <Icon size={18} />
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="min-h-[540px]">
            <TabsContent value="experience" className="mt-0">
              <div className="grid gap-5">
                {experience.map((item) => (
                  <article key={item.company + item.role} className="light-card rounded-3xl p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="font-mono text-sm text-accent">{item.duration}</p>
                        <h2 className="mt-2 text-2xl font-bold text-white">{item.role}</h2>
                        <p className="mt-1 text-white/55">{item.company}</p>
                      </div>
                    </div>
                    <p className="mt-5 leading-7 text-white/65">{item.details}</p>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-0">
              <div className="grid gap-5 lg:grid-cols-3">
                {skillGroups.map((group) => (
                  <article key={group.title} className="light-card rounded-3xl p-6">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                      <Sparkles size={22} />
                    </div>
                    <h2 className="text-2xl font-bold text-white">{group.title}</h2>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <span key={skill} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-xs text-white/65">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="education" className="mt-0">
              <div className="grid gap-5 md:grid-cols-2">
                {education.map((item) => (
                  <article key={item.institution} className="light-card rounded-3xl p-6">
                    <p className="font-mono text-sm text-accent">{item.duration}</p>
                    <h2 className="mt-3 text-2xl font-bold text-white">{item.institution}</h2>
                    <p className="mt-3 leading-7 text-white/65">{item.degree}</p>
                  </article>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="about" className="mt-0">
              <div className="light-card rounded-3xl p-6 xl:p-8">
                <h2 className="text-3xl font-bold text-white">About me</h2>
                <p className="mt-5 max-w-3xl leading-8 text-white/65">
                  I am an AI enthusiast who likes turning curiosity into systems:
                  recommendation engines, analytics dashboards, computer vision ideas,
                  and GenAI experiments. I care about clean problem framing, practical
                  evaluation, and building tools that people can actually use.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {aboutFacts.map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                      <p className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">{label}</p>
                      <p className="mt-2 font-semibold text-white">{value}</p>
                    </div>
=======
    <motion.section
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] py-12"
    >
      <div className="container mx-auto px-4">
        <div className="mb-10">
          <span className="eyebrow">{"// resume"}</span>
          <h1 className="h2 mt-3 text-white">
            The <span className="text-gradient">résumé</span>, condensed.
          </h1>
        </div>

        <Tabs defaultValue="experience" className="grid grid-cols-1 xl:grid-cols-[280px_1fr] gap-8 xl:gap-12">
          <TabsList className="w-full xl:sticky xl:top-24 xl:self-start">
            {tabDefs.map((t) => (
              <TabsTrigger key={t.value} value={t.value}>
                <span className="flex items-center gap-3">
                  <span className="text-accent">{t.icon}</span>
                  {t.label}
                </span>
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="min-h-[70vh]">
            {/* EXPERIENCE */}
            <TabsContent value="experience">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="h3 text-white">{experience.title}</h3>
                  <p className="mt-3 text-white/60 max-w-2xl">
                    {experience.description}
                  </p>
                </div>
                <div className="relative pl-6">
                  <div className="absolute left-1 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-accent/20 to-transparent" />
                  <ul className="flex flex-col gap-5">
                    {experience.items.map((item, i) => (
                      <li key={i} className="relative card p-6">
                        <span className="absolute -left-[26px] top-8 h-3 w-3 rounded-full bg-accent shadow-glow" />
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h4 className="text-white text-lg font-semibold">
                            {item.position}
                          </h4>
                          <span className="text-xs text-accent">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-white/60 text-sm mt-1">
                          {item.company} <span className="text-white/30">·</span>{" "}
                          {item.location}
                        </p>
                        <ul className="mt-4 space-y-2 text-sm text-white/70">
                          {item.bullets.map((b, j) => (
                            <li key={j} className="flex gap-2">
                              <span className="text-accent shrink-0">›</span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>

            {/* PROJECTS */}
            <TabsContent value="projects">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="h3 text-white">{projects.title}</h3>
                  <p className="mt-3 text-white/60 max-w-2xl">
                    {projects.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {projects.items.map((item, i) => {
                    const Wrap = item.link ? "a" : "div";
                    const props = item.link
                      ? { href: item.link, target: "_blank", rel: "noopener noreferrer" }
                      : {};
                    return (
                      <li key={i}>
                        <Wrap {...props} className="card group block h-full p-6">
                          <div className="flex items-start justify-between gap-4">
                            <h4 className="text-white text-lg font-semibold group-hover:text-accent transition-colors">
                              {item.titleofproject}
                            </h4>
                            {item.link && (
                              <ExternalLink className="h-4 w-4 text-white/40 group-hover:text-accent shrink-0 mt-1" />
                            )}
                          </div>
                          <p className="mt-3 text-sm text-white/60 leading-relaxed">
                            {item.description}
                          </p>
                          {item.tags && (
                            <div className="mt-4 flex flex-wrap gap-2">
                              {item.tags.map((t) => (
                                <span key={t} className="chip">
                                  {t}
                                </span>
                              ))}
                            </div>
                          )}
                        </Wrap>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* EDUCATION */}
            <TabsContent value="education">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="h3 text-white">{education.title}</h3>
                  <p className="mt-3 text-white/60 max-w-2xl">
                    {education.description}
                  </p>
                </div>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {education.items.map((item, i) => (
                    <li key={i} className="card p-6">
                      <span className="text-xs text-accent">
                        {item.duration}
                      </span>
                      <h4 className="mt-2 text-white text-lg font-semibold">
                        {item.institution}
                      </h4>
                      <p className="mt-2 text-white/60 text-sm">
                        {item.degree}
                      </p>
                      <p className="mt-3 chip">{item.detail}</p>
                    </li>
>>>>>>> Stashed changes
                  ))}
                </div>
              </div>
            </TabsContent>
<<<<<<< Updated upstream
          </div>
        </Tabs>
      </div>
    </motion.main>
=======

            {/* SKILLS */}
            <TabsContent value="skills">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="h3 text-white">{skills.title}</h3>
                  <p className="mt-3 text-white/60 max-w-2xl">
                    {skills.description}
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  {skills.groups.map((g) => (
                    <div key={g.name} className="card p-6">
                      <p className="eyebrow mb-4">{`// ${g.name}`}</p>
                      <div className="flex flex-wrap gap-3">
                        {g.items.map((s) => (
                          <span
                            key={s.name}
                            className="group inline-flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.02] px-3 py-2 text-sm text-white/80 hover:border-accent/50 hover:text-white hover:bg-white/[0.05] transition-all"
                          >
                            <span className="text-accent">{s.icon}</span>
                            {s.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* ABOUT */}
            <TabsContent value="about">
              <div className="flex flex-col gap-8">
                <div>
                  <h3 className="h3 text-white">{about.title}</h3>
                  <p className="mt-3 text-white/60 max-w-2xl">
                    {about.description}
                  </p>
                </div>
                <div className="card p-6">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                    {about.info.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-baseline justify-between gap-4 border-b border-white/[0.06] pb-3"
                      >
                        <span className="text-xs uppercase tracking-[0.15em] text-white/40">
                          {item.fieldName}
                        </span>
                        <span className="text-sm text-white text-right">
                          {item.fieldValue}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.section>
>>>>>>> Stashed changes
  );
};

export default Resume;
