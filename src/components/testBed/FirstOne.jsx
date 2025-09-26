import React from "react";
import {
  ChevronDown,
  EllipsisVertical,
  Eye,
  PlusSquareIcon,
  Search,
  Trash2,
  Upload,
  User,
  UserCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import totalUsersIcon from "@/assets/dash1-icons/total-users.svg"
import investorsIcon from "@/assets/dash1-icons/investors.svg"
import agentsIcon from "@/assets/dash1-icons/agents.svg"
import propertyDevelpersIcon from "@/assets/dash1-icons/property-develpers.svg"
import Image from "next/image";
import { Button } from "../ui/button";
import exportIcon from "@/assets/dash1-icons/export.svg"
import addSquareIcon from "@/assets/dash1-icons/add-square.svg"
import agentPhoto from "@/assets/dash1-icons/samuel-o.svg"
import Link from "next/link";

export default function FirstOne() {
  return (
    <div className="bg-gray-200 w-full pt-5 px-[29px]">
      <div className="flex justify-between">
        {/* card */}
        {[{
          item: "Total users",
          itemValue: "21,456",
          percentage: "+29%",
          desc: "Last week anylytics",
          icon: totalUsersIcon
        }, {
          item: "Investors",
          itemValue: "1,456",
          percentage: "+12%",
          desc: "Last week anylytics",
          icon: investorsIcon
        }, {
          item: "Agents",
          itemValue: "300",
          percentage: "-19%",
          desc: "Last week anylytics",
          icon: agentsIcon
        }, {
          item: "Property devlopers",
          itemValue: "120",
          percentage: "+29%",
          desc: "Total users",
          icon: propertyDevelpersIcon
        },].map((item) => (
          <div className="flex justify-between h-[130px] w-[265px] py-[16px] px-[8px] rounded-sm shadow-sm bg-white mb-[12px]">
            <div>
              <p>{item.item}</p>
              <p className="text-[24px] font-bold">
                {item.itemValue} <span className="text-[16px] font-normal text-[#48A848]">({item.percentage})</span>
              </p>
              <p>{item.desc}</p>
            </div>
            <div className="h-[39px] w-[41px] flex justify-center items-center  ">
              <Image src={item.icon} alt={item.item} />
            </div>
          </div>
        ))}
      </div>
      <div className="bg-white p-6 py-4 rounded-md">
        {/* Search */}
        <div>
          <p className="text-[20px]">Search filters</p>
          <div className="flex justify-between items-center gap-5 mt-10 mb-5 text-gray-500">
            <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-between items-center text-sm border border-gray-300 rounded-md px-3 py-2 w-full">
                <p>Select role</p>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full text-black">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex justify-between items-center text-sm border border-gray-300 rounded-md px-3 py-2 w-full">
                <p>Select role</p>
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-full text-black">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <div className="w-full">
              <div className="relative flex items-center">
                <input
                  name="search"
                  type="text"
                  className="w-full text-slate-900 text-sm border border-gray-300 px-4 py-3 pr-8 rounded-md focus:outline-none"
                  placeholder="Select user"
                />
                <span className="absolute right-3 top-1/2 transform -translate-y-1/2 ">
                  <Search strokeWidth={1} />
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Shpw Export Add new user */}
        <div className="flex justify-between items-center mb-5">
          <div className="flex items-center gap-2">
            <p>Show</p>
            <Select>
              <SelectTrigger className="focus:ring-white">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="9">9</SelectItem>
                <SelectItem value="8">8</SelectItem>
                <SelectItem value="7">7</SelectItem>
              </SelectContent>
            </Select>
            {/* <select className="mx-2 border border-gray-300 rounded-md px-2 py-1">
              <option value="">10</option>
            </select> */}
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="#F2EDFD"><Image src={exportIcon} /> Export </Button>

            <Sheet>
              <SheetTrigger>
                <Button variant="outline" className="btn-gradient text-white" ><Image src={addSquareIcon} /> Add new users </Button>
              </SheetTrigger>
              <SheetContent className="bg-white text-black">
                <SheetHeader>
                  <SheetTitle>Add new user</SheetTitle>

                  <hr className="my-4 text-black" />
                  <SheetDescription>
                    <form action="" className="space-y-4">
                      
<div class="flex items-center justify-center w-full">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 

                      <div className="grid w-full max-w-sm items-center gap-1">
                        <Label htmlFor="username" className="text-[13px] font-normal">Username</Label>
                        <Input type="text" id="username" placeholder="john.doe" className="focus:outline-none" />
                      </div>

                      <div className="grid w-full max-w-sm items-center gap-1">
                        <Label htmlFor="email" className="text-[13px] font-normal">Email</Label>
                        <Input type="email" id="email" placeholder="Email" />
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1">
                        <Label htmlFor="email" className="text-[13px] font-normal">Country</Label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nigeria">Nigeria</SelectItem>
                            <SelectItem value="ghana">Ghana</SelectItem>
                            <SelectItem value="togo">Togo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1">
                        <Label htmlFor="email" className="text-[13px] font-normal">State</Label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select State" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nigeria">Nigeria</SelectItem>
                            <SelectItem value="ghana">Ghana</SelectItem>
                            <SelectItem value="togo">Togo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1">
                        <Label htmlFor="email" className="text-[13px] font-normal">Address</Label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Address" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nigeria">Nigeria</SelectItem>
                            <SelectItem value="ghana">Ghana</SelectItem>
                            <SelectItem value="togo">Togo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1">
                        <Label htmlFor="email" className="text-[13px] font-normal">Phone number</Label>
                        <Input type="tel" id="phone-number" placeholder="+2348100298300" />
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1">
                        <Label htmlFor="email" className="text-[13px] font-normal">Select role</Label>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select Role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="nigeria">Nigeria</SelectItem>
                            <SelectItem value="ghana">Ghana</SelectItem>
                            <SelectItem value="togo">Togo</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-x-5">
                        <Button type="submit" className="btn-gradient">
                          <Link href="/dashboard/admin/users/user-overview">Submit</Link>
                        </Button>
                        <Button className="bg-[#FBEFEF] text-[#B43C3C]">Cancle</Button>
                      </div>
                    </form>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        {/* Table */}
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <TableRow className="">
                <TableCell className="font-medium">0110</TableCell>
                {/* profile */}
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 bg-gray-600 rounded-full">
                      <Image src={agentPhoto} alt="Agent photo" />
                    </div>
                    <div>
                      <p className="font-semibold text-black">Mr. Samuel Onoja</p>
                      <p>samuel@gmail.com</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>+2348100298300</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <UserCircle />
                    <p>Agent</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p>
                      <span className="text-black font-semibold">
                        14 Apr 2022
                      </span>
                      <br /> at 8:00 PM
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="bg-[#48A848]/20 py-2 px-4 rounded-md text-[12px] text-[#48A848] text-center w-[100px]">
                    Active
                  </div>
                </TableCell>
                <TableCell className="text-righ">
                  <div className="flex gap-2 justify-en">
                    <Trash2 />
                    <Eye />
                    <EllipsisVertical />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
