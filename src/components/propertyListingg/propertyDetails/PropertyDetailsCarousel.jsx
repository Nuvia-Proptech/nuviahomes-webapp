import React from "react";
import egImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function PropertyDetailsCarousel() {
  return (
    <div className="carousel w-full h-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
          className="w-full"
        />
        {/* <Image src={egImage} alt="" className="w-full" /> */}
        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide4" className="btn border-0 bg-transparent">
            ❮
          </a>
          <a href="#slide2" className="btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=800&q=80"
          className="w-full"
        />
        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide1" className="btn">
            ❮
          </a>
          <a href="#slide3" className="btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
          className="w-full"
        />
        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide2" className="btn">
            ❮
          </a>
          <a href="#slide4" className="btn">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
          className="w-full"
        />
        <div className="absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between">
          <a href="#slide3" className="btn">
            ❮
          </a>
          <a href="#slide1" className="btn">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
//  <div className="border-4">
//       <Carousel>
//         <CarouselContent>
//           <CarouselItem>
//             <Image src={egImage} alt="..." />
//           </CarouselItem>
//           <CarouselItem>
//             <Image src={egImage} alt="..." />
//           </CarouselItem>
//           <CarouselItem>
//             <Image src={egImage} alt="..." />
//           </CarouselItem>
//         </CarouselContent>
//         <CarouselPrevious />
//         <CarouselNext />
//       </Carousel>
//     </div>
