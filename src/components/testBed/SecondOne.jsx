"use client"
import { Check, ChevronDown, User } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import SideBar from "../dashboard/superAdmin/Users/UsersOverview/SideBar";
import UserOverview from "../dashboard/superAdmin/Users/UsersOverview/UserOverview";
import KYCDetails from "../dashboard/superAdmin/Users/UsersOverview/KYCDetails";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import samO from "@/assets/dash1-icons/samuel-o.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function SecondOne() {
  const [btnClick, setBtnClick] = useState("Overview")


  return (
    <div className="p-[25px] bg-secondaryColor">
      <div className="flex gap-[20px]">
        <SideBar />
        {/* col-2 */}
        <div className="w-full">
          <div className="flex gap-[32px] mb-[34px]">
            {
              ["Overview", "Security", "Billings & Investments"].map((item, i) => (
                <Button key={i} className={`bg-transparent hover:bg ${btnClick === item ? "bg-blue-500 text-white" : "text-black"} font-normal flex items-center py-[8px] px-[16px]`} onClick={() => setBtnClick(item)}>
                  <User />
                  {item}
                </Button>
              ))
            }
          </div>
          {/* <p>btn: {btnClick}</p> */}
          {btnClick === "Overview" ?
            <UserOverview /> : btnClick === "Security" ?
              <KYCDetails /> :
              <div>
                <Table>
                  <TableCaption>A list of your recent invoices.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Project</TableHead>
                      <TableHead className="bg-red-300">Leader</TableHead>
                      <TableHead>Team</TableHead>
                      <TableHead>Progress</TableHead>
                      <TableHead>Action</TableHead>
                      <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">INV001</TableCell>
                      <TableCell>Paid</TableCell>
                      <TableCell>Credit Card</TableCell>

                      <TableCell className="bg-red-300">
                      <div className=""></div>

                      </TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell>Credit Card</TableCell>
                      <TableCell className="text-right">$250.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
          }
        </div>
      </div>

    </div >
  );
}
