import React from "react";
import Nav from "./Nav";

export default function AltHero({ pageName }: { pageName: string }) {
  return (
    <div className="alt-hero max-h-[75vh] h-[70vh] overflow-hidden relative top-0 mb-10">
      {/* styleProp="bg-white/10 backdrop-blur-2xl" */}
      <Nav />
      {/* <!-- text and bread crumbs --> */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-28 text-center ">
        <p>Home / {pageName}</p>
        <p className="text-[56px] font-semibold">{pageName}</p>
      </div>
      {/* <Image
        src={heroBg}
        alt=""
        className="w-full"
      /> */}
    </div>
  );
}
