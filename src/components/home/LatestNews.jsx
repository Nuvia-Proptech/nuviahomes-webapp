import React from "react";
import { ArrowRight } from "lucide-react";

const mockNews = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
    title: "Top 10 Best appreciating condos in Las Vegas",
    date: "28 May 2025"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80",
    title: "Real Estate Market Trends for 2025: What to Expect",
    date: "25 May 2025"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80",
    title: "5 Tips for First-Time Home Buyers in Today's Market",
    date: "22 May 2025"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    title: "Luxury Properties: Investment Opportunities in 2025",
    date: "20 May 2025"
  }
];

export default function LatestNews() {
  const news = mockNews;

  return (
    <section>
      <div className="container mx-auto px-4">
        <div className="space-y-2 my-10">
          <p className="text-20 gradient-text">Checkout Our New</p>
          <p className="text-40 leading-none">Latest news</p>
          <p className="smallText">
            Stay Updated with the Latest Real Estate News and Market Trends.
          </p>
        </div>
        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {news.map((item) => (
            <div key={item.id} className="listedProperty rounded-2xl border border-gray-500">
              <div className="m-2 rounded-2xl max-w-2xl h-[300px] relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-xl"
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                
                <div className="text-white absolute left-0 bottom-6 w-full px-4 z-10">
                  <p className="smallText mb-2 font-semibold">
                    {item.title}
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-sm">{item.date}</p>
                    <button className="skewed btn-gradient text-xs px-3 py-1 font-medium">
                      <span className="unskewed">Continue Reading</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* See More Button */}
        <div className="mt-8 flex justify-end">
          <button className="flex items-center gap-2 text-16 hover:gap-3 transition-all font-semibold">
            <span className="gradient-text">See More</span>
            <ArrowRight className="w-5 h-5 text-green-500" />
          </button>
        </div>
      </div>
    </section>
  );
}