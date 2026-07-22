"use client";

import { motion } from "framer-motion";
import { BarChart3, BrainCircuit, Code2, Database } from "lucide-react";

const capabilities = [
  {
    icon: BrainCircuit,
    title: "Machine Learning",
    description:
      "Model prototyping, recommendation logic, evaluation, error analysis, and applied AI workflows.",
  },
  {
    icon: BarChart3,
    title: "Data Products",
    description:
      "Dashboards, analytics workflows, product metrics, Retool tools, and decision-ready reporting.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description:
      "SQL and NoSQL data handling, MongoDB-backed workflows, structured queries, and clean data views.",
  },
  {
    icon: Code2,
    title: "Frontend Systems",
    description:
      "Clean portfolio, dashboard, and web interfaces using React, Next.js, and Tailwind CSS.",
  },
];

const Services = () => {
  return (
    <main className="min-h-[80vh] py-14 xl:py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }}
          className="mb-12 max-w-4xl"
        >
          <p className="eyebrow">Capabilities</p>
          <h1 className="h2 mt-4 text-white">AI, data, and product engineering support.</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/62">
            A focused set of skills for teams that need practical AI systems,
            better data visibility, or clean technical interfaces.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {capabilities.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0, transition: { delay: index * 0.08, duration: 0.45 } }}
                className="light-card rounded-3xl p-6 xl:p-8"
              >
                <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                  <Icon size={26} />
                </div>
                <h2 className="text-3xl font-bold text-white">{service.title}</h2>
                <p className="mt-4 leading-8 text-white/64">{service.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default Services;
