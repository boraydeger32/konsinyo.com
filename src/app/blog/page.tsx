import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { blogPosts } from "@/lib/blog-data";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import PageHeader from "@/components/PageHeader";

export const metadata = {
  title: "Blog | Konsinyo",
  description: "Konsinye ticaret, stok yonetimi ve dijitallesme hakkinda yazilar.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        title="Blog"
        subtitle="Konsinye ticaret, stok yonetimi ve dijitallesme hakkinda yazilar."
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured post */}
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="group block mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 bg-surface rounded-3xl border border-border overflow-hidden hover:shadow-xl transition-all">
              <div
                className={`aspect-video md:aspect-auto bg-linear-to-br ${blogPosts[0].coverColor} flex items-center justify-center min-h-[280px]`}
              >
                <span className="text-white/20 text-8xl font-extrabold">K</span>
              </div>
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full w-fit mb-4">
                  {blogPosts[0].category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-3 group-hover:text-primary transition-colors">
                  {blogPosts[0].title}
                </h2>
                <p className="text-text-body mb-5 leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-text-muted">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} /> {blogPosts[0].date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} /> {blogPosts[0].readTime}
                  </span>
                </div>
              </div>
            </div>
          </Link>

          {/* Posts grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-2xl border border-border overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all">
                  <div
                    className={`aspect-video bg-linear-to-br ${post.coverColor} flex items-center justify-center`}
                  >
                    <span className="text-white/20 text-6xl font-extrabold">
                      K
                    </span>
                  </div>
                  <div className="p-6">
                    <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-text-primary mt-3 mb-2 group-hover:text-primary transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-sm text-text-body mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-text-muted">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} /> {post.date}
                      </span>
                      <span className="flex items-center gap-1 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Oku <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
