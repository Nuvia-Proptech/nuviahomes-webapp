import React from "react";
import BlogArticlesCards from "./BlogArticlesCard";
import BlogArticlesCard from "./BlogArticlesCard";

export default function BlogArticles() {
  let items = [1, 2, 3, 4, 5, 6];
  return (
    <div className="grid gap-5 py-3 grid-cols-3 justify-items-center">
      {items.map((item) => (
        <BlogArticlesCard key={item}/>
      ))}
    </div>
  );
}
