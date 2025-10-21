import Image from "next/image";
import React from "react";
import { BlogData } from "@/lib/dummyData/BlogData";
import Link from "next/link";

export default function TrendingBlog() {
  // Use first 3 blogs for trending
  const trendingBlogs = BlogData.slice(0, 3);

  // Debugging log (remove in production)
  console.log("TrendingBlog: Rendering trending blogs", { trendingBlogs });

  return (
    <div className="featured-gradient border border-gray-500 rounded-xl p-4">
      <p className="text-3xl mb-16">Trending</p>
      <div className="space-y-5">
        {trendingBlogs.map((blog) => (
          <Link href={`/our-blog/${blog.id}`} key={blog.id}>
            <div className="rounded-2xl h-[157px] relative">
              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-xl"
              />
              <div className="text-white absolute left-[5%] bottom-3">
                <p className="text-16">{blog.title}</p>
                <p className="text-14">{blog.date}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}