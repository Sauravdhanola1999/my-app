import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

export default function BlogsPage() {
  const files = fs.readdirSync(BLOG_DIR);

  const blogs = files.map((file) => {
    const content = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data } = matter(content);
    return { slug: file.replace(".md", ""), ...data };
  });

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-4xl font-bold mb-12">Blogs</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map((blog: any) => (
          <Link
            key={blog.slug}
            href={`/blogs/${blog.slug}`}
            className="border rounded-lg p-6 hover:shadow-lg"
          >
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-600 mt-2">{blog.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
