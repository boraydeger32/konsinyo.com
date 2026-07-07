import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Compare from "@/components/sections/Compare";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Team from "@/components/sections/Team";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Problem />
      <Features />
      <HowItWorks />
      <Compare />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Team />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}
