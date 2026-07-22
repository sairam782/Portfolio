import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (<header className="sticky top-0 z-20 border-b border-white/10 bg-primary/55 py-4 text-white backdrop-blur-2xl">
    <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
        <h1 className="gradient-text text-3xl font-bold tracking-tight">
            Abhi<span className="text-accent">.</span>
        </h1>
        </Link>

        <div className="hidden xl:flex items-center gap-8">
        <Nav />
        <Link href="/contact">
        <Button>
            Let's connect
        </Button>
        </Link>
        </div>

        <div className="xl:hidden"> 
        <MobileNav />
        </div>
    
    </div>
  </header>
  );
};

export default Header;
