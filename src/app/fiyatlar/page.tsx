import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/PageHeader";
import PricingContent from "./PricingContent";
import FAQ from "@/components/sections/FAQ";

export const metadata = {
  title: "Fiyatlar | Konsinyo",
  description: "Konsinyo abonelik planlari. 14 gun ucretsiz dene.",
};

export default function FiyatlarPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Fiyatlar"
        subtitle="Basit, seffaf fiyatlandirma. 14 gun ucretsiz dene, kredi karti gerekmez."
      />
      <PricingContent />
      <FAQ />
      <Footer />
    </>
  );
}
