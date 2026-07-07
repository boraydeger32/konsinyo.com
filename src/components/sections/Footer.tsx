import Link from "next/link";

const footerLinks = {
  Urun: [
    { label: "Ozellikler", href: "/#ozellikler" },
    { label: "Fiyatlar", href: "/fiyatlar" },
    { label: "Nasil Calisir", href: "/#nasil-calisir" },
  ],
  Sirket: [
    { label: "Hakkimizda", href: "/hakkimizda" },
    { label: "Blog", href: "/blog" },
  ],
  Destek: [
    { label: "Iletisim", href: "/iletisim" },
    { label: "SSS", href: "/#sss" },
  ],
  Yasal: [
    { label: "KVKK", href: "#" },
    { label: "Kullanim Sartlari", href: "#" },
    { label: "Gizlilik", href: "#" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              <span className="text-primary">K</span>
              <span className="text-white">onsinyo</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mt-3 max-w-[260px]">
              Kucuk ureticiler ile perakende dukkanlari bulusturan konsinye
              ticaret platformu.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/[0.06] pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[13px] text-slate-500">
            &copy; 2026 Konsinyo. Tum haklari saklidir.
          </p>
          <div className="flex gap-5">
            {["Twitter", "Instagram", "LinkedIn"].map((s) => (
              <a
                key={s}
                href="#"
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
