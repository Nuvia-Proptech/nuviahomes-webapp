import { AppWrapper } from '@/components/shared/AppSetup/AppWrapper'
import React from 'react'
import { SuperAdminHeader } from '../../SuperAdminHeader'
import { CloseSquareIcon } from '@/components/shared/Icons/CloseSquareIcon'
import { TickGoodSquareIcon } from '@/components/shared/Icons/TickGoodSquareIcon'
import { EditProjectForms } from './EditProjectForms'

export const EditProjectIndex = () => {
  return (
    <AppWrapper>
         <SuperAdminHeader />
      <div className="py-5 flex justify-between items-center px-4">
        <div>
          <p className="md:text-4xl font-semibold text-textColor font-urbanist">
            Projects
          </p>
          <p className="text-textColor text-sm font-normal font-urbanist">
            A quick glance at all properties
          </p>
        </div>

        <div className="flex gap-3">
          <button className="p-2.5 bg-dangerColor/15 rounded-xl flex flex-row gap-2 w-fit h-fit cursor-pointer">
            <CloseSquareIcon />
            <p className="text-dangerColor text-sm font-normal font-publicSans">
              Reject
            </p>
          </button>

          <button className="p-2.5 bg-successColor/15 rounded-xl flex flex-row gap-2 w-fit h-fit cursor-pointer">
            <TickGoodSquareIcon />
            <p className="text-successColor text-sm font-normal font-publicSans">
              Approve
            </p>
          </button>
        </div>
      </div>

      <EditProjectForms />

    </AppWrapper>
  )
}
