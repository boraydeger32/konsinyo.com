"use client";

import { motion } from "framer-motion";
import { Package, Store, FileText } from "lucide-react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: Package,
    title: "Uretici",
    desc: "Urunler depoda kaliyor, raf bulamiyor. Yeni satis kanali olusturamiyorsun.",
  },
  {
    icon: Store,
    title: "Satici",
    desc: "Tanimadigi ureticiye guvenemiyor, risk yuksek. Stok maliyeti bilinmiyor.",
  },
  {
    icon: FileText,
    title: "Her Iki Taraf",
    desc: "Stok ve borc takibi kagit defterde. Mutabakat yapilmiyor, guven kaybediliyor.",
  },
];

export default function Problem() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[42px] font-bold text-text-primary tracking-tight leading-tight mb-4">
            Konsinye ticaretin en buyuk sorunu
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center"
            >
              <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <p.icon className="text-red-500" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                {p.title}
              </h3>
              <p className="text-[15px] text-text-body">{p.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white rounded-full text-2xl animate-[bounce-arrow_2s_ease-in-out_infinite]">
            &darr;
          </div>
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark mb-2">
            Konsinyo ile cozum
          </h2>
          <p className="text-lg text-text-body">
            Tek platform, iki taraf, tam seffaflik.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
