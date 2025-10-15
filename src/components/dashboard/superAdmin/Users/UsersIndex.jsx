import React from 'react'
import { SuperAdminHeader } from '../SuperAdminHeader'
import SecondOne from '@/components/testBed/SecondOne'
import FirstOne from '@/components/testBed/FirstOne'

export const UsersIndex = () => {
  return (
    <div className="w-full flex-1 md:ml-52 justify-center items-center h-screen text-black">
    <SuperAdminHeader />
    {/* <SecondOne /> */}
    <FirstOne />
  </div>
  )
}
