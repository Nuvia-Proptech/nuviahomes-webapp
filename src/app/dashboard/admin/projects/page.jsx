import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'
import { ProjectsIndex } from '@/components/dashboard/superAdmin/Projects/ProjectsIndex'
import React from 'react'

export default function page() {
  return (
    <section className='bg-[#F9FBFB] flex flex-row'>
    <AdminSideBarNav />
      <ProjectsIndex />
   </section>
  )
}
