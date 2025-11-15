import BlogArticles from "@/components/blog/blogArticles/BlogArticles";
import TrendingBlog from "@/components/blog/blogArticles/TrendingBlog";
import CategoriesBlog from "@/components/blog/CategoriesBlog";
import FeaturedBlog from "@/components/blog/FeaturedBlog";
import SearchBlog from "@/components/blog/SearchBlog";
import AltHero from "@/components/shared/AltHero";
import React from "react";

export default function BlogPage() {
  return (
    <section>
      <AltHero pageName="Blog" />
      <div className="container px-4 md:px-10 mx-auto">
        {/* Featured + Sidebar */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 mb-12">
          <div className="w-full lg:w-3/4 order-2 lg:order-1">
            <FeaturedBlog />
          </div>
          <aside className="w-full lg:w-1/4 flex flex-col gap-6 lg:gap-10 py-1 order-1 lg:order-2">
            <SearchBlog />
            <CategoriesBlog />
          </aside>
        </div>

        {/* Articles + Trending */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <main className="w-full lg:w-3/4 order-2 lg:order-1">
            <BlogArticles />
          </main>
          <aside className="w-full lg:w-1/4 flex flex-col gap-6 lg:gap-10 py-1 order-1 lg:order-2">
            <TrendingBlog />
          </aside>
        </div>
      </div>
    </section>
  );
}