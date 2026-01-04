import type { Metadata } from "next";
import Hero from "../components/home/Hero";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Process from "../components/home/Process";
import CTA from "../components/home/CTA";


export const metadata: Metadata = {
  title: "Colourfull Homes | Complete Home Solutions",
  description:
    "Professional home painting, waterproofing, wall textures, furniture and renovation services.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <WhyChooseUs />
      <Process />
      <CTA />
    </main>
  );
}
