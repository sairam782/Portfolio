"use client";



import { BsArrowDownRight } from 'react-icons/bs';
import Link from "next/link";
import { motion } from "framer-motion";

const work = [
  {
    num: '01',
    title: 'Quantral Networks AI',
    year: '2025 - Present',
    description:
      'Is dedicated to building trustworthy, innovative, and future-ready solutions. Our journey begins with developing advanced deepfake detection technology to safeguard digital authenticity and combat misinformation. As we grow, our vision expands into a comprehensive AI SaaS platform, offering cutting-edge solutions across diverse industries — from autonomous systems and healthcare IT to agritech and beyond. By embedding AI into everyday processes, we aim to empower businesses, organizations, and individuals with reliable, scalable, and intelligent tools that transform challenges into opportunities. Our mission is to create a world where AI is accessible, ethical, and impactful across all domains.',
    href: ''
  },
  {
    num: '02',
    title: 'Biringe',
    year: '2022 - 2024',
    description:
      'We identified a substantial demand and limited availability of quality Hyderabadi biryani in Manipal and capitalized on the opportunity by establishing a stall at the colleges cultural fest, resulting in remarkable success and financial gain. We anticipate further development and expansion of this initiative in the future.',
    href: ''
  },
];

const Works = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 mt-6 mb-6">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
        >
          {work.map((work, index) => (
            <div
              key={index}
              className="flex flex-col justify-center gap-6 group bg-gray-900 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {work.num}
                </div>
                <Link
                  href={work.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-black text-3xl" />
                </Link>
              </div>
              <div>
                <h2 className="text-[36px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {work.title}
                </h2>
                <p className="text-white/40 text-lg">{work.year}</p>
              </div>
              <p className="text-white/60">{work.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Works;
