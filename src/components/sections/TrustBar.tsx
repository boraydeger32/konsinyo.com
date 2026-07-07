"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { target: 200, label: "Uretici" },
  { target: 300, label: "Magaza" },
  { target: 15000, label: "Urun" },
  { target: 50, label: "Sehir" },
];

function AnimatedNumber({ target, started }: { target: number; started: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const start = performance.now();

    function update(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(target * eased));
      if (progress < 1) requestAnimationFrame(update);
    }

    requestAnimationFrame(update);
  }, [started, target]);

  return <>{started ? `${value.toLocaleString("tr-TR")}+` : "0+"}</>;
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-surface py-10 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-sm font-medium text-text-muted mb-6">
          Konsinyo ile buyuyen isletmeler
        </p>
        <div className="flex justify-center gap-16 flex-wrap">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-primary">
                <AnimatedNumber target={s.target} started={started} />
              </div>
              <div className="text-sm text-text-muted mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
