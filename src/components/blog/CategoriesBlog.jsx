import React from "react";

export default function CategoriesBlog() {
  return (
    <div className="featured-gradient border border-gray-500 rounded-xl h-[300px] w-full p-4">
      <p className="text-3xl mb-16">Category</p>
      <div className="space-y-3">
        <div className="flex justify-between">
          <p>Lifestyle</p>
          <p>09</p>
        </div>
        <div className="flex justify-between">
          <p>Travel</p>
          <p>06</p>
        </div>
        <div className="flex justify-between">
          <p>Fashion</p>
          <p>19</p>
        </div>
        <div className="flex justify-between">
          <p>Entertainment</p>
          <p>15</p>
        </div>
      </div>
    </div>
  );
}
