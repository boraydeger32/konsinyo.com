"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Konsinyo nedir?",
    a: "Konsinyo, kucuk ureticiler ile perakende dukkanlari bulusturan bir dijital konsinye ticaret platformudur. Urun yukleme, siparis yonetimi, barkodla satis ve haftalik mutabakat gibi tum surecleri tek bir uygulamadan yonetebilirsiniz.",
  },
  {
    q: "Komisyon aliyor musunuz?",
    a: "Hayir, Konsinyo hicbir satisinizdan komisyon almaz. Sadece aylik abonelik ucreti ile calisir. Kazanciniz tamamen sizin.",
  },
  {
    q: "Ucretsiz deneme nasil baslar?",
    a: "Kayit olduktan sonra 14 gunluk ucretsiz deneme otomatik baslar. Kredi karti bilgisi gerekmez, deneme suresi bittiginde abonelik secebilirsiniz.",
  },
  {
    q: "Hangi cihazlarda calisir?",
    a: "Konsinyo, iOS ve Android uyumlu mobil uygulama olarak calisir. Ilerleyen donemde web paneli de eklenecektir.",
  },
  {
    q: "Verilerim guvenli mi?",
    a: "Evet, tum verileriniz sifrelenmis sunucularda guvenle saklanir. KVKK uyumlu altyapi ile calisiyor ve verilerinizi ucuncu taraflarla paylasmiyoruz.",
  },
  {
    q: "Iptal etmek istersem ne olur?",
    a: "Aboneliginizi istediginiz zaman iptal edebilirsiniz. Sozlesme yoktur, ceza yoktur. Aktif donem sonuna kadar kullanmaya devam edersiniz.",
  },
  {
    q: "Destek nasil alabilirim?",
    a: "Uygulama ici canli destek, e-posta ve telefon ile bize ulasabilirsiniz. Buyume ve Pro planlarda oncelikli destek hakkiniz vardir.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="sss" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-xl mx-auto mb-14">
          <h2 className="text-3xl md:text-[42px] font-bold text-text-primary tracking-tight leading-tight">
            Sik Sorulan Sorular
          </h2>
        </div>

        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-border">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full py-5 flex justify-between items-center text-left"
              >
                <span className="text-base font-semibold text-text-primary">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`text-text-muted shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                  size={20}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  open === i ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-[15px] text-text-body leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
