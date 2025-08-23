import React from "react";

export default function WhatNuviaOffersYou() {
  let propertyAqusitionCards = [
    {
      topic: "Property acqusition service",
      subTopic: "Unlock endless opportunities",
      desc: "Begin your journey by exploring our wide range of property listings. Use our sophisticated search tools to find homes that fit your needs, including location and features. Uncover your ideal home today! Discover the options and let us assist you at every stage.",
    },
    {
      topic: "Property Management Solutions",
      subTopic: "Refining Your Selections",
      desc: "Bookmark properties that interest you to your profile for easy access. Create a shortlist to compare your choices effortlessly. Simplify your decision-making with these useful tools! Additionally, get tailored suggestions based on your saved properties.",
    },
    {
      topic: "Investment Consultation Services",
      subTopic: "Tailored Support",
      desc: "Looking for help with a property, or with real estate investment services? Our dedicated team of real estate experts is always available to assist you with any questions to help you make the right decision concerning real estate and  it’s investments opportunities.",
    },
    {
      topic: "Home Viewing Coordination",
      subTopic: "Experience Properties Firsthand",
      desc: "Let’s set up viewings for the properties that pique your interest. We’ll work closely with the owners and accompany you to ensure you have a comprehensive understanding of your future home. Additionally, we’ll provide you with detailed information about the neighborhood and its environs.",
    },
    {
      topic: "Real Estate Advisory Services",
      subTopic: "Empowering Your Choices",
      desc: "Before you decide on any offers, our experts will guide you through essential checks. This includes property evaluations, legal assessments, and insights into market trends, so you’re completely informed. We’ll also share tips on how to make your offer stand out and make unregrettable choices.",
    },
    {
      topic: "Negotiation Support Services",
      subTopic: "Securing Optimal Offers",
      desc: "Our dedicated team will assist you in negotiating favorable terms and shaping your offer. Our aim is to help you secure the property at the most competitive price possible. Furthermore, we’ll keep you updated on any changes in the market that could affect your decision and m ake you loose out on good deals.",
    },
  ];
  return (
    <div className="container mx-auto px-14 mb-16 md:mb-24">
      <div className="space-y-2 my-10">
        <p className="text-20 gradient-text">Discover More About Us</p>
        <p className="text-40 leading-none">What Nuvia Homes Offers You</p>
        <p className="text-16">
          Explore the diverse range of services designed to enhance your real
          estate experience and help you grow your investment portfolio.
        </p>
      </div>
      {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 border">
        {propertyAqusitionCards.map((card) => (
          <div key={card.subTopic} className="mt-6">
            <div className="border-l border-[#4212A1] py-[10px] px-3 md:py-[14px] md:px-4">
              <p className="text-16">{card.topic}</p>
            </div>
            <div className="about-card-gradient p-6 md:p-10 border border-[#4212A1] rounded-lg rounded-tl-none discover-more-gradient">
              <p className="text-20 mb-2">{card.subTopic}</p>
              <p className="text-16">
              {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 border border-transparent">
        {propertyAqusitionCards.map((card) => (
          <div key={card.subTopic} className="flex flex-col h-full">
            <div className="border-l border-[#4212A1] py-2 px-4">
              <p className="text-16">{card.topic}</p>
            </div>

            <div className="flex flex-col flex-grow about-card-gradient p-4 md:p-6 border border-[#4212A1] rounded-lg rounded-tl-none discover-more-gradient">
              <p className="text-20 md:text-2xl font-semibold mb-2">
                {card.subTopic}
              </p>
              <p className="text-16 leading-relaxed">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
