"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const plans = {
  uretici: [
    {
      name: "Baslangic",
      price: 199,
      desc: "Kucuk olcekli ureticiler icin",
      features: [
        "10 urun",
        "Temel raporlama",
        "Barkod olusturma",
        "E-posta destek",
      ],
      popular: false,
    },
    {
      name: "Buyume",
      price: 399,
      desc: "Buyuyen isletmeler icin",
      features: [
        "50 urun",
        "Gelismis raporlama",
        "Oncelikli destek",
        "Otomatik mutabakat",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: 699,
      desc: "Profesyonel isletmeler icin",
      features: [
        "Sinirsiz urun",
        "PDF rapor cikti",
        "Oncelikli listeleme",
        "7/24 destek",
      ],
      popular: false,
    },
  ],
  satici: [
    {
      name: "Baslangic",
      price: 149,
      desc: "Tek subeli dukkanlar icin",
      features: [
        "10 uretici baglantisi",
        "Barkodla satis",
        "Temel raporlama",
        "E-posta destek",
      ],
      popular: false,
    },
    {
      name: "Buyume",
      price: 349,
      desc: "Buyuyen magazalar icin",
      features: [
        "50 uretici baglantisi",
        "Gelismis raporlama",
        "Oncelikli destek",
        "Otomatik mutabakat",
      ],
      popular: true,
    },
    {
      name: "Pro",
      price: 599,
      desc: "Coklu subeler icin",
      features: [
        "Sinirsiz baglanti",
        "Coklu sube destegi",
        "PDF rapor cikti",
        "7/24 destek",
      ],
      popular: false,
    },
  ],
};

export default function PricingContent() {
  const [tab, setTab] = useState<"uretici" | "satici">("uretici");

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center mb-12">
          <div className="bg-surface p-1 rounded-xl flex gap-1">
            {(["uretici", "satici"] as const).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`px-7 py-2.5 rounded-lg text-[15px] font-medium transition-all ${
                  tab === t
                    ? "bg-white text-text-primary font-semibold shadow-sm"
                    : "text-text-body hover:text-text-primary"
                }`}
              >
                {t === "uretici" ? "Uretici" : "Satici"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans[tab].map((plan) => (
            <div
              key={plan.name}
              className={`bg-white rounded-3xl p-9 text-center border transition-all hover:-translate-y-1 hover:shadow-lg relative ${
                plan.popular
                  ? "border-2 border-primary md:scale-105"
                  : "border-border"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-accent text-text-primary px-5 py-1 rounded-full text-[13px] font-semibold">
                  Populer
                </div>
              )}
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {plan.name}
              </h3>
              <div className="text-[42px] font-extrabold text-text-primary mb-1">
                &#8378;{plan.price}
                <span className="text-base font-normal text-text-muted">
                  /ay
                </span>
              </div>
              <p className="text-sm text-text-muted mb-7">{plan.desc}</p>
              <ul className="text-left space-y-0 mb-7">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-center gap-3 py-2 text-sm text-text-body"
                  >
                    <Check className="text-primary shrink-0" size={16} />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`block w-full py-3.5 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? "bg-primary text-white hover:bg-primary-hover"
                    : "bg-surface text-text-primary hover:bg-border"
                }`}
              >
                Secim Yap
              </a>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-text-muted mt-10">
          Tum planlar 14 gun ucretsiz deneme ile baslar. Istediginiz zaman iptal edin.
        </p>
      </div>
    </section>
  );
}
