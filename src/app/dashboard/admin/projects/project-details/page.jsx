"use client"
import { ProjectDetailIndex } from '@/components/dashboard/superAdmin/Projects/projectDetails/ProjectDetailIndex'
import { AppAdminNav } from '@/components/shared/AppAdminNav'
import React from 'react'

export default function page() {
  return (
    <AppAdminNav>
    <ProjectDetailIndex />
  </AppAdminNav>
  )
}
