"use client"
import { Check, ChevronDown, ChevronLeft, ChevronRight, Eye, Filter, User } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import SideBar from "../dashboard/superAdmin/Users/UsersOverview/SideBar";
import UserOverview from "../dashboard/superAdmin/Users/UsersOverview/UserOverview";
import KYCDetails from "../dashboard/superAdmin/Users/UsersOverview/KYCDetails";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import samO from "@/assets/dash1-icons/samuel-o.svg"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Checkbox } from "../ui/checkbox";
import { Progress } from "../ui/progress";
import agentPhoto from "@/assets/dash1-icons/samuel-o.svg"
import { Input } from "../ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


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
                <div className="bg-white mb-12">
                  <div className="flex justify-between py-[20px] px-[25px]">
                    <p className="text-[20px]">Project list</p>
                    <div className='flex gap-6'>
                      <Input type="text" placeholder="Search" className="w-[305px] h-[38px]" />
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="h-[38px]">Open <Filter /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">
                          <DropdownMenuGroup>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem> Profile</DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <Table className="border-y">
                    <TableHeader>
                      <TableRow className="bg-red-0 my-5">
                        <TableHead className="font-medium"> <Checkbox /> </TableHead>
                        <TableHead className="borde"><p>Project</p></TableHead>
                        <TableHead><p className="border-l pl-2">Leader</p></TableHead>
                        <TableHead><p className="border-l pl-2">Team</p></TableHead>
                        <TableHead> <p className="border-l pl-2">Progress</p></TableHead>
                        <TableHead><p className="text-righ border-l pl-2">Action</p></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[1, 2, 3, 4, 5].map(() => (
                        <TableRow>
                          <TableCell className="font-medium"> <Checkbox /> </TableCell>
                          {/* <TableCell>
                          <div className="flex item-center">
                            <div className="h-[40px] w-[40px] rounded-full bg-gray-300"></div>
                            <div>
                              <p>BuyEasy App</p>
                              <p>React project</p>
                            </div>
                          </div>
                        </TableCell> */}
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <div className="h-10 w-10 bg-gray-600 rounded-full">
                                <Image src={agentPhoto} alt="Agent photo" />
                              </div>
                              <div className="text-[14px]">
                                <p className="font-semibold">BuyEasy App</p>
                                <p>React project</p>
                              </div>
                            </div>
                          </TableCell>
                          <TableCell className="text-[16px]">John Doe</TableCell>

                          <TableCell className="">
                            {/* <div className="h-[24px] w-[24px] rounded-full border"></div> */}
                            <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                              <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                              </Avatar>
                              <Avatar>
                                <AvatarImage src="https://github.com/leerob.png" alt="@leerob" />
                                <AvatarFallback>LR</AvatarFallback>
                              </Avatar>
                              <Avatar>
                                <AvatarImage
                                  src="https://github.com/evilrabbit.png"
                                  alt="@evilrabbit"
                                />
                                <AvatarFallback>ER</AvatarFallback>
                              </Avatar>
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress value={30} /> 75%
                            </div>
                          </TableCell>
                          <TableCell className="pl-4"><Eye /></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                  {/* pagination */}
                  <div className="flex justify-between py-5 px-5">
                    <p>Showing 1 to 10 of 100 entries</p>
                    <div className="flex text-sm gap-3">
                      {[<ChevronLeft />, 1, 2, 3, 4, 5, 6, <ChevronRight />].map((item) => (
                        <div className="h-8 w-8 flex justify-center items-center rounded-sm border">{item}</div>
                      ))}
                    </div>
                  </div>
                  {/* <Pagination>
                    <PaginationContent>
                      <PaginationItem>
                        <PaginationPrevious href="#" />
                      </PaginationItem>
                      <PaginationItem className="space-x-2">
                        <PaginationLink href="#" className="bg-blue-400">1</PaginationLink>
                        <PaginationLink href="#" className="bg-blue-400">1</PaginationLink>
                        <PaginationLink href="#" className="bg-blue-400">1</PaginationLink>
                        <PaginationLink href="#" className="bg-blue-400">1</PaginationLink>
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationEllipsis />
                      </PaginationItem>
                      <PaginationItem>
                        <PaginationNext href="#" />
                      </PaginationItem>
                    </PaginationContent>
                  </Pagination> */}
                </div>
                {/* // Tabel 222222 */}
                <div className="bg-white">
                  <div className="flex justify-between py-[20px] px-[25px]">
                    <p className="text-[20px]">Invest history</p>
                    <div className='flex gap-6'>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="h-[38px]">Filter <Filter /></Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="start">
                          <DropdownMenuGroup>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem> Profile</DropdownMenuItem>
                          </DropdownMenuGroup>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </div>
                  </div>

                  <Table className="border-t">
                    <TableHeader>
                      <TableRow className="bg-red-0 my-5">
                        <TableHead className="font-medium"> SL </TableHead>
                        <TableHead className="borde"><p>Property</p></TableHead>
                        <TableHead><p className="border-l pl-2">Investment amount</p></TableHead>
                        <TableHead><p className="border-l pl-2">Profile</p></TableHead>
                        <TableHead> <p className="border-l pl-2">Upcoming payment</p></TableHead>
                        <TableHead><p className="text-righ border-l pl-2">Action</p></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[1, 2, 3, 4, 5].map(() => (
                        <TableRow>
                          <TableCell className="font-medium">1</TableCell>
                          {/* <TableCell>
                          <div className="flex item-center">
                            <div className="h-[40px] w-[40px] rounded-full bg-gray-300"></div>
                            <div>
                              <p>BuyEasy App</p>
                              <p>React project</p>
                            </div>
                          </div>
                        </TableCell> */}
                          <TableCell>
                            Plot for sale
                          </TableCell>

                          <TableCell className="">
                            #20,000
                          </TableCell>
                          <TableCell>
                            #3,000
                          </TableCell>
                          <TableCell className="text-[16px]">12/08/2025</TableCell>
                          <TableCell className="pl-4"><Eye /></TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

              </div>

          }
        </div>
      </div>

    </div >
  );
}
