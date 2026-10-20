import ProjectGallery from "@/components/ProjectGallery";
import { ContactSection } from "@/components/PortfolioSections";
export const metadata = { title: "Selected Work" };
export default function Works() {
  return <><section className="section shell work-page"><p className="eyebrow">Research meets real-world engineering</p><h1>Selected <em>work.</em></h1><p className="page-intro">Agentic systems, applied computer vision, and generative models. Explore the problem, approach, and outcome behind each project.</p><ProjectGallery /></section><ContactSection /></>;
}
