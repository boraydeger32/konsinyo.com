"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Ozellikler", href: "#ozellikler" },
  { label: "Nasil Calisir", href: "#nasil-calisir" },
  { label: "Fiyatlar", href: "#fiyatlar" },
  { label: "Ekibimiz", href: "#ekibimiz" },
  { label: "Iletisim", href: "#iletisim" },
  { label: "SSS", href: "#sss" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-sm py-3"
            : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-extrabold tracking-tight">
            <span className="text-primary">K</span>
            <span className={scrolled ? "text-secondary" : "text-white"}>
              onsinyo
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-[15px] font-medium transition-colors ${
                    scrolled
                      ? "text-secondary-light hover:text-primary"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#"
              className={`px-5 py-2.5 rounded-xl text-[15px] font-medium border transition-all ${
                scrolled
                  ? "border-border text-secondary-light hover:bg-surface hover:text-text-primary"
                  : "border-white/20 text-white/90 hover:bg-white/10"
              }`}
            >
              Giris Yap
            </a>
            <a
              href="#"
              className="px-6 py-2.5 rounded-xl text-[15px] font-semibold bg-primary text-white hover:bg-primary-hover transition-all hover:scale-[1.02]"
            >
              Ucretsiz Dene &rarr;
            </a>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu
              className={scrolled ? "text-secondary" : "text-white"}
              size={24}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-secondary/95 backdrop-blur-xl flex flex-col items-center justify-center gap-6">
          <button
            className="absolute top-5 right-5 text-white"
            onClick={() => setMobileOpen(false)}
          >
            <X size={32} />
          </button>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white text-xl font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="mt-4 px-8 py-3 rounded-xl bg-primary text-white font-semibold"
          >
            Ucretsiz Dene &rarr;
          </a>
        </div>
      )}
    </>
  );
}
