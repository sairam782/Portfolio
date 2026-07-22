"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
const links=[
    {
        name:"Home",
        path:"/",
    },
    {
        name:"Projects",
        path:"/works",
    },
    {
        name:"Resume",
        path:"/resume",
    },
    {
        name:"Contact",
        path:"/contact",
    },

];
const Nav = () => {
    const pathname = usePathname();
    
  return (
    <nav className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] p-1 backdrop-blur-xl">
        {links.map((link, index) => {
            return ( 
            <Link 
            href={link.path} 
            key={index} 
            className={`${
                link.path === pathname
                    ? "bg-white/10 text-white"
                    : "text-white/60 hover:text-white"
            } 
            rounded-full px-4 py-2 text-sm font-semibold transition-all`}
                >

                {link.name}
                </Link>);
        })}
    </nav>
  );
};

export default Nav;
