import Link from "next/link";
<<<<<<< Updated upstream
import { Button } from "./ui/button";
=======
>>>>>>> Stashed changes
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
<<<<<<< Updated upstream
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
=======
  return (
    <header className="sticky top-0 z-50 py-4 text-white backdrop-blur-md bg-bg/60 border-b border-white/[0.06]">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.04] border border-white/[0.1] text-accent font-semibold text-sm">
            A
            <span className="absolute inset-0 rounded-lg opacity-40 blur-md bg-accent-gradient" />
          </span>
          <h1 className="text-xl font-semibold tracking-tight">
            abhishek<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-4">
          <Nav />
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-medium hover:bg-accent hover:text-black transition-colors"
          >
            <span className="status-dot" />
            Available
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
>>>>>>> Stashed changes
        </div>
      </div>
    </header>
  );
};

export default Header;
