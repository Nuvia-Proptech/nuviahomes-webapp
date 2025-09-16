import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'
import React from 'react'

const page = () => {
  return (
    <section className='bg-[#F9FBFB] flex flex-row'>
     <AdminSideBarNav />
        <div className="flex-1 md:ml-60">
        <p className='text-black'>Admin home page</p>
      </div>
    </section>
  )
}

export default page