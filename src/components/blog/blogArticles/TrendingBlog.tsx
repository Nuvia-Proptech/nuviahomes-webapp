import Image from "next/image";
import React from "react";
import { BlogData } from "@/lib/dummyData/BlogData";
import Link from "next/link";

export default function TrendingBlog() {
  // I used the first 3 blogs for trending
  const trendingBlogs = BlogData.slice(0, 3);


  return (
    <div className="featured-gradient border border-gray-600 rounded-xl p-4 sticky top-4">
      <p className="text-3xl mb-16">Trending</p>
      <div className="space-y-5 relative ">
        {trendingBlogs.map((blog) => (
          <Link href={`/our-blog/${blog.id}`} key={blog.id}>
            <div className="rounded-2xl h-[157px] relative mb-4 border-1 border-gray-400">

              <Image
                src={blog.image}
                alt={blog.title}
                fill
                className="object-cover rounded-xl"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
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