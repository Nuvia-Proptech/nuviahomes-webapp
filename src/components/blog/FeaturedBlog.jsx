import Image from "next/image";
import React from "react";
import { BlogData } from "@/lib/dummyData/BlogData";
import avatar from "@/assets/icons/Frame 7218.png";
import { Calendar } from "lucide-react";
import Link from "next/link";

export default function FeaturedBlog() {
  const featuredBlog = BlogData[0];

  return (
    <Link href={`/blog/${featuredBlog.id}`}>
      <div className="relative aspect-[16/9] w-full min-h-[300px] md:min-h-[531px] rounded-xl overflow-hidden">
        <Image
          src={featuredBlog.image}
          alt={featuredBlog.title}
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 768px) 100vw, 75vw"
        />

        {/* Overlay – shrinks on mobile, stays full-size on desktop */}
        <div className="absolute inset-x-0 bottom-0 bg-white/5 backdrop-blur-lg w-full p-3 sm:p-4 md:p-4">
          {/* Title – smaller on mobile */}
          <p className="text-lg sm:text-xl md:text-24 font-bold line-clamp-2 md:line-clamp-none">
            {featuredBlog.title}
          </p>

          {/* Excerpt – hidden on mobile, shown on md+ */}
          <p className="hidden md:block text-base">{featuredBlog.excerpt}</p>

          <div className="flex flex-col sm:flex-row sm:justify-between gap-2 mt-2 sm:mt-4">
            {/* Author + Date */}
            <div className="flex flex-wrap gap-2 sm:gap-4 text-sm sm:text-base">
              <div className="flex items-center gap-1">
                <div className="h-7 w-7 sm:h-9 sm:w-9 flex items-center justify-center">
                  <Image
                    src={avatar}
                    alt="person avatar"
                    width={36}
                    height={36}
                    className="object-cover rounded-full"
                  />
                </div>
                <p className="font-medium">{featuredBlog.author}</p>
              </div>

              <div className="flex items-center gap-1">
                <div className="h-6 w-6 sm:h-8 sm:w-8 rounded-full flex items-center justify-center border border-gray-100">
                  <Calendar size={16} className="sm:size-20" />
                </div>
                <p className="font-medium">{featuredBlog.date}</p>
              </div>
            </div>

            {/* Tags – wrap nicely */}
            <div className="flex flex-wrap gap-1.5">
              {featuredBlog.tags.map((tag, i) => (
                <button
                  key={i}
                  className="border border-gray-100 cursor-pointer text-xs sm:text-base font-medium h-5 sm:h-6 px-2.5 sm:px-4 rounded-full"
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