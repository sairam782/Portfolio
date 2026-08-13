"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import {
  FiDownload,
  FiArrowUpRight,
  FiGithub,
} from "react-icons/fi";
import CountUp from "react-countup";

const stats = [
  { num: 4.0, suffix: "/4.0", text: "GPA · NJIT", decimals: 1 },
  { num: 37, suffix: "%", text: "Engagement lift shipped", decimals: 0 },
  { num: 5, suffix: "+", text: "Production ML systems", decimals: 0 },
  { num: 88, suffix: "%", text: "Best model accuracy", decimals: 0 },
];

const skills = [
  "PyTorch",
  "TensorFlow",
  "Python",
  "MongoDB",
  "Neo4j",
  "Azure AI Foundry",
  "AWS EC2",
  "PySpark",
  "MCP",
  "FastAPI",
  "Next.js",
  "Tableau",
  "Retool",
  "Mixpanel",
];

const featured = [
  {
    id: "01",
    name: "Trinetra",
    tagline: "Autonomous Incident Response Agent System",
    blurb:
      "Multi-agent system that monitors live apps, reasons across alerts, logs and traces, and executes gated dry-run remediation.",
    tags: ["Multi-Agent", "MCP", "SRE"],
    href: "https://trinetra-mauve.vercel.app/",
    accent: "from-violet-500/30 to-fuchsia-500/10",
  },
  {
    id: "02",
    name: "GymCom",
    tagline: "AI Powered Live Workout Form Coach",
    blurb:
      "Browser-side pose tracking with a FastAPI backend and Claude-powered coaching reports. Real-time rep counting and form scoring.",
    tags: ["Computer Vision", "FastAPI", "Claude"],
    href: "https://gymcom.vercel.app/live.html",
    accent: "from-cyan-400/30 to-sky-500/10",
  },
  {
    id: "03",
    name: "Deepfake ResNet-ViT",
    tagline: "Hybrid Residual and Vision Transformer",
    blurb:
      "Hybrid architecture capturing local forgery artifacts and global semantics. 86% accuracy on Celeb-DFv2.",
    tags: ["Deepfakes", "ViT", "Research"],
    href: "",
    accent: "from-pink-500/30 to-rose-500/10",
  },
  {
    id: "04",
    name: "Synthetic MRI Diffusion",
    tagline: "Denoising diffusion for brain tumor classification",
    blurb:
      "2D diffusion model on BraTS-PED to address rare tumor scarcity. Lifted downstream accuracy from 82% to 88%.",
    tags: ["Diffusion", "MONAI", "Healthcare"],
    href: "",
    accent: "from-emerald-400/25 to-teal-500/10",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.1 + i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

const SectionLabel = ({ id, children }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
      [{id}]
    </span>
    <div className="flex-1 h-px bg-gradient-to-r from-white/[0.12] to-transparent" />
    <span className="font-mono text-[10px] tracking-[0.3em] text-white/40 uppercase">
      {children}
    </span>
  </div>
);

const Home = () => {
  return (
    <section className="relative">
      {/* Terminal status bar */}
      <div className="border-b border-white/[0.05] bg-white/[0.01]">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between font-mono text-[10px] tracking-widest text-white/40">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              SYS.READY
            </span>
            <span className="hidden md:inline">LAT 40.4°N · LON 74.4°W</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">NJ · US</span>
            <span className="text-accent">v.2025.08</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-24">
        {/* HERO */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-14 xl:gap-20 items-center">
          <motion.div
            initial="hidden"
            animate="show"
            className="xl:col-span-7 order-2 xl:order-none"
          >
            <motion.div variants={fadeUp} custom={0} className="mb-8">
              <span className="inline-flex items-center gap-3 font-mono text-[11px] tracking-[0.25em] text-white/60 uppercase">
                <span className="inline-block w-8 h-px bg-accent" />
                AI Engineer · Graduate Researcher
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="h1 text-white font-semibold"
            >
              Building{" "}
              <span className="text-gradient">intelligent systems</span>
              <br />
              that ship to production.
            </motion.h1>

            <motion.div variants={fadeUp} custom={2} className="mt-8 max-w-[620px]">
              <div className="flex items-start gap-4">
                <div className="mt-2 h-8 w-1 bg-gradient-to-b from-accent to-transparent rounded-full shrink-0" />
                <p className="text-white/70 text-base md:text-lg leading-relaxed">
                  I'm{" "}
                  <span className="text-white font-medium">
                    Abhishek Sairam Gaduputi
                  </span>
                  , an MS AI researcher at NJIT. I move between research and
                  deployment: generative modeling, computer vision, and
                  multi-agent systems that have powered recommendations,
                  perception, and analytics at scale.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              <a href="/assets/resume/cv.pdf" download>
                <Button className="group inline-flex items-center gap-2 bg-white text-black hover:bg-accent">
                  Download CV
                  <FiDownload className="transition-transform group-hover:translate-y-0.5" />
                </Button>
              </a>
              <Link href="/resume">
                <Button
                  variant="outline"
                  className="group inline-flex items-center gap-2 border-white/[0.14] bg-white/[0.03] text-white hover:bg-white/[0.06] hover:text-white"
                >
                  View work
                  <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </Link>
              <Social
                containerStyles="flex gap-3 sm:ml-2"
                iconStyles="h-10 w-10 rounded-full border border-white/[0.1] bg-white/[0.03] flex justify-center items-center text-white/70 hover:text-accent hover:border-accent transition-colors"
              />
            </motion.div>

            {/* Terminal typewriter mini output */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-12 max-w-[620px] rounded-lg border border-white/[0.08] bg-black/40 backdrop-blur-md font-mono text-[12px] overflow-hidden"
            >
              <div className="flex items-center gap-2 px-3 py-2 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="h-2 w-2 rounded-full bg-red-500/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
                <span className="h-2 w-2 rounded-full bg-emerald-500/70" />
                <span className="ml-3 text-white/40 text-[10px] tracking-wider">
                  ~/abhishek/profile
                </span>
              </div>
              <div className="px-4 py-3 space-y-1 text-white/70 leading-relaxed">
                <div>
                  <span className="text-accent">{`>`}</span> whoami
                </div>
                <div className="text-white/50 pl-4">
                  ai_engineer · researcher · builder
                </div>
                <div>
                  <span className="text-accent">{`>`}</span> status
                </div>
                <div className="text-white/50 pl-4">
                  open to research collabs and roles
                  <span className="inline-block w-2 h-4 bg-accent ml-1 align-middle animate-pulse" />
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="xl:col-span-5 order-1 xl:order-none flex justify-center xl:justify-end"
          >
            <Photo />
          </motion.div>
        </div>

        {/* STATS STRIP */}
        <div className="mt-24">
          <SectionLabel id="01">telemetry</SectionLabel>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((s, i) => (
              <div key={i} className="card p-5 md:p-6 group">
                <div className="flex items-baseline gap-1">
                  <div className="text-3xl md:text-4xl font-semibold text-white tracking-tight">
                    <CountUp end={s.num} duration={2} decimals={s.decimals} />
                  </div>
                  <span className="text-accent text-lg font-mono">
                    {s.suffix}
                  </span>
                </div>
                <p className="mt-2 text-xs font-mono tracking-wider text-white/50 uppercase">
                  {s.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* TECH MARQUEE */}
        <div className="mt-20">
          <SectionLabel id="02">stack</SectionLabel>
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] py-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg to-transparent z-10" />
            <div className="flex gap-10 animate-marquee whitespace-nowrap font-mono">
              {[...skills, ...skills].map((s, i) => (
                <span
                  key={i}
                  className="text-white/50 hover:text-white transition-colors text-sm tracking-wide"
                >
                  {s}
                  <span className="ml-10 text-accent/40">◆</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FEATURED PROJECTS */}
        <div className="mt-24">
          <SectionLabel id="03">selected work</SectionLabel>
          <div className="flex items-end justify-between mb-8 gap-6 flex-wrap">
            <h2 className="h2 text-white">
              Systems I've <span className="text-gradient">built</span>.
            </h2>
            <Link
              href="/resume"
              className="text-sm text-white/60 hover:text-accent inline-flex items-center gap-1 group font-mono"
            >
              see all
              <FiArrowUpRight className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featured.map((p, i) => {
              const Wrapper = p.href ? "a" : "div";
              const props = p.href
                ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                : {};
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                >
                  <Wrapper
                    {...props}
                    className="card group block p-6 md:p-7 h-full"
                  >
                    <div
                      className={`absolute -top-24 -right-24 h-56 w-56 rounded-full bg-gradient-to-br ${p.accent} blur-3xl opacity-70 group-hover:opacity-100 transition-opacity`}
                    />
                    <div className="relative flex flex-col h-full">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-mono text-[10px] tracking-[0.3em] text-white/40">
                            PROJECT.{p.id}
                          </p>
                          <h3 className="mt-3 text-xl md:text-2xl font-semibold text-white group-hover:text-accent transition-colors">
                            {p.name}
                          </h3>
                          <p className="text-white/60 text-sm mt-1">
                            {p.tagline}
                          </p>
                        </div>
                        {p.href && (
                          <span className="h-10 w-10 shrink-0 rounded-full border border-white/[0.1] bg-white/[0.03] flex items-center justify-center text-white/70 group-hover:bg-accent group-hover:text-black group-hover:border-accent transition-all">
                            <FiArrowUpRight />
                          </span>
                        )}
                      </div>

                      <p className="mt-5 text-white/70 leading-relaxed text-sm">
                        {p.blurb}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[10px] tracking-wider text-white/60 border border-white/[0.1] rounded px-2 py-1"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 card overflow-hidden p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-glow-radial opacity-70" />
          <div className="pointer-events-none absolute inset-0 opacity-20"
               style={{
                 backgroundImage: "radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)",
                 backgroundSize: "18px 18px",
                 maskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
                 WebkitMaskImage: "radial-gradient(ellipse at center, black, transparent 70%)",
               }} />
          <div className="relative">
            <span className="font-mono text-[10px] tracking-[0.3em] text-accent">
              [04] LET'S BUILD
            </span>
            <h3 className="mt-6 text-3xl md:text-4xl font-semibold text-white">
              Have an AI problem worth solving?
            </h3>
            <p className="mt-4 text-white/60 max-w-xl mx-auto">
              Currently open to research collaborations, internships, and
              early-stage engineering roles.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3 flex-wrap">
              <Link href="/contact">
                <Button className="bg-white text-black hover:bg-accent">
                  Get in touch
                </Button>
              </Link>
              <a
                href="https://github.com/sairam782"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-white/[0.14] bg-white/[0.03] text-white hover:bg-white/[0.06] hover:text-white inline-flex items-center gap-2"
                >
                  <FiGithub /> GitHub
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
