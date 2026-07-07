"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Phone } from "lucide-react";

const members = [
  {
    name: "Bora Aydeger",
    role: "Yazilim Muhendisi",
    phone: "0506 145 89 71",
    phoneRaw: "+905061458971",
    initials: "BA",
  },
  {
    name: "Osman Aydeger",
    role: "Is Gelistirme & Pazarlama",
    phone: "0554 886 60 86",
    phoneRaw: "+905548866086",
    initials: "OA",
  },
];

export default function Team() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ekibimiz" className="py-24 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[42px] font-bold text-text-primary tracking-tight leading-tight mb-4">
            Ekibimiz
          </h2>
          <p className="text-lg text-text-body">
            Konsinyo&apos;yu kuran ve buyuten ekiple tanisin.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="bg-white rounded-3xl p-10 text-center border border-border hover:-translate-y-1 hover:shadow-lg transition-all"
            >
              <div className="w-20 h-20 rounded-full bg-linear-to-br from-primary to-primary-light flex items-center justify-center mx-auto mb-5 text-3xl font-extrabold text-white">
                {m.initials}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-1">
                {m.name}
              </h3>
              <p className="text-[15px] text-primary font-medium mb-3">
                {m.role}
              </p>
              <a
                href={`tel:${m.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
              >
                <Phone size={14} />
                {m.phone}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
