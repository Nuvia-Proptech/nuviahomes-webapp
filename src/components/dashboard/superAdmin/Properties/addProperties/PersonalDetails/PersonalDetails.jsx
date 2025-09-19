import { AppInput } from '@/components/shared/AppSetup/AppInput'
import React from 'react'

export const PersonalDetails = () => {
  return (
    <div className=''>
    
    <form action="" className='flex flex-wrap gap-4'>
      <AppInput label="First Name" placeholder="John" />

      <AppInput label="Last Name" placeholder="John" />

      <AppInput label="Username" placeholder="John" />

      <AppInput label="Email" placeholder="example@gmail.com" />

      <AppInput label="Phone No." placeholder="+234 9384 039 4593" />
    </form>
    </div>
  )
}
