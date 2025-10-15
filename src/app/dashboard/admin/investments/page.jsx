import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'
import { InvesmentsIndex } from '@/components/dashboard/superAdmin/Investments/InvesmentsIndex'
import React from 'react'

export default function page() {
  return (
    <section className='bg-[#F9FBFB] flex flex-row'>
    <AdminSideBarNav />
       <InvesmentsIndex />
   </section>
  )
}
