"use client"
import { EditProjectIndex } from '@/components/dashboard/superAdmin/Projects/editProject/EditProjectIndex'
import { AppAdminNav } from '@/components/shared/AppAdminNav'
import React from 'react'

export default function page() {
  return (
    <AppAdminNav>
    <EditProjectIndex />
  </AppAdminNav>
  )
}
