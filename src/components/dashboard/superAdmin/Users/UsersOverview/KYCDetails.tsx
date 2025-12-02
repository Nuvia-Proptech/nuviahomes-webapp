import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Plus } from 'lucide-react'
import React from 'react'

export default function KYCDetails() {
    return (
        <div className='bg-white p-6 py-4'>
            <p className='text-[20px]'>KYC Details</p>
            <form action="">
                <div className='grid grid-cols-2 gap-4 mb-[23px]'>
                    <div className="grid w-full max-w-sm items-center gap-1">
                        <Label htmlFor="email" className="text-[13px] font-normal" >First Name</Label>
                        <Input type="text" id="first-name" placeholder="John" className="focus:outline-none" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1">
                        <Label htmlFor="email" className="text-[13px] font-normal" >First Name</Label>
                        <Input type="text" id="first-name" placeholder="John" className="focus:outline-none" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1">
                        <Label htmlFor="email" className="text-[13px] font-normal" >First Name</Label>
                        <Input type="text" id="first-name" placeholder="John" className="focus:outline-none" />
                    </div>
                    <div className="grid w-full max-w-sm items-center gap-1">
                        <Label htmlFor="email" className="text-[13px] font-normal" >First Name</Label>
                        <Input type="text" id="first-name" placeholder="John" className="focus:outline-none" />
                    </div>
                </div>
                {/* Drop boox */}

                <div>
                    <p>Means of Identification</p>
                    <div class="flex items-center justify-center w-full">
                        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                </svg>
                                <p class="mb-2 text-[14px] font-semibold text-gray-600 text-center">Drag and drop document here <br />or</p>

                                <Button className="bg-[#7B43EA]/10 text-[#7B43EA] hover:bg-[#7B43EA]/10">Browse</Button>
                            </div>
                            <input id="dropzone-file" type="file" class="hidden" />
                        </label>
                    </div>
                </div>

                <div className='flex justify-end gap-5 my-10'>
                    <Button> <Plus /> Regect </Button>
                    <Button className="btn-gradient"> <Plus /> Approve </Button>
                </div>
            </form>
        </div>
    )
}
