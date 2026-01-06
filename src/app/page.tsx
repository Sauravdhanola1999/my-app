import type { Metadata } from "next";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import ServicesPreview from "../components/home/ServicesPreview";
import WhyChooseUs from "../components/home/WhyChooseUs";
import Process from "../components/home/Process";
import CTA from "../components/home/CTA";
import ServiceBlocks from "../components/home/ServiceBlocks";
import FAQ from "../components/home/FAQ";
import Testimonials from "../components/home/Testimonials";
import BeforeAfterGallery from "../components/home/BeforeAfterGallery";


export const metadata: Metadata = {
  title: "Colourfull Homes | Complete Home Solutions",
  description:
    "Professional home painting, waterproofing, wall textures, furniture and renovation services.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <ServicesPreview />
      <ServiceBlocks />
      <WhyChooseUs />
      <Testimonials />
      <BeforeAfterGallery />
      <Process />
      <FAQ />
      <CTA />
    </main>
  );
}
