import { Phone, Code, TrendingUp, Target, Users, Shield } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Hakkimizda | Konsinyo",
  description: "Konsinyo ekibini ve vizyonumuzu taniyin.",
};

const values = [
  {
    icon: Target,
    title: "Misyon",
    desc: "Kucuk ureticilerin urunlerini raflara ulastirmasini, saticilarin ise risksiz urun cesitliligi sunmasini saglayan dijital kopruyu kurmak.",
  },
  {
    icon: Users,
    title: "Seffaflik",
    desc: "Iki tarafin da ayni verileri gorebildigi, guvenin dijital olarak insa edildigi bir ticaret ortami yaratmak.",
  },
  {
    icon: Shield,
    title: "Guven",
    desc: "Komisyon yok, gizli ucret yok. Basit abonelik modeli ile herkesin erisebilecegi bir platform sunmak.",
  },
];

const team = [
  {
    name: "Bora Aydeger",
    role: "Yazilim Muhendisi",
    phone: "0506 145 89 71",
    phoneRaw: "+905061458971",
    initials: "BA",
    icon: Code,
    desc: "Platformun teknik altyapisini tasarlayan ve gelistiren kurucu ortak.",
  },
  {
    name: "Osman Aydeger",
    role: "Is Gelistirme & Pazarlama",
    phone: "0554 886 60 86",
    phoneRaw: "+905548866086",
    initials: "OA",
    icon: TrendingUp,
    desc: "Pazar arastirmasi, kullanici iliskileri ve buyume stratejilerinden sorumlu kurucu ortak.",
  },
];

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Hakkimizda"
        subtitle="Konsinye ticareti dijitallestirmek icin yola ciktik."
      />

      {/* Story */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-primary mb-6">
            Hikayemiz
          </h2>
          <div className="space-y-4 text-text-body leading-relaxed text-lg">
            <p>
              Konsinyo, Turkiye&apos;deki kucuk ureticilerin ve perakende dukkanlarinin
              en buyuk sorununu cozmek icin kuruldu: konsinye ticarette guven,
              takip ve seffaflik eksikligi.
            </p>
            <p>
              Kagit defterler, telefon aramalari ve belirsiz mutabakatlar
              yuzunden kaybedilen binlerce ticari iliskiyi gordugumuze,
              bunu dijital bir platformla cozmenin mumkun olduguna inandik.
            </p>
            <p>
              Bugon Konsinyo, ureticilerin urunlerini kolayca raflara
              ulastirdigi, saticilarin risksiz urun cesitliligi sundugu
              ve iki tarafin da ayni verileri seffafca gorebilegi bir
              platform olarak buyuyor.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-14">
            Degerlerimiz
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-2xl p-8 border border-border text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <v.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3">
                  {v.title}
                </h3>
                <p className="text-text-body leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-4">
            Ekibimiz
          </h2>
          <p className="text-lg text-text-body text-center mb-14 max-w-lg mx-auto">
            Konsinyo&apos;yu kuran ve buyuten ekiple tanisin.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-3xl p-8 border border-border hover:shadow-lg hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center gap-5 mb-5">
                  <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-primary-light flex items-center justify-center text-2xl font-extrabold text-white">
                    {m.initials}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-text-primary">
                      {m.name}
                    </h3>
                    <p className="text-primary font-medium text-sm flex items-center gap-1.5">
                      <m.icon size={14} />
                      {m.role}
                    </p>
                  </div>
                </div>
                <p className="text-text-body text-[15px] leading-relaxed mb-4">
                  {m.desc}
                </p>
                <a
                  href={`tel:${m.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-primary transition-colors"
                >
                  <Phone size={14} />
                  {m.phone}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            Beraber Calisalim
          </h3>
          <p className="text-text-body mb-6">
            Konsinyo hakkinda daha fazla bilgi almak veya is birligi yapmak icin
            bize ulasin.
          </p>
          <Link
            href="/iletisim"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors"
          >
            Iletisime Gecin
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
