import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'
import { PaymentsIndex } from '@/components/dashboard/superAdmin/Payments/PaymentsIndex'
import React from 'react'

export default function page() {
  return (
    <section className='bg-[#F9FBFB] flex flex-row'>
    <AdminSideBarNav />
       <PaymentsIndex />
   </section>
  )
}
