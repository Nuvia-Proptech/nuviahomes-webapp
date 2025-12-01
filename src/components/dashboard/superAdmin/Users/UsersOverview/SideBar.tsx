import React from 'react'
import Image from "next/image";
import { Check, ChevronDown, User } from "lucide-react";
import johnDoe from "@/assets/dash1-icons/john-doe.svg"
import { Button } from '@/components/ui/button';

export default function SideBar() {
    return (
        <div className="w-[371px] border bg-white pt-[40px] px-[21px]">
            <div className="flex flex-col items-center mb-[22px]">
                <div className="h-[130px] w-[121px] mb-[15px] rounded-2xl">
                    <Image src={johnDoe} alt="Agent photo" />
                </div>
                <p className="text-[24px] mb-[17px]">John Doe</p>
                <div className="bg-[#C6D0D2] h-[22px] w-[65px] text-center text-[12px] rounded-sm">
                    Agent
                </div>
            </div>
            {/*  */}
            <div className="flex justify-between w-[322px] mx-auto mb-[31px]">
                <div className="flex gap-[15px] ">
                    <div className="h-[40px] w-[40px] bg-[#C6D0D2] flex justify-center items-center rounded-sm">
                        <Check />
                    </div>
                    <div className="leading-4">
                        <p className="text-base">1.23k </p>
                        <p className="text-[14px] text-black/50">Task done</p>
                    </div>
                </div>
                <div className="flex gap-[15px] ">
                    <div className="h-[40px] w-[40px] bg-[#C6D0D2] flex justify-center items-center rounded-sm">
                        <Check />
                    </div>
                    <div className="leading-4">
                        <p className="text-base">568 </p>
                        <p className="text-[14px] text-black/50">Project done</p>
                    </div>
                </div>
            </div>
            {/*  */}
            <div>
                <p className="text-[20px]">Details</p>
                <hr className="my-4" />
                <div>
                    <div className="space-y-[5px]">
                        <p className="text-[16px] font-semibold">Username: <span className="font-normal">@johndoe</span></p>
                        <p className="text-[16px] font-semibold">Username: <span className="font-normal">@johndoe</span></p>
                        <p className="text-[16px] font-semibold">Username: <span className="font-normal">@johndoe</span></p>
                        <p className="text-[16px] font-semibold">Username: <span className="font-normal">@johndoe</span></p>
                        <p className="text-[16px] font-semibold">Username: <span className="font-normal">@johndoe</span></p>
                        <p className="text-[16px] font-semibold">Username: <span className="font-normal">@johndoe</span></p>
                        <p className="text-[16px] font-semibold">Username: <span className="font-normal">@johndoe</span></p>
                        <p className="text-[16px] font-semibold">Username: <span className="font-normal">@johndoe</span></p>
                    </div>

                    <div className="space-x-[43px] my-[31px]">
                        <Button className="h-[38px] w-[80px] bg-[#5818D8] rounded-sm">
                            Edit
                        </Button>
                        <Button className="h-[38px] w-[80px] text-[#B43C3C] bg-[#FBEFEF] rounded-sm">
                            Edit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
