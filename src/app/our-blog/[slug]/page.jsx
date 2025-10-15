import TrendingBlog from "@/components/blog/blogArticles/TrendingBlog";
import CategoriesBlog from "@/components/blog/CategoriesBlog";
import FeaturedBlog from "@/components/blog/FeaturedBlog";
import SearchBlog from "@/components/blog/SearchBlog";
import AltHero from "@/components/shared/AltHero";
import React from "react";

export default function page() {
  return (
    <div>
      <AltHero pageName="Blog detail" />
      <div className="container px-4 md:px-10 mx-auto">
        <div className="flex gap-10 mb-12">
          <div className="w-3/4">
            <FeaturedBlog />
            {/*  */}
            <div>
              <div>
                <p>By Osim Fiath</p>
                <p>45 Comments</p>
              </div>
              <div>
                <p>10 Essential Tips Every First-Time Homebuyer Should Know</p>
                <p>
                  10 Essential Tips Every First-Time Homebuyer Should Know” is a
                  well-rounded, beginner-friendly real estate guide thoughtfully
                  created to support and empower new and aspiring homeowners as
                  they navigate one of life’s most important milestones. This
                  comprehensive resource offers not just expert insights, but
                  also practical, real-world advice designed to reduce stress,
                  build confidence, and help buyers avoid costly mistakes. It
                  walks you step-by-step through everything you need to know —
                  from setting a realistic and sustainable budget that fits your
                  lifestyle, getting pre-approved by a lender to strengthen your
                  buying power, and researching neighborhoods for safety,
                  schools, and long-term value, to understanding the true and
                  often hidden costs of homeownership, choosing a trustworthy
                  real estate agent who advocates for your best interests, and
                  never skipping the home inspection to protect your investment.
                  It also emphasizes the importance of thinking long-term about
                  how the home fits into your future, sticking firmly to your
                  financial limits even when emotions run high, moving quickly
                  in fast-paced markets without rushing into poor decisions, and
                  staying calm, curious, and well-informed throughout the entire
                  journey — so that when you finally receive the keys, you know
                  you've made a choice that's smart, secure, and truly yours.
                </p>
                <p>
                  It walks you through the entire home-buying process in a
                  simple, stress-free way. Instead of getting lost in
                  complicated terms and confusing steps, this guide helps you
                  focus on what really matters: setting a clear budget, getting
                  pre-approved for a mortgage, choosing the right neighborhood,
                  and understanding all the hidden costs that come with owning a
                  home. It also reminds you to work with a good agent, always
                  get a home inspection, and think about your long-term needs —
                  not just what looks nice right now. You'll learn how to make
                  smart, fast decisions without rushing, and how to stay calm
                  and confident even when things feel overwhelming. Whether
                  you're months away from buying or just starting to explore
                  your options, these tips give you a clear path forward. Think
                  of it as the advice you'd get from a friend who’s already been
                  through the process — honest, helpful, and easy to follow.
                </p>
                <p>
                  10 Essential Tips Every First-Time Homebuyer Should Know” is a
                  well-rounded, beginner-friendly real estate guide thoughtfully
                  created to support and empower new and aspiring homeowners as
                  they navigate one of life’s most important milestones. This
                  comprehensive resource offers not just expert insights, but
                  also practical, real-world advice designed to reduce stress,
                  build confidence, and help buyers avoid costly mistakes. It
                  walks you step-by-step through everything you need to know —
                  from setting a realistic and sustainable budget that fits your
                  lifestyle, getting pre-approved by a lender to strengthen your
                  buying power, and researching neighborhoods for safety,
                  schools, and long-term value, to understanding the true and
                  often hidden costs of homeownership, choosing a trustworthy
                  real estate agent who advocates for your best interests, and
                  never skipping the home inspection to protect your investment.
                  It also emphasizes the importance of thinking long-term about
                  how the home fits into your future, sticking firmly to your
                  financial limits even when emotions run high, moving quickly
                  in fast-paced markets without rushing into poor decisions, and
                  staying calm, curious, and well-informed throughout the entire
                  journey — so that when you finally receive the keys, you know
                  you've made a choice that's smart, secure, and truly yours.
                </p>
                <p>
                  It walks you through the entire home-buying process in a
                  simple, stress-free way. Instead of getting lost in
                  complicated terms and confusing steps, this guide helps you
                  focus on what really matters: setting a clear budget, getting
                  pre-approved for a mortgage, choosing the right neighborhood,
                  and understanding all the hidden costs that come with owning a
                  home. It also reminds you to work with a good agent, always
                  get a home inspection, and think about your long-term needs —
                  not just what looks nice right now. You'll learn how to make
                  smart, fast decisions without rushing, and how to stay calm
                  and confident even when things feel overwhelming. Whether
                  you're months away from buying or just starting to explore
                  your options, these tips give you a clear path forward. Think
                  of it as the advice you'd get from a friend who’s already been
                  through the process — honest, helpful, and easy to follow.
                </p>
              </div>
              {/* Relates tags and Social share */}
              <div className="flex justify-between">
                <div>
                  <p>Related Tags</p>
                  <div className="flex gap-2">
                    <button className="border text-16 h-6 px-4 rounded-full">
                      Travel
                    </button>
                    <button className="border text-16 h-6 px-4 rounded-full">
                      Fashion
                    </button>
                    <button className="border text-16 h-6 px-4 rounded-full">
                      Houses
                    </button>
                  </div>
                </div>
                <div>
                  <p>Social share</p>
                  <div>F T in</div>
                </div>
              </div>

              <hr className="my-10" />

              <div className="flex justify-between">
                <div>
                  <button>Prev post</button>
                  <p>Tips on how to spot a fake agemt</p>
                </div>
                <div>
                  <button>Next post</button>
                  <p>Tips on how to spot a fake agemt</p>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-1/4 flex flex-col gap-10 py-1">
          <SearchBlog />
          <CategoriesBlog />
          <TrendingBlog />
          </div>
        </div>
      </div>
    </div>
  );
}
