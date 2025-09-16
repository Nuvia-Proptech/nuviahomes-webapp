import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'
import { PropertiesIndex } from '@/components/dashboard/superAdmin/Properties/PropertiesIndex'
import React from 'react'

export default function page() {
  return (
    <section className='bg-[#F9FBFB] flex flex-row'>
    <AdminSideBarNav />
       <PropertiesIndex />
   </section>
  )
}
