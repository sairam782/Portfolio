import "./globals.css";
import "./portfolio.css";
import StudioShell from "@/components/studio/StudioShell";

export const metadata = {
  title: { default: "Abhishek Sairam Gaduputi | ML & AI Engineer", template: "%s | Abhishek Sairam Gaduputi" },
  description: "Meet Abhishek Sairam Gaduputi, a machine learning engineer and NJIT MS AI student. Explore his experience, research, projects, and seven hackathon builds.",
  openGraph: { title: "Abhishek Sairam Gaduputi | ML & AI Engineer", description: "Machine learning engineer, researcher, and NJIT MS AI student. Experience, applied AI projects, and hackathon builds.", type: "website" },
};
export default function RootLayout({ children }) {
  return <html lang="en"><body><StudioShell>{children}</StudioShell></body></html>;
}
