import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

type BlogPost = {
  slug: string;
  title?: string;
  description?: string;
  [key: string]: unknown;
};

export default function BlogsPage() {
  const files = fs.readdirSync(BLOG_DIR);

  const blogs: BlogPost[] = files.map((file) => {
    const content = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data } = matter(content);
    return { slug: file.replace(".md", ""), ...data } as BlogPost;
  });

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 md:py-20">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-brand-dark">Blogs</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-[var(--shadow-card)] hover:border-brand-orange/30 transition-all"
          >
            <h2 className="text-xl font-semibold mb-3 text-brand-dark">{blog.title}</h2>
            <p className="text-gray-600 leading-relaxed">{blog.description}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
