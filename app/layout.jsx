import "./globals.css";
<<<<<<< Updated upstream
import AmbientBackground from "@/components/AmbientBackground";
=======
>>>>>>> Stashed changes
import Header from "@/components/Header";

<<<<<<< Updated upstream
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
=======
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Abhishek Sairam Gaduputi · AI Engineer & Researcher",
  description:
    "Portfolio of Abhishek Sairam Gaduputi. Graduate researcher building generative models, computer vision, and multi-agent AI systems.",
>>>>>>> Stashed changes
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<<<<<<< Updated upstream
      <body>
        <AmbientBackground />
=======
      <body
        className={`${jetbrainsMono.variable} noise relative min-h-screen bg-bg text-white/85`}
      >
        {/* Ambient background layers */}
        <div className="pointer-events-none fixed inset-0 -z-10 dot-grid opacity-30" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-glow-radial" />
        {/* Vignette */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.6)_100%)]" />

>>>>>>> Stashed changes
        <Header />
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
