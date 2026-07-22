import Link from "next/link";
import { Activity, ArrowRight, BrainCircuit, Code2, Cpu, Database, FileDown, LineChart, Sparkles } from "lucide-react";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";

const focusAreas = [
  {
    icon: BrainCircuit,
    title: "Applied AI Systems",
    text: "Computer vision, recommendation engines, and GenAI experiments built around real use cases.",
  },
  {
    icon: Database,
    title: "Data Intelligence",
    text: "Dashboards, product analytics, SQL/NoSQL workflows, and metrics that help teams make decisions.",
  },
  {
    icon: LineChart,
    title: "Model Evaluation",
    text: "A practical focus on performance, error analysis, interpretability, and measurable outcomes.",
  },
];

const featuredProjects = [
  {
    name: "Deepfake Detection Platform",
    tag: "Computer Vision",
    description:
      "An AI safety product direction for detecting manipulated media and protecting digital authenticity.",
    stack: ["Python", "CV", "CNN", "Grad-CAM"],
  },
  {
    name: "Recommendation Engine",
    tag: "Personalization",
    description:
      "Real-time recommendation logic designed to improve discovery, engagement, and product relevance.",
    stack: ["Python", "MongoDB", "Analytics", "Ranking"],
  },
  {
    name: "Analytics Command Center",
    tag: "Data Product",
    description:
      "Retool, Mixpanel, and GA4 dashboards for monitoring product behavior and operational signals.",
    stack: ["Retool", "GA4", "Mixpanel", "SQL"],
  },
];

const systemSignals = [
  ["Model focus", "Computer Vision"],
  ["Signal", "Recommendation Systems"],
  ["Evaluation", "Metrics + Explainability"],
];

const Home = () => {
  return (
    <main className="overflow-hidden">
      <section className="relative min-h-[calc(100vh-88px)] py-10 xl:py-16">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 xl:grid-cols-[1.08fr_0.92fr]">
            <div className="order-2 text-center xl:order-1 xl:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 font-mono text-xs uppercase tracking-[0.2em] text-white/70 backdrop-blur-xl">
                <Sparkles size={14} className="text-accent" />
                AI / ML Engineer - Applied Intelligence
              </div>

              <h1 className="h1 text-white">
                Building <span className="gradient-text">intelligent systems</span> that turn data into decisions.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/68 xl:mx-0 xl:text-lg">
                I am Abhishek Sairam Gaduputi, an AI and machine learning engineer
                focused on applied AI, analytics, recommendation systems, and
                future-ready products that solve practical problems.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center xl:justify-start">
                <Link href="/works">
                  <Button size="lg" className="gap-2">
                    View AI Projects
                    <ArrowRight size={18} />
                  </Button>
                </Link>
                <a href="/assets/resume/cv.pdf" download>
                  <Button variant="outline" size="lg" className="gap-2">
                    Download Resume
                    <FileDown size={18} />
                  </Button>
                </a>
              </div>

              <div className="mt-7 flex flex-col items-center gap-4 sm:flex-row xl:justify-start">
                <Social
                  containerStyles="flex gap-3"
                  iconStyles="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 transition hover:border-accent hover:bg-accent hover:text-primary"
                />
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-white/40">
                  Open to AI, data, and product engineering roles
                </span>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {systemSignals.map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.045] p-4 text-left backdrop-blur-xl">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/38">{label}</p>
                    <p className="mt-2 text-sm font-semibold text-white/82">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 xl:order-2">
              <div className="light-card rounded-[2rem] p-5 xl:p-7">
                <div className="relative z-10">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-white/48">
                      <Cpu size={15} className="text-accent" />
                      AI profile engine
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
                      <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_14px_rgba(0,240,255,0.9)]" />
                      Online
                    </div>
                  </div>
                  <Photo />
                  <div className="mt-5 grid grid-cols-3 gap-3">
                    {["Vision", "Data", "GenAI"].map((item) => (
                      <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-3 text-center">
                        <Activity size={15} className="mx-auto mb-2 text-accent" />
                        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/58">{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="py-16 xl:py-24">
        <div className="container mx-auto">
          <div className="grid gap-5 md:grid-cols-3">
            {focusAreas.map((area) => {
              const Icon = area.icon;

              return (
                <article key={area.title} className="light-card rounded-3xl p-6 transition duration-500 hover:-translate-y-1 hover:border-accent/35">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/12 text-accent">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-xl font-bold text-white">{area.title}</h2>
                  <p className="mt-3 leading-7 text-white/60">{area.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24">
        <div className="container mx-auto">
          <div className="mb-10 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div>
              <p className="eyebrow">Featured work</p>
              <h2 className="h2 mt-3 max-w-3xl text-white">AI projects with a clear problem, approach, and outcome.</h2>
            </div>
            <Link href="/works">
              <Button variant="ghost" className="gap-2">
                See all projects
                <ArrowRight size={17} />
              </Button>
            </Link>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <article key={project.name} className="light-card rounded-3xl p-6 transition duration-500 hover:-translate-y-1">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.tag}</p>
                <h3 className="mt-4 text-2xl font-bold text-white">{project.name}</h3>
                <p className="mt-4 min-h-[112px] leading-7 text-white/62">{project.description}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 font-mono text-xs text-white/65">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 xl:py-24">
        <div className="container mx-auto">
          <div className="grid gap-8 xl:grid-cols-[0.82fr_1.18fr] xl:items-center">
            <div>
              <p className="eyebrow">Experiment</p>
              <h2 className="h2 mt-3 text-white">Live inference thinking, portfolio-ready.</h2>
              <p className="mt-5 max-w-xl leading-8 text-white/62">
                This section borrows the terminal energy from your reference code:
                technical, AI-native, and instantly clear that the portfolio belongs
                to someone who builds intelligent systems.
              </p>
            </div>

            <div className="terminal-panel p-5 font-mono text-sm leading-7 text-white/84 xl:p-7">
              <div className="mb-6 flex items-center gap-2">
                <span className="terminal-dot bg-[#ff5f56]" />
                <span className="terminal-dot bg-[#ffbd2e]" />
                <span className="terminal-dot bg-[#27c93f]" />
                <span className="ml-3 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-white/38">
                  <Code2 size={14} className="text-accent" />
                  inference.py
                </span>
              </div>
              <div>
                <span className="text-violetGlow">import</span> torch
                <br />
                <span className="text-violetGlow">from</span> portfolio_ai <span className="text-violetGlow">import</span>{" "}
                <span className="text-accent">AppliedModel</span>
                <br />
                <br />
                <span className="text-violetGlow">def</span>{" "}
                <span className="text-accent">predict_next_step</span>(signals):
                <br />
                &nbsp;&nbsp;<span className="text-white/38 italic"># Blend model output with product context</span>
                <br />
                &nbsp;&nbsp;features = encoder(signals)
                <br />
                &nbsp;&nbsp;score = model.rank(features, objective=<span className="text-[#7ee787]">"impact"</span>)
                <br />
                &nbsp;&nbsp;<span className="text-violetGlow">return</span> deploy(score, latency_budget=<span className="text-[#ff9e64]">200</span>)
                <br />
                <br />
                <span className="text-[#7ee787]">"focus: useful AI, measured outcomes, clean systems"</span>
                <span className="terminal-cursor" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
