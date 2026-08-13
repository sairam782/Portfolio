"use client";

import { useState } from "react";
import { FaPython, FaGitAlt, FaGithub, FaDatabase } from "react-icons/fa";
import { SiCplusplus, SiC, SiMysql, SiMongodb, SiTableau } from "react-icons/si"; // ✅ these were in your original working file, kept as-is
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, BrainCircuit, Flame, Table2, Sigma, Network, Cloud } from 'lucide-react';
// ✅ swapped the unverified react-icons brand logos (TensorFlow, PyTorch, Scikit-learn, Pandas, Neo4j, Azure)
// for guaranteed-available lucide-react icons, since those Si* component names couldn't be confirmed
// against your installed react-icons version and were causing "Element type is invalid" at render time.

const about = {
  title: 'About me',
  description: "I am a graduate researcher with hands on experience across generative modeling, computer vision, and multi agent systems, combined with production ML engineering experience shipping recommendation, perception, and analytics systems used at scale. I am comfortable moving between research experimentation and end to end deployment, and I am always excited to collaborate on meaningful projects that push the boundaries of what's possible.",
  info: [
    {
      fieldName: "Name:",
      fieldValue: "Abhishek Sairam Gaduputi"
    },
    {
      fieldName: "Email:",
      fieldValue: "ag2936@njit.edu"
    },
    {
      fieldName: "Phone:",
      fieldValue: "+1 (908) 356-9089"
    },
    {
      fieldName: "Location:",
      fieldValue: "New Jersey, United States"
    },
    {
      fieldName: "GitHub:",
      fieldValue: "github.com/sairam782"
    },
    {
      fieldName: "LinkedIn:",
      fieldValue: "linkedin.com/in/abhishek-sairam-gaduputi"
    },
    {
      fieldName: "Languages:",
      fieldValue: "English, Telugu, Hindi"
    },
    {
      fieldName: "Hobbies:",
      fieldValue: "Badminton, Guitar, Singing, Artworks"
    },
  ]
};

const experience = {
  icon: "/assests/resume/badge.svg",
  title: "My experience",
  description: "As a Senior Executive in the R&D division at Montra Electric Tractor, a subsidiary of TI Clean Mobility under the Murugappa Group, I fine tuned YOLOv11 and MiDaS models for an autonomous fertilizer spraying solution, designed and tested a Battery Management System, and proposed a 3 kW onboard charger for low grid regions. At Froker, Arroz Technologies, I built and deployed an end to end recommendation engine that increased user engagement by 37 percent and orders by 11 percent, built MongoDB data pipelines to power it, designed a multimodal content scoring pipeline using Microsoft AI Foundry APIs, and built interactive analytics dashboards with Retool, Mixpanel, and Google Analytics 4. As an Undergraduate Research Assistant at Manipal Institute of Technology, I designed and built an autonomous line following and obstacle avoiding robot with closed loop PID control and real time obstacle detection.",
  items: [
    {
      company: "Montra Electric Tractor, TI Clean Mobility, Murugappa Group",
      position: "Senior Executive, R&D",
      duration: "November 2024 - July 2025",
    },
    {
      company: "Froker, Arroz Technologies",
      position: "Machine Learning Engineer",
      duration: "May 2022 - October 2024",
    },
    {
      company: "Manipal Institute of Technology",
      position: "Undergraduate Research Assistant, Embedded Systems",
      duration: "September 2021 - February 2022",
    },
  ]
};

const projects = {
  icon: "/assests/resume/badge.svg",
  title: "Projects",
  description: "I am a versatile tech enthusiast with practical experience in machine learning, computer vision, and IoT. My work spans multi agent systems, generative modeling, and deep learning pipelines, driven by a passion for applying these skills to solve real world challenges.",
  items: [
    {
      titleofproject: "Trinetra : Autonomous Incident Response Agent System",
      link: "https://trinetra-mauve.vercel.app/",
      description: "A multi agent autonomous incident response system with a tiered agent architecture and gated, dry run first remediation executor."
    },
    {
      titleofproject: "GymCom : AI Powered Live Workout Form Coach",
      link: "https://gymcom.vercel.app/live.html",
      description: "A full stack workout analysis app combining browser side pose tracking with a FastAPI backend and Claude powered coaching reports."
    },
    {
      titleofproject: "ResNet : Vision Transformer for Deepfake Detection",
      description: "A hybrid Residual Network and Vision Transformer framework achieving up to 86 percent prediction accuracy on Celeb-DFv2."
    },
    {
      titleofproject: "Synthetic MRI Generation for Brain Tumor Classification",
      description: "A 2D Denoising Diffusion Model using MONAI to generate synthetic MRI slices, improving tumor detection accuracy from 82 to 88 percent."
    },
    {
      titleofproject: "Smart IoT Based Precision Farm Management System",
      description: "A real time IoT farm monitoring system with automated irrigation and MongoDB Atlas logging, achieving a 14 percent crop yield increase."
    },
  ]
};

const education = {
  icon: "/assests/resume/badge.svg",
  title: "My education",
  description: "I am currently pursuing my Master's degree in Artificial Intelligence at NJIT, building upon a strong foundation from my undergraduate studies at Manipal Institute of Technology. Each stage of my education has shaped a well rounded perspective, fueling my passion for continuous learning, research, and innovation.",
  items: [
    {
      institution: "New Jersey Institute of Technology",
      degree: "Master of Science, Artificial Intelligence (GPA: 4.0/4.0)",
      duration: "September 2025 - Present (Expected May 2027)",
    },
    {
      institution: "Manipal Institute of Technology (MAHE)",
      degree: "BTech, Electronics and Instrumentation, Minor in Data Science (CGPA: 8.08/10)",
      duration: "September 2020 - June 2024",
    },
  ]
};

const skills = {
  title: "My skills",
  description: 'Throughout my academic and professional journey, I have gained expertise in various languages, frameworks, and tools spanning machine learning, data engineering, and analytics. This commitment to continuous learning has shaped my skills, enabling me to tackle complex challenges and contribute effectively to any project or team.',
  skillslist: [
    { icon: <SiC />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "SQL" },
    { icon: <FaDatabase />, name: "NoSQL" },
    { icon: <Network size={48} />, name: "Cypher / Neo4j" },
    { icon: <BrainCircuit size={48} />, name: "TensorFlow" },
    { icon: <Flame size={48} />, name: "PyTorch" },
    { icon: <Sigma size={48} />, name: "Scikit-learn" },
    { icon: <Table2 size={48} />, name: "Pandas" },
    { icon: <Sigma size={48} />, name: "NumPy" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiTableau />, name: "Tableau" },
    { icon: <Cloud size={48} />, name: "Azure AI Foundry" },
  ]
};

// ✅ Reusable component for Show/Hide Description
const DescriptionToggle = ({ text }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col items-center xl:items-start gap-2">
      <Button
        variant="outline"
        className="w-fit"
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide Description" : "Show Description"}
      </Button>
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="max-w-[700px] text-white/60 mx-auto xl:mx-0 overflow-hidden"
          >
            {text}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 mt-20">
            <TabsTrigger value="experience"> Experience</TabsTrigger>
            <TabsTrigger value="projects"> Projects</TabsTrigger>
            <TabsTrigger value="education"> Education</TabsTrigger>
            <TabsTrigger value="skills"> Skills</TabsTrigger>
            <TabsTrigger value="about"> About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full">

            {/* EXPERIENCE TAB */}
            <TabsContent value="experience" className="w-full mb-6">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold text-white '>{experience.title}</h3>
                <DescriptionToggle text={experience.description} />
                <ScrollArea className="h-[700px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-1 gap-[30px]'>
                    {experience.items.map((item, index) => (
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[360px] min-h-[60px] text-center break-all lg:text-left text-white'>{item.position}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                          <p className='text-white/60'>{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* PROJECTS TAB */}
            <TabsContent value="projects" className="w-full mb-6">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold text-white'>{projects.title}</h3>
                <DescriptionToggle text={projects.description} />
                <ScrollArea className="h-[600px]">
                  <ul className='flex flex-col gap-[10px]'>
                    {projects.items.map((item, index) => (
                      <li key={index} className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-2'>
                        {item.link ? (
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 text-xl max-w-[500px] text-center lg:text-left text-white hover:text-accent transition-colors duration-300 underline underline-offset-4'
                          >
                            {item.titleofproject}
                            <ExternalLink className='w-4 h-4 shrink-0' />
                          </a>
                        ) : (
                          <h3 className='text-xl max-w-[500px] text-center lg:text-left text-white'>
                            {item.titleofproject}
                          </h3>
                        )}
                        {item.description && (
                          <p className='text-white/60 text-sm max-w-[500px] text-center lg:text-left'>
                            {item.description}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* EDUCATION TAB */}
            <TabsContent value="education" className="w-full mb-6">
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold text-white'>{education.title}</h3>
                <DescriptionToggle text={education.description} />
                <ScrollArea className="h-[400px]">
                  <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                    {education.items.map((item, index) => (
                      <li key={index} className='bg-[#232329] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[280px] min-h-[60px] text-center lg:text-left text-white'>{item.institution}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent shrink-0'></span>
                          <p className='text-white/60'>{item.degree}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* SKILLS TAB */}
            <TabsContent value="skills" className="w-full h-full mb-6">
              <div className='flex flex-col gap-[30px]'>
                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                  <h3 className='text-4xl font-bold text-white'>{skills.title}</h3>
                  <DescriptionToggle text={skills.description} />
                </div>
                <ScrollArea className="h-[600px]">
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                    {skills.skillslist.map((skill, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
                              <div className='text-6xl group-hover:text-accent transition-all duration-300 text-white'>
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className='capitalize'>{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* ABOUT TAB */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px]'>
                <h3 className='text-4xl font-bold text-white'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item, index) => (
                    <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                      <span className='text-white/60'>{item.fieldName}</span>
                      <span className='text-xl'>{item.fieldValue}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;