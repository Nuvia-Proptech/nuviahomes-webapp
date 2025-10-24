import React from 'react'
import bgImage from "@/assets/New Bloom(magazine)-01-2.3.001-bigpicture_01_6.jpg"
import Image from 'next/image'
import heroBg from "@/assets/hero-bg.jpg"
import Nav from './Nav'

export default function AltHero({pageName}) {
  return (
    <div className="alt-hero max-h-[75vh] h-[70vh] overflow-hidden relative top-0 mb-10">
      <Nav styleProp="bg-white/10 backdrop-blur-2xl" />
      {/* <!-- text and bread crumbs --> */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-28 text-center ">
        <p>Home / { pageName}</p>
        <p className="text-[56px] font-semibold">{pageName}</p>
      </div>
      {/* <Image
        src={heroBg}
        alt=""
        className="w-full"
      /> */}
    </div>
  )
}
