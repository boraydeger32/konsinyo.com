"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="iletisim" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[42px] font-bold text-text-primary tracking-tight leading-tight mb-4">
            Iletisim
          </h2>
          <p className="text-lg text-text-body">
            Sorulariniz mi var? Bize ulasin, size yardimci olalim.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-text-primary mb-4">
              Bize Ulasin
            </h3>
            <p className="text-base text-text-body leading-relaxed mb-8">
              Konsinyo hakkinda merak ettiginiz her seyi sormaktan cekinmeyin.
              En kisa surede donus yapacagiz.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-[13px] text-text-muted font-medium mb-0.5">
                    Telefon
                  </div>
                  <div className="text-[15px] text-text-primary font-medium">
                    <a href="tel:+905061458971" className="hover:text-primary transition-colors">
                      0506 145 89 71
                    </a>
                    {" / "}
                    <a href="tel:+905548866086" className="hover:text-primary transition-colors">
                      0554 886 60 86
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-[13px] text-text-muted font-medium mb-0.5">
                    E-posta
                  </div>
                  <div className="text-[15px] text-text-primary font-medium">
                    <a href="mailto:info@konsinyo.com" className="hover:text-primary transition-colors">
                      info@konsinyo.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={18} />
                </div>
                <div>
                  <div className="text-[13px] text-text-muted font-medium mb-0.5">
                    Konum
                  </div>
                  <div className="text-[15px] text-text-primary font-medium">
                    Turkiye
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="bg-surface rounded-3xl p-9 border border-border"
          >
            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Adiniz
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Adinizi girin"
                  className="w-full px-4 py-3 border border-border rounded-xl text-[15px] text-text-primary bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  E-posta
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="ornek@email.com"
                  className="w-full px-4 py-3 border border-border rounded-xl text-[15px] text-text-primary bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                />
              </div>

              <div className="mb-5">
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Konu
                </label>
                <select
                  name="subject"
                  className="w-full px-4 py-3 border border-border rounded-xl text-[15px] text-text-primary bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
                >
                  <option>Genel Bilgi</option>
                  <option>Uretici Olarak Baslamak Istiyorum</option>
                  <option>Satici Olarak Baslamak Istiyorum</option>
                  <option>Teknik Destek</option>
                  <option>Is Birligi</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-text-primary mb-1.5">
                  Mesajiniz
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Mesajinizi yazin..."
                  className="w-full px-4 py-3 border border-border rounded-xl text-[15px] text-text-primary bg-white focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-y"
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors disabled:opacity-60"
              >
                {status === "sending" ? "Gonderiliyor..." : "Mesaj Gonder \u2192"}
              </button>

              {status === "sent" && (
                <p className="mt-3 text-sm text-green-600 text-center">
                  Mesajiniz basariyla gonderildi!
                </p>
              )}
              {status === "error" && (
                <p className="mt-3 text-sm text-red-500 text-center">
                  Bir hata olustu, lutfen tekrar deneyin.
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
