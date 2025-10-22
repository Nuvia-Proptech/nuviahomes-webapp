import React from "react";
import { BlogData } from "@/lib/dummyData/BlogData";
import AltHero from "@/components/shared/AltHero";
import SearchBlog from "@/components/blog/SearchBlog";
import CategoriesBlog from "@/components/blog/CategoriesBlog";
import TrendingBlog from "@/components/blog/blogArticles/TrendingBlog";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Quote } from "@/components/shared/Icons/Quote";

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
                  <p key={index} className="text-16">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="gradient-border my-4">
                <div className="gradient-border-inner">
                  <div className=" flex md:space-x-4 px-8 py-4 md:gap-6">
                    <span className="pt-2">
                      <Quote />
                    </span>
                    <div>
                    <p>
              Buying your first home is more than just a financial investment — it’s a deeply personal journey toward building a space that reflects your life, your goals, and your future; a place where you’ll feel secure, grow through new experiences, and create memories that last a lifetime.
                    </p>
                      <p className="mt-3 font-bold"> By {blog.author}</p>
                    </div>
                  </div>
                </div>
              </div>
               {blog.content.map((paragraph, index) => (
                  <p key={index} className="text-16">
                    {paragraph}
                  </p>
                ))}
              <div className="flex justify-between mt-8 md:mt-10">
                <div className="space-y-2 md:space-y-4">
                  <p className="text-xl font-semibold">Related Tags</p>
                  <div className="flex gap-2 align-middle">
                    {blog.tags.map((tag, index) => (
                      <button
                        key={index}
                        className="border  text-16 h-6 px-4 rounded-full"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2 md:space-y-4">
                  <p className="text-xl font-semibold">Social Share</p>
                  <div className="flex gap-2 md:gap-6">
                    <button className="text-16 hover:opacity-80 transition-opacity">
                      <FaFacebook className="w-10 h-10 text-[#1877F2]" />
                    </button>
                    <button className="text-16 hover:opacity-80 transition-opacity">
                      <FaTwitter className="w-10 h-10 text-[#1DA1F2]" />
                    </button>
                    <button className="text-16 hover:opacity-80 transition-opacity">
                      <FaLinkedin className="w-10 h-10 text-[#0A66C2]" />
                    </button>
                    <button className="text-16 hover:opacity-80 transition-opacity">
                      <FaInstagram className="w-10 h-10 text-[#E4405F]" />
                    </button>
                  </div>
                </div>
              </div>
              <hr className="my-10 border-gray-500" />
              <div className="flex justify-between">
                <div>
                  {blog.id > 1 && (
                    <>
                      <Link href={`/our-blog/${blog.id - 1}`} className="block">
                        <button className="text-16   cursor-pointer">
                          Prev Post
                        </button>
                        <p className="text-base font-semibold">
                          {BlogData.find((b) => b.id === blog.id - 1)?.title}
                        </p>
                      </Link>
                    </>
                  )}
                </div>
                <div className="text-right">
                  {blog.id < BlogData.length && (
                    <>
                      <Link
                        href={`/our-blog/${blog.id + 1}`}
                        className="block "
                      >
                        <button className="text-16 cursor-pointer">
                          Next Post
                        </button>
                        <p className="text-base font-semibold">
                          {BlogData.find((b) => b.id === blog.id + 1)?.title}
                        </p>
                      </Link>
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
