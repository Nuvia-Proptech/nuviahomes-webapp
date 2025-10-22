import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function BlogArticlesCard({ blog }) {
  return (
    <div className="min-w-[310px]">
      <div className="w-full h-auto">
        <div className="rounded-xl h-[164px] relative border border-gray-700 p-2.5">
          <div className="relative w-full h-full rounded-lg overflow-hidden">
            <Image
              src={blog.image}
              alt={blog.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-12 my-4">
            <p>{blog.author}</p>
            <p>{blog.date}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center ">
         <p className="text-16 mb-2">{blog.title}</p>
        <p className="text-12">{blog.excerpt}</p>
        <div className="gradient-text flex justify-end mt-4 item">
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