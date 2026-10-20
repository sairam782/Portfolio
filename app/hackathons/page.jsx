import Hackathons from "@/components/Hackathons";
import { ContactSection } from "@/components/PortfolioSections";
export const metadata = { title: "Hackathons", description: "Hackathon projects by Abhishek Sairam Gaduputi: Smurf, Canopy, CrisisOps, Trinetra, and Claude Gym Buddy." };
export default function HackathonsPage() {
  return <><div className="shell page-heading"><p className="eyebrow">The build log</p><h1>Hackathons<span className="accent">.</span></h1></div><Hackathons /><ContactSection /></>;
}
