"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    console.log("Iletisim formu:", data);

    // TODO: Backend eklendiginde buraya API call eklenecek
    setTimeout(() => {
      setStatus("sent");
      (e.target as HTMLFormElement).reset();
    }, 500);
  }

  return (
    <div className="bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm">
      <h3 className="text-xl font-bold text-text-primary mb-6">
        Mesaj Gonderin
      </h3>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">
              Adiniz
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="Adinizi girin"
              className="w-full px-4 py-3 border border-border rounded-xl text-[15px] text-text-primary bg-surface/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-text-muted"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1.5">
              E-posta
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="ornek@email.com"
              className="w-full px-4 py-3 border border-border rounded-xl text-[15px] text-text-primary bg-surface/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all placeholder:text-text-muted"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            Konu
          </label>
          <select
            name="subject"
            className="w-full px-4 py-3 border border-border rounded-xl text-[15px] text-text-primary bg-surface/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
          >
            <option>Genel Bilgi</option>
            <option>Uretici Olarak Baslamak Istiyorum</option>
            <option>Satici Olarak Baslamak Istiyorum</option>
            <option>Teknik Destek</option>
            <option>Is Birligi</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1.5">
            Mesajiniz
          </label>
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Mesajinizi yazin..."
            className="w-full px-4 py-3 border border-border rounded-xl text-[15px] text-text-primary bg-surface/50 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-y placeholder:text-text-muted"
          />
        </div>

        <button
          type="submit"
          disabled={status === "sending"}
          className="w-full py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-all disabled:opacity-60 flex items-center justify-center gap-2"
        >
          <Send size={16} />
          {status === "sending" ? "Gonderiliyor..." : "Mesaj Gonder"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-green-600 text-center bg-green-50 py-3 rounded-xl">
            Mesajiniz basariyla gonderildi! En kisa surede donus yapacagiz.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500 text-center bg-red-50 py-3 rounded-xl">
            Bir hata olustu, lutfen tekrar deneyin.
          </p>
        )}
      </form>
    </div>
  );
}
