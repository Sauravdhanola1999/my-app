import { Inter, Poppins } from "next/font/google";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Colourfull Homes | Complete Home Solutions",
  description:
    "Professional home painting, waterproofing, wall textures, furniture & more.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="antialiased font-body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
