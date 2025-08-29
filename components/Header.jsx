import Link from "next/link";
import { Button } from "./ui/button";
//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";




const Header = () => {
  return (<header className="py-2 xl:py-2 text-white ">
    <div className="container mx-auto flex justify-between items-centre">
        {/*logo*/}
        <Link href="/">
        <h1 className="text-4xl font-semibold ">
            Abhi<span className="text-accent">.</span>
        </h1>
        </Link>






        {/* desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
        <Nav />
        <Link href="/contact">
        <Button className="text-black">
            Contact me
        </Button>
        </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden"> 
        <MobileNav />
        </div>
    
    </div>
  </header>
  );
};

export default Header;