import { SuperAdminHeader } from '@/components/dashboard/superAdmin/SuperAdminHeader'
import { AppAdminNav } from '@/components/shared/AppAdminNav'
import React from 'react'

export default function UserDetailsEditpage() {
  return (
    <AppAdminNav>
        <div className="w-full flex-1 md:ml-60 justify-center items-center h-screen text-black bg-secondaryColor ">
        <SuperAdminHeader />
        </div>
    </AppAdminNav>
  )
}
