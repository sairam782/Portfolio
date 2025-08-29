"use client";

import { useState } from "react";
import { FaPython, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiC, SiMysql, SiMongodb, SiDatabricks, SiTableau  } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; 
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';

const about = {
  title:'About me',
  description:"My journey into technology began with a deep curiosity about how things work, evolving into a genuine passion for coding and innovation. Throughout my career, I have accumulated valuable experience across various projects and roles, thriving on the challenge of tackling complex problems and crafting effective solutions that create a positive impact.Outside of my professional endeavors, I actively explore emerging tech trends, contribute to open-source initiatives, and continuously expand my skill set. I am dedicated to lifelong learning and excited about the prospect of collaborating on meaningful projects that push the boundaries of what's possible. Let’s connect and explore how we can create something extraordinary together!",
  info:[
    {
      fieldName:"Name:",
      fieldValue:"Abhishek Sairam Gaduputi"
    },
    {
      fieldName:"Email:",
      fieldValue:"abhi.gaduputi@gmail.com"
    },
    {
      fieldName:"Languages:",
      fieldValue:"English,Telugu,Hindi"
    },
    {
      fieldName:"Hobbies:",
      fieldValue:"Badminton,Guitar,Singing,Artworks"
    },
  ]
};

const experience={
  icon:"/assests/resume/badge.svg",
  title:"My experience",
  description:"I worked as a Senior Executive in R&D division at the Montra Electric Tractor division, a subsidiary of TI Clean Mobility under the Murugappa Group. At Montra Electric, we focus on the development and manufacturing of electric vehicles, specifically pioneering advancements in electric tractor technology. This role has allowed me to contribute to sustainable mobility solutions and further develop my expertise in the autonomous electric vehicle domain. In FROKER, I have experience working with MongoDB for seamless data storage and retrieval, and I’ve built dynamic dashboards using Retool to monitor key performance metrics effectively. Additionally, I utilized Mixpanel and Google Analytics 4 to extract actionable insights through detailed reporting. I developed a recommendation engine designed to deliver real-time recommendations, enhancing user engagement. My work also extends to multi-modal large language models (LLMs), where I explored their capabilities to handle diverse data types for robust, scalable solutions.",
  items:[
    {
      company:"Montra Electric Tractor R&D Division, TI clean mobility, Murugappa Groups",
      position:"Senior Executive Research and Development",
      duration:"November 2024 - July 2025 ",
    },
    {
      company:"Froker",
      position:"Machine Learning Engineer",
      duration:"May 2024 - September 2024",
    },
    {
      company:"Froker",
      position:"Machine Learning Intern",
      duration:"December 2023- April 2024",
    },  
  ]
};

const projects={
  icon:"/assests/resume/badge.svg",
  title:"Projects",
  description:"I am a versatile tech enthusiast with practical experience in machine learning, IoT, and data visualization. My expertise lies in designing and optimizing machine learning models, developing end-to-end IoT applications, and creating meaningful visualizations to interpret complex datasets. I am driven by a passion for applying these skills to solve real-world challenges and deliver impactful solutions.",
  items:[
    { titleofproject:"Eyesight power prediction using deep learning methods" },
    { titleofproject:"Movie Recommender System" },
    { titleofproject:"Cancer Imaging using GenAI (In progress)" },
    { titleofproject:"IoT-based Attendance Monitoring system using RFID" },
    { titleofproject:"Email Classifier" },
  ]
};

const education={
  icon:"/assests/resume/badge.svg",
  title:"My education",
  description:"I am currently pursuing my Master’s degree, building upon a strong and diverse educational foundation. Starting from primary and secondary schooling to my undergraduate studies at Manipal, I have developed a solid understanding of my field. In addition, I have expanded my expertise through specialized courses on platforms like Coursera, which have exposed me to emerging areas and new technologies. Each stage of my education has contributed to shaping a well-rounded perspective, fueling my passion for continuous learning, research, and innovation.",
  items:[
    {
      institution:"New jersey Institute Of Technology ",
      degree:"Masters in Artificial Intelligence",
      duration:"2025-present",
    },
    {
      institution:"Manipal Institute Of Technology (MAHE)",
      degree:"BTech in Electronics with minors in Data Science ",
      duration:"2020-2024",
    },
    {
      institution:"Narayana Groups",
      degree:"Secondary Schooling",
      duration:"2020",
    },
    {
      institution:"Narayana Groups",
      degree:"Primary Schooling",
      duration:"2018",
    },
  ]
};

const skills={
  title:"My skills",
  description:'Throughout my academic journey, I have gained expertise in various programming languages and frameworks, which have enhanced my problem-solving abilities and adaptability. My passion for technology and continuous learning has driven me to pursue courses and certifications that keep me updated with the latest trends and innovations in the field. This commitment to learning has shaped my skills, enabling me to tackle complex challenges and contribute effectively to any project or team.',
  skillslist: [
    { icon: <SiC />, name: "C" },    
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <FaPython />, name: "Python" },
    { icon: <SiMysql />, name: "SQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiDatabricks />, name: "NoSQL" }, // using Databricks as closest match
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <SiTableau />, name: "Tableau" }
    // { icon: <SiMicrosoft />, name: "Azure" }, // using Microsoft logo for Azure
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
      initial={{opacity:0}} 
      animate={{opacity:1,transition:{delay:2.4,duration:0.4,ease:"easeIn"}}}
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
                    {experience.items.map((item,index)=>(
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
                  <div className='flex flex-col gap-[10px]'>
                    {projects.items.map((item,index)=>(
                      <li key={index} className='bg-[#232329] h-[100px] py-6 px-10 rounded-xl flex flex-col justify-left items-center lg:items-start gap-1'>
                        <h3 className='text-xl max-w-[360px] min-h-[60px] text-center lg:text-left text-white'>{item.titleofproject}</h3>
                      </li>
                    ))}
                  </div>
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
                    {education.items.map((item,index)=>(
                      <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                        <span className='text-accent'>{item.duration}</span>
                        <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left text-white'>{item.institution}</h3>
                        <div className='flex items-center gap-3'>
                          <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
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
                  <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]' >
                    {skills.skillslist.map((skill,index)=>(
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
              <div className='flex flex-col gap-[30px]' >
                <h3 className='text-4xl font-bold text-white'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                <ul className='gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                  {about.info.map((item,index)=>(
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
