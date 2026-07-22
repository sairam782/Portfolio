"use client";

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

const Resume = () => {
  return (
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
                  ))}
                </div>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.main>
  );
};

export default Resume;
