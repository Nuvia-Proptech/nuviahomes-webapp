import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'
import { SettingsIndex } from '@/components/dashboard/superAdmin/Settings/SettingsIndex'
import React from 'react'

export default function page() {
  return (
    <section className='bg-[#F9FBFB] flex flex-row'>
    <AdminSideBarNav />
       <SettingsIndex />
   </section>
  )
}
