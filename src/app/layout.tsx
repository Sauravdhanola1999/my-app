import { Source_Sans_3 } from "next/font/google";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";

const sourceSans3 = Source_Sans_3({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-source-sans-3",
  display: "swap",
});

export const metadata = {
  title: "Colourfull Homes | Complete Home Solutions",
  description:
    "Professional home painting, waterproofing, wall textures, furniture & more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={sourceSans3.variable}>
      <body className="antialiased font-sans">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
