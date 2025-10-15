import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'
import { BookingsIndex } from '@/components/dashboard/superAdmin/Bookings/BookingsIndex'
import React from 'react'

export default function page() {
  return (
    <section className='bg-[#F9FBFB] flex flex-row'>
     <AdminSideBarNav />
        <BookingsIndex />
    </section>
  )
}
