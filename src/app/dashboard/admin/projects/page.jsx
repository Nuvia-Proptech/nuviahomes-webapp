"use client"
import { ProjectsIndex } from '@/components/dashboard/superAdmin/Projects/ProjectsIndex'
import { AppAdminNav } from '@/components/shared/AppAdminNav'
import React from 'react'

export default function page() {
  return (
    <AppAdminNav>
    <ProjectsIndex />
  </AppAdminNav>
  )
}
