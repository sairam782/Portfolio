import "./globals.css";
import "./portfolio.css";
import StudioShell from "@/components/studio/StudioShell";

export const metadata = {
  title: { default: "Abhishek Sairam Gaduputi | ML & AI Engineer", template: "%s | Abhishek Sairam Gaduputi" },
  description: "Machine learning engineer building agentic systems, computer vision, and production AI. Explore Abhishek’s projects, seven hackathon builds, and experience.",
  openGraph: { title: "Abhishek Sairam Gaduputi | ML & AI Engineer", description: "From a curious idea to something that works. Selected projects in AI and machine learning.", type: "website" },
};
export default function RootLayout({ children }) {
  return <html lang="en"><body><StudioShell>{children}</StudioShell></body></html>;
}
