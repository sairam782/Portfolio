import "./globals.css";
import AmbientBackground from "@/components/AmbientBackground";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

export const metadata = {
  title: "Abhishek Sairam Gaduputi | AI & Machine Learning Engineer",
  description:
    "AI and machine learning portfolio of Abhishek Sairam Gaduputi, featuring applied AI systems, recommendation engines, analytics, and intelligent product experiments.",
  keywords: [
    "Abhishek Sairam Gaduputi",
    "AI Engineer",
    "Machine Learning Engineer",
    "Data Science",
    "Generative AI",
    "Portfolio",
  ],
  openGraph: {
    title: "Abhishek Sairam Gaduputi | AI & Machine Learning Engineer",
    description:
      "Applied AI, machine learning, analytics, and intelligent systems portfolio.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AmbientBackground />
        <Header />
        <div> 
          <StairTransition />
          <PageTransition>
            {children}
          </PageTransition>
        </div>
      </body>
    </html>
  );
}
