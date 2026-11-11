// Single source of truth for identity, links, and navigation.
// Facts here match the resume in public/assets/resume.

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://abhishek-drab-two-45.vercel.app").replace(/\/$/, "");

export const profile = {
  name: "Abhishek Sairam Gaduputi",
  shortName: "Abhishek Gaduputi",
  firstName: "Abhishek",
  role: "Machine Learning and AI Engineer",
  location: "New Jersey, United States",
  availability: "Open to full-time ML and AI engineering roles from May 2027",
  email: "ag2936@njit.edu",
  github: "https://github.com/sairam782",
  linkedin: "https://www.linkedin.com/in/abhishek-sairam-gaduputi-23899b175/",
  devpost: "https://devpost.com/sairam782",
  repo: "https://github.com/sairam782/Portfolio",
  resume: "/assets/resume/Abhi_Gaduputi_Resume.pdf",
  // Optional looping background video for the home hero. When null, the live
  // shader animation is used. Example:
  // { mp4: "/assets/hero/hero.mp4", webm: "/assets/hero/hero.webm", poster: "/assets/hero/hero.jpg" }
  heroVideo: null,
  summary:
    "ML and AI engineer with 3+ years shipping models into products: recommendation engines, computer vision for autonomous vehicles, and LLM agent systems. MS in Artificial Intelligence at NJIT.",
};

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/experience", label: "Experience" },
  { href: "/hackathons", label: "Hackathons" },
  { href: "/about", label: "About" },
];
