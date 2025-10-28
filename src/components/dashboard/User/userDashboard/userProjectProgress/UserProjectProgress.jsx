import React from 'react'
import { UserProjectCard } from './UserProjectCard'

export const UserProjectProgress = () => {
  return (
    <div className="w-full max-w-3xl bg-white shadow rounded-lg p-3 font-urbanist">
    <h2 className="text-xl text-textColorDark font-semibold mb-6">
      Project Progress
    </h2>

    <div className="flex flex-wrap justify-between gap-5 p-2">
      <UserProjectCard
        title="Landmark Hotel Project"
        location="Agula Lake"
        progress={65}
        color="orange"
        status="In Progress"
      />
      <UserProjectCard
        title="Landmark Hotel Project"
        location="Agula Lake"
        progress={65}
        color="green"
        status="In Progress"
      />
    </div>
  </div>
  )
}
