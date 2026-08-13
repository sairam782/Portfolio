"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
<<<<<<< Updated upstream
import { Menu } from 'lucide-react';

const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/works" },
    { name: "Resume", path: "/resume" },
    { name: "Contact", path: "/contact" },
=======
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", path: "/" },
  { name: "resume", path: "/resume" },
  { name: "contact", path: "/contact" },
>>>>>>> Stashed changes
];

const MobileNav = () => {
  const pathname = usePathname();

<<<<<<< Updated upstream
    return (
        <Sheet>
            <SheetTrigger className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] text-accent">
                <Menu size={22} />
                <span className="sr-only">Open menu</span>
            </SheetTrigger>
            <SheetContent className="flex min-h-screen flex-col items-center justify-center border-l border-white/10 bg-primary/95 py-16 backdrop-blur-xl">
                <div className="mb-16 text-center">
                    <Link href="/">
                        <h1 className="text-4xl font-bold tracking-tight text-white">
                            Abhi<span className="text-accent">.</span>
                        </h1>
                        <p className="mt-2 font-mono text-xs uppercase tracking-[0.22em] text-white/45">
                            AI / ML Engineer
                        </p>
                    </Link>
                </div>
                <nav className="flex flex-col items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === pathname ? "text-accent" : "text-white/70"
                            } text-2xl font-semibold hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
=======
  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center h-10 w-10 rounded-full border border-white/[0.1] bg-white/[0.03]">
        <CiMenuFries className="text-[22px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-center items-center min-h-screen py-16 bg-bg border-l border-white/[0.08]">
        <div className="mb-16 text-center">
          <Link href="/">
            <h1 className="text-4xl font-semibold text-white">
              Abhi<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname ? "text-accent" : "text-white/70"
              } text-xl capitalize hover:text-accent transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
>>>>>>> Stashed changes
};

export default MobileNav;
