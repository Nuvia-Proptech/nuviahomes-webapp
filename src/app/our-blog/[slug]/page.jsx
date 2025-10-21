import React from "react";
import { BlogData } from "@/lib/dummyData/BlogData";
import AltHero from "@/components/shared/AltHero";
import SearchBlog from "@/components/blog/SearchBlog";
import CategoriesBlog from "@/components/blog/CategoriesBlog";
import TrendingBlog from "@/components/blog/blogArticles/TrendingBlog";
import Image from "next/image";
import Link from "next/link";

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blog = BlogData.find((b) => b.id.toString() === slug);

  // Debugging log (remove in production)
// 
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <AltHero pageName={blog.title} />
      <div className="container px-4 md:px-10 mx-auto">
        <div className="flex gap-10 mb-12">
          <div className="w-3/4">
            <div className="relative h-[531px] rounded-xl overflow-hidden mb-6">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <div className="flex justify-between text-14 mb-4">
                <p>By {blog.author}</p>
                <p>{blog.comments} Comments</p>
              </div>
              <div className="space-y-4">
                <h1 className="text-3xl font-bold">{blog.title}</h1>
                {blog.content.map((paragraph, index) => (
                  <p key={index} className="text-16">{paragraph}</p>
                ))}
              </div>
              <div className="flex justify-between mt-8">
                <div>
                  <p className="text-16 font-semibold">Related Tags</p>
                  <div className="flex gap-2">
                    {blog.tags.map((tag, index) => (
                      <button
                        key={index}
                        className="border text-16 h-6 px-4 rounded-full"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-16 font-semibold">Social Share</p>
                  <div className="flex gap-2">
                    <button className="text-16">F</button>
                    <button className="text-16">T</button>
                    <button className="text-16">In</button>
                  </div>
                </div>
              </div>
              <hr className="my-10" />
              <div className="flex justify-between">
                <div>
                  {blog.id > 1 && (
                    <>
                      <Link href={`/blog/${blog.id - 1}`} className="block">
                        <button className="text-16 font-semibold">Prev Post</button>
                      </Link>
                      <p className="text-14">
                        {BlogData.find((b) => b.id === blog.id - 1)?.title}
                      </p>
                    </>
                  )}
                </div>
                <div className="text-right">
                  {blog.id < BlogData.length && (
                    <>
                      <Link href={`/blog/${blog.id + 1}`} className="block">
                        <button className="text-16 font-semibold">Next Post</button>
                      </Link>
                      <p className="text-14">
                        {BlogData.find((b) => b.id === blog.id + 1)?.title}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/4 flex flex-col gap-10 py-1">
            <SearchBlog />
            <CategoriesBlog />
            <TrendingBlog />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return BlogData.map((blog) => ({
    blogId: blog.id.toString(),
  }));
}