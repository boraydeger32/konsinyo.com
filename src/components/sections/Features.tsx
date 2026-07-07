"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Package,
  ClipboardList,
  ScanBarcode,
  BarChart3,
  Wallet,
  CalendarCheck,
} from "lucide-react";

const features = [
  {
    icon: Package,
    title: "Urun Yonetimi",
    desc: "Urun yukle, barkod otomatik olusur. Gorsel, fiyat ve kategori bilgisiyle birlikte.",
  },
  {
    icon: ClipboardList,
    title: "Siparis Akisi",
    desc: "Talep gonder, onayla, teslim al, stoga ekle. Tum surec otomatik ilerler.",
  },
  {
    icon: ScanBarcode,
    title: "Barkodla Sat",
    desc: "SAT butonuna bas, barkod okut, bitti. Satis aninda kayda girer.",
  },
  {
    icon: BarChart3,
    title: "Stok Takibi",
    desc: "Hangi urun nerede, kac adet, ne zaman gonderildi? Her sey anlik gorunur.",
  },
  {
    icon: Wallet,
    title: "Cari Hesap",
    desc: "Borc ve alacak anlik guncellenir. Iki taraf da ayni rakamlari gorur.",
  },
  {
    icon: CalendarCheck,
    title: "Haftalik Mutabakat",
    desc: "Cuma gunu otomatik hatirlatma ve odeme bildirimi. Guven artar, anlasmazlik azalir.",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ozellikler" className="py-24 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[42px] font-bold text-text-primary tracking-tight leading-tight mb-4">
            Her sey tek platformda
          </h2>
          <p className="text-lg text-text-body">
            Uretimden rafa, raftan kasaya kadar tum konsinye ticaret surecini
            yonet.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-white rounded-2xl p-8 border border-border hover:-translate-y-1 hover:shadow-lg transition-all cursor-default"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-[14px] flex items-center justify-center mb-5">
                <f.icon className="text-primary" size={22} />
              </div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {f.title}
              </h3>
              <p className="text-[15px] text-text-body leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
