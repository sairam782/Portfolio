"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";



const PageTransition = ({children}) => {
  const pathname = usePathname();
  return ( 
    <AnimatePresence>
      <motion.div 
        key={pathname}
        initial={{opacity: 0.55}} 
        animate={{
          opacity: 0,
          transition:{delay:0.05,duration:0.25,ease:"easeInOut"},
        }}
        className="fixed top-0 z-30 h-screen w-screen bg-primary pointer-events-none"
      />
      {children}
    </AnimatePresence>
  );
};


export default PageTransition;
