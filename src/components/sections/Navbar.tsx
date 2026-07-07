"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Ozellikler", href: "/#ozellikler" },
  { label: "Nasil Calisir", href: "/#nasil-calisir" },
  { label: "Fiyatlar", href: "/fiyatlar" },
  { label: "Blog", href: "/blog" },
  { label: "Hakkimizda", href: "/hakkimizda" },
  { label: "Iletisim", href: "/iletisim" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showTransparent = isHome && !scrolled;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          showTransparent
            ? "py-5"
            : "bg-white/80 backdrop-blur-2xl shadow-[0_1px_3px_rgba(0,0,0,0.04)] py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="text-2xl font-extrabold tracking-tight">
            <span className="text-primary">K</span>
            <span className={showTransparent ? "text-white" : "text-secondary"}>
              onsinyo
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 rounded-lg text-[14px] font-medium transition-all ${
                    showTransparent
                      ? "text-white/80 hover:text-white hover:bg-white/10"
                      : "text-secondary-light hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="#"
              className={`px-5 py-2.5 rounded-xl text-[14px] font-medium transition-all ${
                showTransparent
                  ? "text-white/90 hover:bg-white/10"
                  : "text-secondary-light hover:text-primary"
              }`}
            >
              Giris Yap
            </Link>
            <Link
              href="#"
              className="px-6 py-2.5 rounded-xl text-[14px] font-semibold bg-primary text-white hover:bg-primary-hover transition-all hover:shadow-lg hover:shadow-primary/20"
            >
              Ucretsiz Dene
            </Link>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen(true)}
          >
            <Menu
              className={showTransparent ? "text-white" : "text-secondary"}
              size={24}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[999] bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <Link href="/" className="text-2xl font-extrabold tracking-tight">
              <span className="text-primary">K</span>
              <span className="text-secondary">onsinyo</span>
            </Link>
            <button onClick={() => setMobileOpen(false)}>
              <X className="text-secondary" size={24} />
            </button>
          </div>
          <div className="flex-1 flex flex-col px-6 pt-8 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-lg font-medium text-secondary-light hover:text-primary py-3 border-b border-border/50 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-8 flex flex-col gap-3">
              <Link
                href="#"
                className="w-full py-3.5 rounded-xl text-center bg-primary text-white font-semibold"
              >
                Ucretsiz Dene
              </Link>
              <Link
                href="#"
                className="w-full py-3.5 rounded-xl text-center border border-border text-secondary-light font-medium"
              >
                Giris Yap
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
