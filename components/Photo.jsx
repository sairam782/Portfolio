"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Bracket = ({ className }) => (
  <span
    className={`absolute h-6 w-6 border-accent/70 ${className}`}
    aria-hidden
  />
);

const Photo = () => {
  return (
<<<<<<< Updated upstream
    <div className="relative mx-auto h-[230px] w-[230px] sm:h-[340px] sm:w-[340px] xl:h-[460px] xl:w-[460px]">
      <div className="absolute inset-8 rounded-full bg-accent/10 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: "easeOut" },
        }}
        className="relative h-full w-full"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            transition: { delay: 0.2, duration: 0.6, ease: "easeInOut" },
          }}
          className="absolute inset-[22px] overflow-hidden rounded-full border border-white/10 bg-white/[0.04] shadow-2xl shadow-black/50"
=======
    <div className="relative w-[300px] h-[380px] md:w-[360px] md:h-[460px] xl:w-[420px] xl:h-[520px]">
      {/* Ambient glow behind frame */}
      <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-accent/10 blur-3xl opacity-70" />
      <div className="pointer-events-none absolute -inset-8 rounded-[2rem] bg-accent-cyan/8 blur-3xl opacity-50" />

      {/* Coordinate ticks (top) */}
      <div className="absolute -top-6 left-0 right-0 flex justify-between text-[10px] font-mono text-white/30 tracking-widest">
        <span>N 40.4°</span>
        <span>W 74.4°</span>
      </div>

      {/* Photo frame */}
      <div className="relative h-full w-full rounded-2xl overflow-hidden border border-white/[0.1] bg-bg-soft">
        {/* Corner brackets */}
        <Bracket className="top-2 left-2 border-l-2 border-t-2 rounded-tl-md" />
        <Bracket className="top-2 right-2 border-r-2 border-t-2 rounded-tr-md" />
        <Bracket className="bottom-2 left-2 border-l-2 border-b-2 rounded-bl-md" />
        <Bracket className="bottom-2 right-2 border-r-2 border-b-2 rounded-br-md" />

        {/* Top readout bar */}
        <div className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-4 pt-3 text-[10px] font-mono tracking-wider">
          <span className="flex items-center gap-2 text-white/50">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            ONLINE
          </span>
          <span className="text-white/40">ID.001</span>
        </div>

        {/* Subtle grid overlay */}
        <div
          className="absolute inset-0 z-10 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Vertical crosshair line */}
        <div className="pointer-events-none absolute inset-y-6 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent z-10" />

        {/* Scan line */}
        <motion.div
          className="pointer-events-none absolute left-0 right-0 h-[1px] z-20"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(167,139,250,0.7), transparent)",
            boxShadow: "0 0 12px rgba(167,139,250,0.6)",
          }}
          animate={{ top: ["8%", "92%", "8%"] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="absolute inset-0"
>>>>>>> Stashed changes
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
<<<<<<< Updated upstream
            alt="Portrait of Abhishek Sairam Gaduputi"
            className="object-cover"
=======
            alt="Abhishek Sairam Gaduputi"
            className="object-cover object-top"
>>>>>>> Stashed changes
          />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
        </motion.div>

<<<<<<< Updated upstream
        <motion.svg
          className="h-full w-full"
          fill="transparent"
          viewBox="0 0 436 436"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="215"
            cy="215"
            r="204"
            stroke="#00f0ff"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["24 120 35 25", "12 42 100 72", "8 215 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 34,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <motion.circle
            cx="215"
            cy="215"
            r="214"
            stroke="rgba(188,19,254,0.72)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["20 120 25 25", "18 35 92 72", "8 215 22 22"],
              rotate: [360, 0],
            }}
            transition={{
              duration: 38,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
=======
        {/* Bottom readout */}
        <div className="absolute bottom-0 left-0 right-0 z-20 px-4 pb-3 font-mono text-[10px] tracking-wider text-white/60">
          <div className="flex items-center justify-between border-t border-white/[0.08] pt-2">
            <span className="text-white/80">{`>`} AI_ENGINEER</span>
            <span className="text-accent">v.2025</span>
          </div>
        </div>
      </div>

      {/* Coordinate ticks (bottom) */}
      <div className="absolute -bottom-6 left-0 right-0 flex justify-between text-[10px] font-mono text-white/30 tracking-widest">
        <span>SYS.OK</span>
        <span>NJIT · MS.AI</span>
      </div>

      {/* Floating data tags */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="absolute -left-4 top-[22%] hidden md:flex items-center gap-2 rounded-md border border-white/[0.1] bg-bg/80 backdrop-blur-md px-2.5 py-1.5 text-[10px] font-mono tracking-wider text-white/70 shadow-glow"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        PYTORCH
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="absolute -right-6 top-[45%] hidden md:flex items-center gap-2 rounded-md border border-white/[0.1] bg-bg/80 backdrop-blur-md px-2.5 py-1.5 text-[10px] font-mono tracking-wider text-white/70"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
        MULTI_AGENT
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
        className="absolute -left-8 bottom-[18%] hidden md:flex items-center gap-2 rounded-md border border-white/[0.1] bg-bg/80 backdrop-blur-md px-2.5 py-1.5 text-[10px] font-mono tracking-wider text-white/70"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-pink" />
        GEN_AI
>>>>>>> Stashed changes
      </motion.div>
    </div>
  );
};

export default Photo;
