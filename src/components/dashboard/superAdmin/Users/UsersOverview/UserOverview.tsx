import { ChevronDown, User } from 'lucide-react'
import React from 'react'

export default function UserOverview() {
    return (
        <div>
            <div className="grid grid-cols-2 gap-x-[16px] gap-y-[25px]">
                {/* card */}
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
                    <div key={i} className="bg-white h-[101px] w-[367px] flex justify-between items-center rounded-lg px-[30px] py-[23px] shadow-md">
                        <div className="w-[156px] flex gap-[46px] justify-between items-center  ">
                            <div className="h-[49px] w-[51px] bg-blue-200 flex justify-center items-center rounded-md">
                                <User />
                            </div>
                            <div>
                                <p className="text-[16px]">Balance</p>
                                <p className="text-[20px]">#0.00</p>
                            </div>
                        </div>
                        <ChevronDown />
                    </div>
                ))}
            </div>
        </div>
    )
}
