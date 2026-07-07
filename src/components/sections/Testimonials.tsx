"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Defter tutmaktan kurtulduk. Artik her sey telefonda, anlik gorunuyor.",
    name: "Ahmet Y.",
    role: "Ege Baharat, Izmir (Uretici)",
    initials: "AY",
  },
  {
    quote:
      "Barkodla satis harika. Musteri bekletmiyoruz, satis aninda kayda giriyor.",
    name: "Fatma K.",
    role: "Anadolu Market, Ankara (Satici)",
    initials: "FK",
  },
  {
    quote:
      "Haftalik mutabakat sayesinde artik hic tartisma olmuyor. Iki taraf da ayni rakami goruyor.",
    name: "Mehmet E.",
    role: "Dogal Atistirmalik, Bursa (Uretici)",
    initials: "ME",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[42px] font-bold text-text-primary tracking-tight leading-tight">
            Kullanicilarimiz ne diyor?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-border"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star
                    key={j}
                    className="text-accent fill-accent"
                    size={16}
                  />
                ))}
              </div>
              <blockquote className="text-[15px] text-text-body leading-relaxed mb-5 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-text-primary">
                    {t.name}
                  </div>
                  <div className="text-[13px] text-text-muted">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
