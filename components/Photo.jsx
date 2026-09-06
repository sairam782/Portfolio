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
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt="Portrait of Abhishek Sairam Gaduputi"
            className="object-cover"
          />
          {/* Bottom fade */}
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
        </motion.div>

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
      </motion.div>
    </div>
  );
};

export default Photo;
