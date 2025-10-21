import Image from "next/image";
import React from "react";
import Link from "next/link";

export default function BlogArticlesCard({ blog }) {
  return (
    <div className="min-w-[310px]">
      <div className="w-full">
        <div className="rounded-2xl h-[164px] relative">
          <Image
            src={blog.image}
            alt={blog.title}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div>
          <div className="flex justify-between text-12 my-4">
            <p>{blog.author}</p>
            <p>{blog.date}</p>
          </div>
          <p className="text-16 mb-2">{blog.title}</p>
          <p className="text-12">{blog.excerpt}</p>
        </div>
        <div className="gradient-text flex justify-end mt-4">
          <Link href={`/our-blog/${blog.id}`}>
            <button>See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}