"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: 1,
    title: "Kayit Ol",
    desc: "Uretici veya satici olarak ucretsiz kayit ol",
  },
  {
    num: 2,
    title: "Urun Yukle / Kesfet",
    desc: "Uretici urun yukler, satici katalogda kesfeder",
  },
  {
    num: 3,
    title: "Siparis & Teslimat",
    desc: "Talep gonder, onayla, teslim al",
  },
  {
    num: 4,
    title: "Sat & Mutabakat",
    desc: "Barkodla sat, haftalik mutabakat yap",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nasil-calisir" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[42px] font-bold text-text-primary tracking-tight leading-tight mb-4">
            4 adimda basla
          </h2>
          <p className="text-lg text-text-body">
            Kurulumu dakikalar icerisinde tamamla, hemen ticarete basla.
          </p>
        </div>

        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Dashed line */}
          <div className="hidden lg:block absolute top-7 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-border" />

          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center relative"
            >
              <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5 relative z-10">
                {s.num}
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-text-body">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
