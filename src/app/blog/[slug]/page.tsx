import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { blogPosts, getPostBySlug } from "@/lib/blog-data";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Yazi Bulunamadi | Konsinyo" };
  return {
    title: `${post.title} | Konsinyo Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  // Simple markdown-like rendering
  const contentHtml = post.content
    .split("\n")
    .map((line) => {
      if (line.startsWith("### ")) return `<h3>${line.slice(4)}</h3>`;
      if (line.startsWith("## ")) return `<h2>${line.slice(3)}</h2>`;
      if (line.startsWith("- **"))
        return `<li><strong>${line.slice(4).replace("**", "</strong>")}</li>`;
      if (line.startsWith("- ")) return `<li>${line.slice(2)}</li>`;
      if (/^\d+\.\s\*\*/.test(line))
        return `<li><strong>${line.replace(/^\d+\.\s\*\*/, "").replace("**", "</strong>")}</li>`;
      if (line.trim() === "") return "<br/>";
      return `<p>${line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</p>`;
    })
    .join("\n");

  // Get related posts
  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Navbar />

      {/* Header */}
      <section className="relative bg-secondary pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
          >
            <ArrowLeft size={16} /> Blog&apos;a Don
          </Link>
          <span className="inline-block text-xs font-semibold text-primary-light bg-primary-light/10 px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-5 text-sm text-white/40">
            <span className="flex items-center gap-1.5">
              <User size={14} /> {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={14} /> {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={14} /> {post.readTime} okuma
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-16">
        <div
          className="prose max-w-3xl mx-auto px-6 text-text-body"
          dangerouslySetInnerHTML={{ __html: contentHtml }}
        />
      </article>

      {/* CTA */}
      <section className="py-12 bg-surface border-y border-border">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold text-text-primary mb-3">
            Konsinyo&apos;yu Deneyin
          </h3>
          <p className="text-text-body mb-6">
            14 gun ucretsiz. Komisyon yok, sozlesme yok.
          </p>
          <Link
            href="#"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-white font-semibold hover:bg-primary-hover transition-colors"
          >
            Ucretsiz Basla
          </Link>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="text-2xl font-bold text-text-primary mb-8">
              Ilgili Yazilar
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex gap-5 p-5 rounded-2xl border border-border hover:shadow-lg hover:-translate-y-0.5 transition-all bg-white"
                >
                  <div
                    className={`w-24 h-24 shrink-0 rounded-xl bg-linear-to-br ${r.coverColor} flex items-center justify-center`}
                  >
                    <span className="text-white/20 text-3xl font-extrabold">
                      K
                    </span>
                  </div>
                  <div>
                    <h4 className="font-bold text-text-primary group-hover:text-primary transition-colors mb-1 leading-snug">
                      {r.title}
                    </h4>
                    <p className="text-sm text-text-muted line-clamp-2">
                      {r.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
