import FirstOne from '@/components/testBed/FirstOne'
import SecondOne from '@/components/testBed/SecondOne'
import { Button } from '@/components/ui/button'
import { EllipsisVertical, Eye, Filter, Plus } from 'lucide-react'
import React from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Form } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import agentPhoto from "@/assets/dash1-icons/samuel-o.svg"
import Image from 'next/image'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import addSquareIcon from "@/assets/dash1-icons/add-square.svg"
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import Sidebar from '@/components/dashboard/superAdmin/SideBar'
import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'

export default function TestBedPage() {
  return (
    <div className="bg-gray-50 text-black">
      <div className="flex">
        <div className="w-[236px] bg-blue-500 h-[1024px]">Side bar</div>
        {/*  */}
        <div className='bg-gray-200 w-full pt-5 px-[29px]'>
          {/* Payment details */}
          <div className='flex items-center justify-between my-[30px]'>
            <p className='text-[40px] font-semibold'>Payment requests</p>
            <Sheet>
              <SheetTrigger>
                <Button variant="outline" className="bg-gray-800 text-white" ><Image src={addSquareIcon} /> Add Project </Button>
              </SheetTrigger>
              <SheetContent className="text-black bg-white" style={{
                width: '697px', maxWidth: '697px'
              }}>
                <SheetHeader>
                  <SheetTitle className="text-[20px] mb-[20px]">Payment information</SheetTitle>
                  <SheetDescription>
                    <div className='flex justify-between mb-[47px]'>
                      <div>
                        <p className='text-[18px]'>Amount paid:</p>
                        <p className='text-[16px]'>#20,000</p>
                      </div>
                      <div>
                        <p className='text-[18px]'>Amount paid:</p>
                        <p className='text-[16px]'>#20,000</p>
                      </div>
                      <div>
                        <p className='text-[18px]'>Amount paid:</p>
                        <p className='text-[16px]'>#20,000</p>
                      </div>
                    </div>
                    {/* form */}
                    <form action="" className="space-y-4">
                      <p className='text-[18px] mb-[15px]'>Summery</p>
                      <div className='flex mb-[18px]'>
                        <div className="grid w-full max-w-sm items-center gap-1">
                          <Label htmlFor="username" className="text-[13px] font-normal">Account number</Label>
                          <Input type="text" id="username" placeholder="john.doe" className="focus:outline-none w-[305px]" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1">
                          <Label htmlFor="username" className="text-[13px] font-normal">Account name</Label>
                          <Input type="text" id="username" placeholder="john.doe" className="focus:outline-none w-[305px]" />
                        </div>
                      </div>

                      <div className='flex'>
                        <div className="grid w-full max-w-sm items-center gap-1">
                          <Label htmlFor="email" className="text-[13px] font-normal">Address</Label>
                          <Input type="email" id="email" placeholder="Email" className="w-[305px]" />
                        </div>
                        <div className="grid w-full max-w-sm items-center gap-1">
                          <Label htmlFor="email" className="text-[13px] font-normal">Amount paid</Label>
                          <Input type="email" id="email" placeholder="Email" className="w-[305px]" />
                        </div>
                      </div>
                      {/* file */}
                      <div class="flex items-center justify-center w-full my-10">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                          <div class="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                          </div>
                          <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                      </div>
                      <div className="flex justify-end gap-[15px]">
                        <Button className="bg-[#FBEFEF] text-[#B43C3C]">Close</Button>
                        <Button type="submit" className="">Reject</Button>
                        <Button className="bg-[#FBEFEF] text-[#B43C3C]">Approve</Button>
                      </div>
                    </form>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="bg-white p-6 py-4">
            {/* Show searcgh filter */}
            <div className='flex justify-between items-cenetr mt-[50px] mb-[16px]'>
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
              </div>
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
            {/* Tables */}
            <div>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Charge</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Payable amount</TableHead>
                    <TableHead className="text-righ">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                    <TableRow>
                      <TableCell className="font-medium">0110</TableCell>
                      <TableCell>John Doe</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="h-10 w-10 bg-gray-600 rounded-full">
                            <Image src={agentPhoto} alt="Agent photo" />
                          </div>
                          <p className="font-semibold text-black">Mr. Samuel Onoja</p>
                        </div>
                      </TableCell>
                      <TableCell>#120.000</TableCell>
                      <TableCell>#95</TableCell>
                      <TableCell>20/5/2025</TableCell>
                      <TableCell>140.000</TableCell>
                      <TableCell className="text-righ">
                        <div className="flex gap-2 justify-en">
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
        </div>
      </div>
    </div>
  )
}
{/* <FirstOne /> 
 <SecondOne /> */}