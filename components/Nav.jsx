"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  // Startup section hidden for now
  // { name: "startup", path: "/works" },
  { name: "contact", path: "/contact" },
];
<<<<<<< Updated upstream
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
=======
>>>>>>> Stashed changes

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 rounded-full border border-white/[0.08] bg-white/[0.03] p-1 backdrop-blur-xl">
      {links.map((link, index) => {
        const active = link.path === pathname;
        return (
          <Link
            href={link.path}
            key={index}
            className={`relative px-4 py-1.5 text-sm capitalize transition-colors rounded-full ${
              active ? "text-white" : "text-white/60 hover:text-white"
            }`}
          >
            {active && (
              <span className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.1]" />
            )}
            <span className="relative">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
