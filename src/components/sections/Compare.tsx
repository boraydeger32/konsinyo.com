"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const producer = [
  "Urun yukle ve yonet",
  "Magaza bul ve esles",
  "Siparis yonet",
  "Alacak takibi",
  "Ciro raporu",
];

const seller = [
  "Katalog kesfet",
  "Barkodla sat",
  "Stok takibi",
  "Borc takibi",
  "Gun sonu sayim",
];

export default function Compare() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[42px] font-bold text-text-primary tracking-tight leading-tight mb-4">
            Uretici misin? Satici misin?
          </h2>
          <p className="text-lg text-text-body">
            Her iki taraf icin ozel tasarlanmis cozumler.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-10 border-2 border-primary-light hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary">
                Uretici
              </span>
              Uretici Paneli
            </h3>
            <ul className="space-y-0 mb-7">
              {producer.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 py-3 text-[15px] text-text-body border-b border-border last:border-0"
                >
                  <Check className="text-primary shrink-0" size={16} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="block w-full text-center py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors"
            >
              Uretici Olarak Basla &rarr;
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-3xl p-10 border-2 border-accent hover:-translate-y-1 hover:shadow-lg transition-all"
          >
            <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent-dark">
                Satici
              </span>
              Satici Paneli
            </h3>
            <ul className="space-y-0 mb-7">
              {seller.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 py-3 text-[15px] text-text-body border-b border-border last:border-0"
                >
                  <Check className="text-primary shrink-0" size={16} />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="block w-full text-center py-3.5 rounded-xl bg-accent text-text-primary font-semibold hover:bg-accent-dark transition-colors"
            >
              Satici Olarak Basla &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
