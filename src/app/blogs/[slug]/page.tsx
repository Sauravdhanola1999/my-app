import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Home, ArrowLeft, Calendar } from "lucide-react";
import type { Metadata } from "next";
import { remark } from "remark";
import html from "remark-html";

const BLOG_DIR = path.join(process.cwd(), "content/blogs");

type Props = {
  params: Promise<{ slug: string }>;
};

async function getBlogPost(slug: string) {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  // Convert markdown to HTML
  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    date: data.date as string,
    content: contentHtml,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "Blog Post Not Found | Colourfull Homes",
    };
  }

  return {
    title: `${post.title} | Colourfull Homes Blog`,
    description: post.description,
  };
}

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return (
    <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
      {/* Breadcrumbs */}
      <nav className="mb-8" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li>
            <Link href="/" className="hover:text-brand-orange transition-colors flex items-center gap-1">
              <Home className="w-4 h-4" />
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/blogs" className="hover:text-brand-orange transition-colors">
              Blogs
            </Link>
          </li>
          <li>/</li>
          <li className="text-brand-orange font-medium">{post.title}</li>
        </ol>
      </nav>

      {/* Back Button */}
      <Link
        href="/blogs"
        className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-orange transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Blogs
      </Link>

      {/* Blog Post */}
      <article className="bg-white border border-gray-200 rounded-2xl p-8 md:p-10">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-brand-dark">
            {post.title}
          </h1>
          {post.description && (
            <p className="text-lg text-gray-600 mb-4">{post.description}</p>
          )}
          {formattedDate && (
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Calendar className="w-4 h-4" />
              <time dateTime={post.date}>{formattedDate}</time>
            </div>
          )}
        </header>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:text-brand-dark prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-4
            prose-strong:text-brand-dark prose-strong:font-semibold
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-4
            prose-ol:list-decimal prose-ol:pl-6 prose-ol:mb-4
            prose-li:text-gray-700 prose-li:mb-2
            prose-a:text-brand-blue prose-a:no-underline hover:prose-a:underline
            prose-code:text-brand-orange prose-code:bg-brand-light prose-code:px-1 prose-code:py-0.5 prose-code:rounded
            prose-blockquote:border-l-4 prose-blockquote:border-brand-orange prose-blockquote:pl-4 prose-blockquote:italic
          "
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* CTA Section */}
      <div className="mt-12 bg-brand-light rounded-2xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4 text-brand-dark">
          Need Professional Home Solutions?
        </h2>
        <p className="text-gray-600 mb-6">
          Contact Colourfull Homes for expert painting, waterproofing, and complete home renovation services.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-brand-orange text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-all shadow-[var(--shadow-button)]"
        >
          Get Free Consultation
        </Link>
      </div>
    </main>
  );
}
