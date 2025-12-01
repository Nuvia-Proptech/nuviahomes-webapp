import React from "react";

export default function SearchBlog() {
  return (
    <div className="featured-gradient border border-gray-600 rounded-xl w-full p-4">
      <p className="text-3xl mb-16">Search</p>
      <div className="flex justify-between items-center border border-gray-600 forms-gradient h-[40px] px-3 rounded-md">
        <form action="">
          <input
            type="text"
            name="search"
            placeholder="Search"
            className="outline-none"
          />
        </form>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.5527 19.2907L14.4157 15.1613M14.4157 15.1613C15.7686 13.8103 16.6056 11.9427 16.6056 9.87965C16.6056 5.75743 13.2639 2.41571 9.14168 2.41571C5.01946 2.41571 1.67773 5.75743 1.67773 9.87965C1.67773 14.0019 5.01945 17.3436 9.14168 17.3436C11.2009 17.3436 13.0653 16.5097 14.4157 15.1613Z"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}
