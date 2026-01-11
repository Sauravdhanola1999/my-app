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
  title: "Colourfull Homes – Complete Interior & Painting Experts",
  description:
    "Professional home painting, waterproofing, wall textures, furniture & interiors. End-to-end home solutions with premium quality and care",
  alternates: {
    canonical: "https://colourfullhomes.in/",
  },
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
