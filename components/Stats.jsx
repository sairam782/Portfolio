"use client";

// Dynamically import the CountUp component with SSR disabled
import CountUp from "react-countup";

const stas = [
    {
        num: 16,
        text: "Courses Completed",
    },
    {
        num: 7,
        text: "Projects Completed",
    },
    {
        num: 8,
        text: "Technologies Mastered",
    },
    {
        num: 150,
        text: "Code Commits",
    },
];

const Stats = () => {
    return (
        <section className="pt-2 pb-2 xl:pt-0 xl:pb-0 ">
            <div className="container mx-auto">
                <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
                    {stas.map((item, index) => {
                        return (
                            <div className="flex-1 flex gap-4 items-center justify-center xl:justify-start" key={index}>
                                <div className="text-4xl xl:text-6xl font-extrabold">
                                    <CountUp
                                        end={item.num}
                                        duration={5}
                                        delay={2}
                                    />
                                    {item.num === 150 && "+"} {/* Add + if num is 100 */}
                                </div>
                                <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Stats;
