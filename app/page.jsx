import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-4 xl:pb-4">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Tech Fantic</span>
            <h1 className="h1 mb-6 text-white">
              Hello I'm <br /> <span className="text-accent">ABHISHEK SAIRAM GADUPUTI </span>
            </h1>
            <p className="max-w-[600px] mb-9 text-white/80 ">
            AI enthusiast driven by curiosity and innovation. Blending engineering, data, and intelligence to solve real-world challenges, Passionate about building smart & futuristic solutions that shape the future.
            </p>
            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
            <a href="/assets/resume/cv.pdf" download>
      <Button
        variant="outline"
        size="lg"
        className="uppercase flex items-center gap-2"
      >
        <span>Download CV</span>
        <FiDownload className="text-xl" />
      </Button>
    </a>
              <div className="mb xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-gray-1200 hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
