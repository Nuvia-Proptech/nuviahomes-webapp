import { AdminSideBarNav } from '@/components/dashboard/superAdmin/AdminSideBarNav'
import { UsersIndex } from '@/components/dashboard/superAdmin/Users/UsersIndex'
import { AppAdminNav } from '@/components/shared/AppAdminNav'
import React from 'react'

const page = () => {
  return (
    <AppAdminNav>
      <UsersIndex />
    </AppAdminNav>
  )
}

export default page