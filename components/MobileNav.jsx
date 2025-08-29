"use client";

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { CiMenuFries } from 'react-icons/ci';

const links = [
    { name: "home", path: "/" },
    { name: "works", path: "/works" },
    { name: "resume", path: "/resume" },
    
    { name: "contact", path: "/contact" },
];

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col justify-center items-center min-h-screen py-16">
                <div className="mb-16 text-center">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Abhi<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                {/* nav */}
                <nav className="flex flex-col items-center gap-8">
                    {links.map((link, index) => (
                        <Link
                            href={link.path}
                            key={index}
                            className={`${
                                link.path === pathname ? "text-accent border-b-2 border-accent" : ""
                            } text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
