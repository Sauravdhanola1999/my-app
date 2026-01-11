import { Inter, Poppins } from "next/font/google";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import "./globals.css";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://colourfullhomes.in"),
  title: "Colourfull Homes | Complete Home Solutions",
  description:
    "Professional home painting, waterproofing, wall textures, furniture & more.",
  verification: {
    google: "QtMj-quGh54Qs0NZXMcI489A_i6m0mmruxEJuFGGS7U",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  alternates: {
    canonical: "/",
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
