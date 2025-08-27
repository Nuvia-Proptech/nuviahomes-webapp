"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials1 = [
  { name: "Samuelson Okoi", role: "Sales Executive at Risevest", avatar: "SO", text: "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while Investors browse verified listings and invest securely." },
  { name: "Samuelson Okoi", role: "Sales Executive at Risevest", avatar: "SO", text: "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while Investors browse verified listings and invest securely." },
  { name: "Samuelson Okoi", role: "Sales Executive at Risevest", avatar: "SO", text: "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while Investors browse verified listings and invest securely." },
  { name: "Samuelson Okoi", role: "Sales Executive at Risevest", avatar: "SO", text: "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while Investors browse verified listings and invest securely." },
  { name: "Samuelson Okoi", role: "Sales Executive at Risevest", avatar: "SO", text: "We are a platform that simplifies property management, development, and investment. Property Owners can submit properties effortlessly, while Investors browse verified listings and invest securely." },
];

const testimonials2 = [
  { name: "Jane Smith", role: "Product Manager at TechCorp", avatar: "JS", text: "The platform has revolutionized how we manage our real estate portfolio. The interface is intuitive and the investment process is seamless." },
  { name: "Michael Chen", role: "Investment Director at Capital Group", avatar: "MC", text: "Outstanding service and reliable returns. This platform has become our go-to solution for property investments and management." },
  { name: "Sarah Johnson", role: "Real Estate Investor", avatar: "SJ", text: "The verification process gives me confidence in every investment. Transparent, secure, and profitable - exactly what I was looking for." },
  { name: "David Wilson", role: "Property Developer", avatar: "DW", text: "As a developer, this platform has streamlined our funding process. Quick approvals and professional investor network." },
];

export default function TestimonialsSection() {
  const cardWidth = 480 + 30; // width + margin
  const totalSlides = testimonials1.length;

  const [currentSlide, setCurrentSlide] = useState(1); // start from first real slide
  const [isTransitioning, setIsTransitioning] = useState(true);

  const nextSlide = () => setCurrentSlide((prev) => prev + 1);
  const prevSlide = () => setCurrentSlide((prev) => prev - 1);

  // Auto play
  useEffect(() => {
    const autoPlay = setInterval(nextSlide, 4000);
    return () => clearInterval(autoPlay);
  }, []);

  // Handle infinite looping (jump without animation when reaching clone)
  useEffect(() => {
    if (currentSlide === totalSlides + 1) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500);
    }
    if (currentSlide === 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalSlides);
      }, 500);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (!isTransitioning) {
      setTimeout(() => setIsTransitioning(true), 20); // re-enable transition after jump
    }
  }, [isTransitioning]);

  const renderRow = (items, offset = 0) => {
    // Clone last + first for seamless loop
    const extendedItems = [
      items[items.length - 1],
      ...items,
      items[0],
    ];
    return (
      <div className="overflow-hidden">
        <div
          className={`flex ${isTransitioning ? "transition-transform duration-500" : ""}`}
          style={{
            transform: `translateX(-${
              currentSlide * cardWidth - offset
            }px)`,
          }}
        >
          {extendedItems.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[480px] mr-6 rounded-2xl p-6 bg-gradient-to-tr from-white/5 to-white/10 backdrop-blur-md shadow-lg skew-x-[-8deg]"
            >
              <div className="skew-x-[8deg] flex flex-col justify-between h-full">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="text-lg font-semibold">{t.name}</h4>
                    <p className="text-sm text-gray-400">{t.role}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r from-purple-400 to-indigo-600 font-bold">
                    {t.avatar}
                  </div>
                </div>
                <p className="text-gray-300 mt-4 text-sm leading-relaxed">
                  “{t.text}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-16 px-4 bg-gradient-to-br from-[#2D1B69] to-[#1A0F3A] text-white border-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto flex justify-between items-end mb-10">
        <div>
          <p className="text-sm font-medium uppercase bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text text-transparent mb-2">
            Testimonials
          </p>
          <h2 className="text-3xl font-bold mb-2">
            Don&apos;t just take our words
          </h2>
          <p className="text-gray-400 max-w-lg">
            Hear from other people about our services to solve their real estate issues
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-3 ">
          <button
            onClick={prevSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-purple-400/30 transition"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:bg-purple-400/30 transition"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Sliders */}
      <div className="space-y-6 max-w-7xl mx-auto">
        {renderRow(testimonials1)}
        {renderRow(testimonials2, 255)} {/* offset for staggered second row */}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-10">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i + 1)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === i + 1
                ? "bg-purple-400 scale-125"
                : "bg-white/30 hover:bg-white/50"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
