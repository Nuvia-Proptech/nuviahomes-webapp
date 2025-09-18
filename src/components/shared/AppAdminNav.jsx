import React from 'react'
import { AdminSideBarNav } from '../dashboard/superAdmin/AdminSideBarNav'

export const AppAdminNav = ({children, className}) => {
  return (
    <section className={`bg-secondaryColor flex flex-row ${className}`}>
    <AdminSideBarNav />
       {children}
   </section>
  )
}
