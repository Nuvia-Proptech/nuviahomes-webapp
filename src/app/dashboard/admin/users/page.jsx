import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'
import { UsersIndex } from '@/components/dashboard/superAdmin/Users/UsersIndex'
import React from 'react'

export default function page() {
  return (
    <section className='bg-[#F9FBFB] flex flex-row'>
    <AdminSideBarNav />
       <UsersIndex />
   </section>
  )
}
