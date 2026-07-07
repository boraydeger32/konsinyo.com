"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-secondary overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-[float_6s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary-light/10 rounded-full blur-[128px] animate-[float_8s_ease-in-out_infinite_1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-dark/20 rounded-full blur-[200px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/[0.08] backdrop-blur-sm text-primary-light px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 bg-primary-light rounded-full animate-pulse" />
            Turkiye&apos;nin ilk konsinye ticaret platformu
          </motion.span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
            Konsinye ticareti
            <br />
            <span className="bg-linear-to-r from-primary-light to-primary bg-clip-text text-transparent">
              dijitallestir.
            </span>
          </h1>

          <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-lg">
            Uretici ve saticiyi bulustur, siparisi yonet, stoku takip et,
            mutabakati otomatiklestir.{" "}
            <span className="text-white/70 font-medium">
              Komisyon yok. Sozlesme yok.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-5">
            <Link
              href="#"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-primary text-white font-semibold text-base hover:bg-primary-hover transition-all hover:shadow-[0_0_50px_rgba(5,150,105,0.3)]"
            >
              Ucretsiz Dene &mdash; 14 Gun
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/#nasil-calisir"
              className="inline-flex items-center gap-3 px-7 py-4 rounded-2xl text-white/70 font-medium hover:text-white transition-all group"
            >
              <span className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/15 transition-colors">
                <Play size={14} className="ml-0.5" />
              </span>
              Nasil Calisir?
            </Link>
          </div>
          <p className="text-sm text-white/30">
            Kredi karti gerekmez &middot; 14 gun ucretsiz
          </p>
        </motion.div>

        {/* Phone Mockup - modernized */}
        <motion.div
          className="hidden lg:flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="relative">
            {/* Glow behind phone */}
            <div className="absolute inset-0 bg-primary/20 rounded-[60px] blur-[60px] scale-90" />

            <div className="relative w-[300px] h-[600px] bg-linear-to-b from-slate-800 to-slate-900 rounded-[50px] border border-white/10 p-3 shadow-2xl">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-secondary rounded-b-2xl z-10" />

              <div className="w-full h-full bg-linear-to-b from-[#0d1f17] to-secondary rounded-[40px] flex flex-col pt-12 px-5 text-white overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs text-white/40">Hosgeldin</p>
                    <p className="text-base font-bold">Konsinyo</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-xs font-bold text-primary-light">
                    BA
                  </div>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-2 gap-2.5 mb-4">
                  <div className="bg-white/[0.06] backdrop-blur rounded-2xl p-3.5 border border-white/[0.05]">
                    <p className="text-[10px] text-white/40 mb-1">Satis</p>
                    <p className="text-lg font-bold text-primary-light">
                      &#8378;12.4K
                    </p>
                  </div>
                  <div className="bg-white/[0.06] backdrop-blur rounded-2xl p-3.5 border border-white/[0.05]">
                    <p className="text-[10px] text-white/40 mb-1">Urunler</p>
                    <p className="text-lg font-bold">48</p>
                  </div>
                </div>

                {/* Activity */}
                <div className="bg-white/[0.06] backdrop-blur rounded-2xl p-4 border border-white/[0.05] mb-3">
                  <p className="text-[10px] text-white/40 mb-3">
                    Son Islemler
                  </p>
                  {[
                    { name: "Ege Baharat", amount: "+₺840", positive: true },
                    { name: "Anadolu Market", amount: "-₺320", positive: false },
                    { name: "Dogal Gida", amount: "+₺1,200", positive: true },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-2 border-b border-white/[0.04] last:border-0"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center text-[9px] font-bold">
                          {item.name[0]}
                        </div>
                        <span className="text-xs">{item.name}</span>
                      </div>
                      <span
                        className={`text-xs font-semibold ${
                          item.positive
                            ? "text-primary-light"
                            : "text-white/50"
                        }`}
                      >
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Bottom bar mockup */}
                <div className="mt-auto pb-4 flex justify-around">
                  {["Ana Sayfa", "Urunler", "Sat", "Cari"].map((label, i) => (
                    <div
                      key={label}
                      className={`flex flex-col items-center gap-1 ${
                        i === 0 ? "text-primary-light" : "text-white/30"
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md ${
                          i === 0 ? "bg-primary-light/20" : "bg-white/10"
                        }`}
                      />
                      <span className="text-[8px]">{label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
