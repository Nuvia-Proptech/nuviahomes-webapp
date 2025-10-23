import { UserTransactionsIndex } from '@/components/dashboard/User/Transactions/UserTransactionsIndex'
import React from 'react'

const page = () => {
  return (
    <section className='flex justify-center items-center text-black'>
        <UserTransactionsIndex />
    </section>
  )
}

export default page