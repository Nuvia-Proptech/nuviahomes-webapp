import React from 'react'
import { RecentSubmissionTables } from './RecentSubmissionTables'

export const RecentSubmission = () => {
  return (
    <div className="w-full max-w-3xl bg-white shadow rounded-lg p-3 font-urbanist my-5">
        <h2 className='text-textColorDark text-xl font-semibold mb-5'>Recent Submission</h2>
        <RecentSubmissionTables />
    </div>
  )
}
