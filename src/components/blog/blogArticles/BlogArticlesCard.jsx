import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogArticlesCard({ blog }) {
  // Function to truncate text
  const truncateText = (text, maxLength = 100) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + "...";
  };

  return (
    <div className="min-w-[310px]">
      <div className="w-full h-[26rem] flex flex-col">
        <div className="rounded-xl h-[174px] relative border border-gray-700 p-2.5">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover "
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-12 my-4">
            <p>{blog.author}</p>
            <p>{blog.date}</p>
          </div>
        </div>
        <div className="flex flex-col justify-between flex-1">
          <p className="text-16 mb-2 font-semibold">{blog.title}</p>
          <p className="text-14 text-gray-300 flex-1 flex items-center">{truncateText(blog.excerpt, 130)}</p>
          <div className="gradient-text flex justify-end mt-4 md:mt-8">
            <Link href={`/our-blog/${blog.id}`}>
              <button className="flex items-center gap-2 md:gap-3 md:hover:gap-2 text-16 hover:gap-3 transition-all font-semibold">
                <span className="gradient-text">See More</span>
                <ArrowRight className="w-5 h-5 text-green-500" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}