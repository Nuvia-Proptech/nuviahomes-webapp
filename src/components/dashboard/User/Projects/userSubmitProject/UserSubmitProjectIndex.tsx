"use client"
import { AppWrapper } from '@/components/shared/AppSetup/AppWrapper'
import React from 'react'
import { UserSubmitProjectForms } from './UserSubmitProjectForms'

export const UserSubmitProjectIndex = () => {
  return (
    <AppWrapper className="">

      <div className="bg-neutralColor-900 p-3 rounded-2xl w-full font-urbanist my-2">
        <p className="md:text-4xl font-semibold text-textColor font-urbanist">
          Submit Project
        </p>
        <p className="text-textColor text-sm font-normal font-urbanist">
          A quick glance at all properties
        </p>

        <UserSubmitProjectForms />
      </div>
    </AppWrapper>
  )
}
