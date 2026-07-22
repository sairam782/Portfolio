"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BrainCircuit, Gauge, Layers3, ShieldCheck } from "lucide-react";

const projects = [
  {
    title: "Quantral Networks AI",
    year: "2025 - Present",
    category: "AI Safety / SaaS",
    icon: ShieldCheck,
    problem:
      "Digital media is becoming easier to manipulate, making trust, verification, and authenticity harder for people and organizations.",
    approach:
      "Building toward deepfake detection and a broader AI SaaS platform that can expand into autonomous systems, healthcare IT, agritech, and enterprise intelligence.",
    outcome:
      "Positioned as a trustworthy AI product direction with a focus on explainability, reliability, and practical adoption.",
    stack: ["Python", "Computer Vision", "Deep Learning", "AI SaaS", "Model Evaluation"],
  },
  {
    title: "Recommendation Engine",
    year: "2024",
    category: "Machine Learning",
    icon: BrainCircuit,
    problem:
      "Users need relevant content and products quickly, while teams need systems that can learn from behavior and improve discovery.",
    approach:
      "Designed recommendation logic using user activity, product signals, and analytics feedback loops for real-time personalization.",
    outcome:
      "Created a foundation for better engagement, stronger discovery, and smarter product experiences.",
    stack: ["Python", "MongoDB", "Ranking", "Analytics", "Personalization"],
  },
  {
    title: "Analytics Command Center",
    year: "2024",
    category: "Data Product",
    icon: Gauge,
    problem:
      "Product teams need clear, fast visibility into behavior, funnels, performance indicators, and operational decisions.",
    approach:
      "Built dashboards and reporting workflows with Retool, Mixpanel, Google Analytics 4, and database-backed metrics.",
    outcome:
      "Converted scattered data into usable decision views for product and business teams.",
    stack: ["Retool", "Mixpanel", "GA4", "MongoDB", "Dashboards"],
  },
  {
    title: "Eyesight Power Prediction",
    year: "Academic Project",
    category: "Deep Learning",
    icon: Layers3,
    problem:
      "Medical screening can benefit from fast prediction systems that support early analysis and decision-making.",
    approach:
      "Explored deep learning methods for predicting eyesight power from available inputs and image-related signals.",
    outcome:
      "Strengthened practical understanding of model training, evaluation, and healthcare-oriented AI workflows.",
    stack: ["Deep Learning", "Python", "Healthcare AI", "Evaluation"],
  },
];

const Works = () => {
  return (
    <main className="min-h-[80vh] py-14 xl:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          className="mb-12 max-w-4xl"
        >
          <p className="eyebrow">AI lab and projects</p>
          <h1 className="h2 mt-4 text-white">Work that shows how I think, build, evaluate, and ship intelligent systems.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/62">
            Each project is framed around the real requirement of a strong AI portfolio:
            problem, approach, technology, and outcome.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.08, duration: 0.45 } }}
                className="light-card group rounded-3xl p-6 xl:p-8"
              >
                <div className="flex items-start justify-between gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/12 p-3 text-accent">
                    <Icon size={26} />
                  </div>
                  <div className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-white/45">
                    {project.year}
                  </div>
                </div>

                <p className="mt-7 font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.category}</p>
                <h2 className="mt-3 text-3xl font-bold text-white">{project.title}</h2>

                <div className="mt-6 space-y-5">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white/45">Problem</h3>
                    <p className="mt-2 leading-7 text-white/66">{project.problem}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white/45">Approach</h3>
                    <p className="mt-2 leading-7 text-white/66">{project.approach}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-white/45">Outcome</h3>
                    <p className="mt-2 leading-7 text-white/66">{project.outcome}</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-xs text-white/65">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-accent">
                  Structured as a portfolio case study
                  <ArrowUpRight size={17} className="transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Works;
