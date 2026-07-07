"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 bg-linear-to-br from-primary-dark to-secondary text-center"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-3xl md:text-[42px] font-bold text-white tracking-tight leading-tight mb-4"
        >
          Konsinye ticarete baslamanin
          <br />
          tam zamani.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="text-lg text-white/70 mb-9"
        >
          14 gun ucretsiz dene. Komisyon yok, sozlesme yok.
        </motion.p>

        <motion.a
          href="#"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25 }}
          className="inline-flex items-center gap-2 px-10 py-4 rounded-[14px] bg-white text-primary font-semibold text-[17px] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.2)] transition-all"
        >
          Hemen Basla &mdash; Ucretsiz &rarr;
        </motion.a>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/15 transition-colors"
          >
            &#63743; App Store
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/15 transition-colors"
          >
            &#9654; Google Play
          </a>
        </div>
      </div>
    </section>
  );
}
