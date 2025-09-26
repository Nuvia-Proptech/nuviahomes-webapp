import FirstOne from '@/components/testBed/FirstOne'
import SecondOne from '@/components/testBed/SecondOne'
import React from 'react'

export default function TestBedPage() {
  return (
   <div className="bg-gray-50 text-black">
      <div className="flex">
        <div className="w-[236px] bg-blue-500 h-[1024px]">Side bar</div>
        {/*  */}
        {/* <FirstOne /> */}
        <SecondOne />
        
      </div>
    </div>
  )
}
