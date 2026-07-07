import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Problem from "@/components/sections/Problem";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import Compare from "@/components/sections/Compare";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
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
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
