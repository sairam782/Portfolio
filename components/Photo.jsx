"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeInOut" },
          }}
          className="w-[228px] xl:w-[428px] h-[228px] xl:h-[428px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="object-contain"
          />
        </motion.div>

        <motion.svg
          className="w-[230px] xl:w-[436px] h-[230px] xl:h-[436px]"
          fill="transparent"
          viewBox="0 0 436 436"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Green Circle */}
          <motion.circle
            cx="215"
            cy="215"
            r="222" // Updated size
            stroke="#7fff00" // Green color
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 215 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* White Circle */}
          <motion.circle
            cx="215"
            cy="215"
            r="214" // Slightly smaller than the green circle
            stroke="#ffffff" // White color
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["20 120 25 25", "18 25 92 72", "8 215 22 22"],
              rotate: [360, 0],
            }}
            transition={{
              duration: 40,
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
