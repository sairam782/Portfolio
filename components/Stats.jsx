"use client";

// Dynamically import the CountUp component with SSR disabled
import CountUp from "react-countup";

const stats = [
    {
        num: 7,
        text: "Applied AI projects",
    },
    {
        num: 3,
        text: "Industry roles",
    },
    {
        num: 8,
        text: "Core ML tools",
    },
    {
        num: 150,
        text: "Commits shipped",
    },
];

const Stats = () => {
    return (
        <section className="py-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                    {stats.map((item, index) => {
                        return (
                            <div className="light-card rounded-2xl p-5" key={index}>
                                <div className="font-mono text-4xl font-bold text-accent xl:text-5xl">
                                    <CountUp
                                        end={item.num}
                                        duration={2.2}
                                        delay={0.1}
                                    />
                                    {item.num === 150 && "+"}
                                </div>
                                <p className="mt-2 text-sm font-medium leading-snug text-white/60">
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
