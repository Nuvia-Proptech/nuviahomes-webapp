import React from "react";
import BlogArticlesCard from "./BlogArticlesCard";
import { BlogData } from "@/lib/dummyData/BlogData";

export default function BlogArticles() {
  // Debugging log (remove in production)
  console.log("BlogArticles: Rendering blogs", { blogs: BlogData });

  return (
    <div className="grid gap-5 py-3 grid-cols-3 justify-items-center">
      {BlogData.map((blog) => (
        <BlogArticlesCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
}