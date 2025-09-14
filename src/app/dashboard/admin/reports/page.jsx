import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'
import { ReportsIndex } from '@/components/dashboard/superAdmin/Reports/ReportsIndex'
import React from 'react'

export default function page() {
  return (
    <section className='bg-[#F9FBFB] flex flex-row'>
    <AdminSideBarNav />
       <ReportsIndex />
   </section>
  )
}
