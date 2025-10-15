import BlogArticles from "@/components/blog/blogArticles/BlogArticles";
import TrendingBlog from "@/components/blog/blogArticles/TrendingBlog";
import CategoriesBlog from "@/components/blog/CategoriesBlog";
import FeaturedBlog from "@/components/blog/FeaturedBlog";
import SearchBlog from "@/components/blog/SearchBlog";
import Buttonss from "@/components/Buttonss";
import AltHero from "@/components/shared/AltHero";
import Image from "next/image";
import React from "react";

export default function BlogPage() {
  return (
    <section>
      <AltHero pageName="Blog"  />
      <div className="container px-4 md:px-10 mx-auto">
        <div className="flex gap-10 mb-12">
          <div className="w-3/4">
            <FeaturedBlog />
          </div>
          <div className="w-1/4 flex flex-col gap-10 py-1">
            <SearchBlog />
            <CategoriesBlog />
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/*  */}
        <div className="flex gap-10">
          <div className="w-3/4">
            <BlogArticles />
          </div>
          <div className="w-1/4 flex flex-col gap-10 py-1">
            <TrendingBlog />
          </div>
        </div>
      </div>
    </section>
  );
}
