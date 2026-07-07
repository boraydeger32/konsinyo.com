"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-linear-to-br from-secondary to-primary-dark pt-40 pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-1/2 -right-1/5 w-[600px] h-[600px] bg-radial-[at_center] from-primary/15 to-transparent rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block bg-primary/15 border border-primary-light/30 text-primary-light px-4 py-2 rounded-full text-sm font-medium mb-6 animate-[pulse-glow_2s_ease-in-out_infinite]">
            Turkiye&apos;nin ilk konsinye ticaret platformu
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold text-white leading-[1.1] tracking-tight mb-6">
            Konsinye ticareti
            <br />
            <span className="text-primary-light">dijitallestir.</span>
          </h1>

          <p className="text-lg text-white/70 leading-relaxed mb-9 max-w-lg">
            Uretici ve saticiyi bulustur, siparisi yonet, stoku takip et,
            mutabakati otomatiklestir. Komisyon yok. Sozlesme yok.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-[14px] bg-linear-to-br from-primary to-primary-light text-white font-semibold text-base shadow-[0_0_40px_rgba(5,150,105,0.3)] hover:translate-y-[-2px] hover:shadow-[0_0_60px_rgba(5,150,105,0.4)] transition-all"
            >
              Ucretsiz Dene &mdash; 14 Gun &rarr;
            </a>
            <a
              href="#nasil-calisir"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-[14px] bg-white/10 border border-white/20 text-white font-medium hover:bg-white/15 transition-all"
            >
              Nasil Calisir? &#9654;
            </a>
          </div>
          <p className="text-sm text-white/50">Kredi karti gerekmez</p>
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-[280px] h-[560px] bg-linear-to-br from-slate-800 to-secondary rounded-[40px] border-[3px] border-white/10 p-3 shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
            <div className="w-full h-full bg-linear-to-b from-primary via-primary-dark/80 to-secondary rounded-[30px] flex flex-col items-center pt-10 px-5 text-white overflow-hidden">
              <p className="text-lg font-extrabold mb-5">Konsinyo</p>
              {[
                { label: "Toplam Satis", value: "\u20BA12,450", width: "72%" },
                { label: "Aktif Urunler", value: "48", width: "85%" },
                { label: "Bekleyen Siparisler", value: "7", width: "35%" },
              ].map((card) => (
                <div
                  key={card.label}
                  className="w-full bg-white/10 backdrop-blur rounded-2xl p-4 mb-3"
                >
                  <p className="text-xs text-white/60 mb-1">{card.label}</p>
                  <p className="text-xl font-bold">{card.value}</p>
                  <div className="w-full h-2 bg-white/10 rounded-full mt-2">
                    <div
                      className="h-full bg-primary-light rounded-full"
                      style={{ width: card.width }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
