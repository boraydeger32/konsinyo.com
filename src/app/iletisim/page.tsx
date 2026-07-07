import { Phone, Mail, MapPin } from "lucide-react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/PageHeader";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Iletisim | Konsinyo",
  description: "Konsinyo ekibi ile iletisime gecin.",
};

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Iletisim"
        subtitle="Sorulariniz mi var? Bize ulasin, size yardimci olalim."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-text-primary mb-3">
                Bize Ulasin
              </h2>
              <p className="text-text-body leading-relaxed mb-10">
                Konsinyo hakkinda merak ettiginiz her seyi sormaktan
                cekinmeyin. En kisa surede donus yapacagiz.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-border">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Phone className="text-primary" size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium mb-1">
                      Telefon
                    </div>
                    <div className="text-[15px] text-text-primary font-medium">
                      <a
                        href="tel:+905061458971"
                        className="hover:text-primary transition-colors"
                      >
                        0506 145 89 71
                      </a>
                    </div>
                    <div className="text-[15px] text-text-primary font-medium">
                      <a
                        href="tel:+905548866086"
                        className="hover:text-primary transition-colors"
                      >
                        0554 886 60 86
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-border">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <Mail className="text-primary" size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium mb-1">
                      E-posta
                    </div>
                    <div className="text-[15px] text-text-primary font-medium">
                      <a
                        href="mailto:info@konsinyo.com"
                        className="hover:text-primary transition-colors"
                      >
                        info@konsinyo.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-surface border border-border">
                  <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                    <MapPin className="text-primary" size={18} />
                  </div>
                  <div>
                    <div className="text-xs text-text-muted font-medium mb-1">
                      Konum
                    </div>
                    <div className="text-[15px] text-text-primary font-medium">
                      Turkiye
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
