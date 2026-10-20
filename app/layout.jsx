import "./globals.css";
import "./portfolio.css";
import PortfolioNav from "@/components/PortfolioNav";
import { Footer } from "@/components/PortfolioSections";

export const metadata = {
  title: { default: "Abhishek Sairam Gaduputi | ML & AI Engineer", template: "%s | Abhishek Sairam Gaduputi" },
  description: "Machine learning engineer with 3+ years building production AI. Explore agentic systems, computer vision, and generative models. NJIT MS AI, available May 2027.",
  keywords: ["Abhishek Sairam Gaduputi", "Machine Learning Engineer", "AI Engineer", "Computer Vision", "Agentic AI", "NJIT"],
  openGraph: { title: "Abhishek Sairam Gaduputi | ML & AI Engineer", description: "Intelligence, built for the real world. Production AI, agentic systems, and computer vision.", type: "website" },
};

export default function RootLayout({ children }) {
  return <html lang="en"><body><a className="skip-link" href="#main">Skip to content</a><PortfolioNav /><main id="main">{children}</main><Footer /></body></html>;
}
