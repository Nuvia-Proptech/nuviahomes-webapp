import { PropertiesIndex } from '@/components/dashboard/superAdmin/Properties/PropertiesIndex'
import { AppAdminNav } from '@/components/shared/AppAdminNav'
import React from 'react'

export default function page() {
  return (
    <AppAdminNav>
      <PropertiesIndex />
    </AppAdminNav>
  )
}
