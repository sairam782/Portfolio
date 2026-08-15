import "./portfolio.css";

export const metadata = {
  title: "Abhishek Sairam Gaduputi | Machine Learning Engineer",
  description:
    "Portfolio of Abhishek Sairam Gaduputi. Generative modeling, computer vision and multi agent systems, shipped into production.",
  keywords: [
    "Abhishek Sairam Gaduputi",
    "Machine Learning Engineer",
    "Applied Scientist",
    "GenAI Engineer",
    "Data Scientist",
  ],
  openGraph: {
    title: "Abhishek Sairam Gaduputi | Machine Learning Engineer",
    description: "Research grade models, shipped into production.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
