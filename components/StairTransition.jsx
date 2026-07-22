"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Stairs from "./Stairs";


const StairTransition = () => {
  const pathname= usePathname();
  return (
    <AnimatePresence mode ="wait">
      <div key={pathname}>
      <motion.div 
      className="fixed top-0 z-40 h-1 w-screen origin-left bg-accent pointer-events-none" 
      initial={{scaleX:1, opacity:1}} 
      animate={{scaleX:0, opacity:0, transition:{duration:0.45, ease:'easeInOut'},
      }} />


      </div>
    </AnimatePresence>
    
  );
};

export default StairTransition;
