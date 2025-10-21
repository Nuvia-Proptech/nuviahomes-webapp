import Image from "next/image";
import React from "react";
import { BlogData } from "@/lib/dummyData/BlogData";
import avatar from "@/assets/icons/Frame 7218.png";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function FeaturedBlog() {
  const featuredBlog = BlogData[0]; // First blog is featured

  // Debugging log (remove in production)
  console.log("FeaturedBlog: Rendering featured blog", { featuredBlog });

  return (
    <Link href={`/blog/${featuredBlog.id}`}>
      <div className="relative aspect-[16/9] min-h-[531px] rounded-xl overflow-hidden">
        <Image
          src={featuredBlog.image}
          alt={featuredBlog.title}
          fill
          className="object-cover rounded-xl"
          priority
        />
        <div className="absolute bottom-0 bg-white/5 backdrop-blur-sm w-full p-4">
          <p className="text-24">{featuredBlog.title}</p>
          <p>{featuredBlog.excerpt}</p>
          <div className="flex justify-between mt-4">
            <div className="flex gap-4">
              <div className="flex items-center">
                <div className="h-9 w-9 flex items-center justify-center">
                  <Image
                    src={avatar}
                    alt="person avatar"
                    className="object-cover"
                  />
                </div>
                <p>{featuredBlog.author}</p>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-8 w-8 rounded-full flex items-center justify-center border border-gray-100">
                  <Calendar size={20} />
                </div>
                <p>{featuredBlog.date}</p>
              </div>
            </div>
            <div className="flex gap-2">
              {featuredBlog.tags.map((tag, index) => (
                <button
                  key={index}
                  className="border border-gray-100 cursor-pointer text-base font-light h-6 px-4 rounded-full"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}