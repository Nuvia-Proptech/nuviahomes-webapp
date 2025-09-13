import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'
import { MessagesIndex } from '@/components/dashboard/superAdmin/Messages/MessagesIndex'
import React from 'react'

export default function page() {
  return (
    <section className='bg-[#F9FBFB] flex flex-row'>
    <AdminSideBarNav />
       <MessagesIndex />
   </section>
  )
}
