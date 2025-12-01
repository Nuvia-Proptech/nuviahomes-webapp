import { AppInput } from '@/components/shared/AppSetup/AppInput'
import { SelectDropDown } from '@/components/shared/SelectDropDown'
import React from 'react'
import { FileUploadSection } from './FileUploadSection'
import { AppTextarea } from '@/components/shared/AppSetup/AppTextarea'

export const EditProjectDocument = () => {
  return (
    <div className="my-8">
    <p className="text-textColor/90 text-sm font-normal font-publicSans">
       Document Upload
    </p>

    <FileUploadSection />

{/* Forms Sections */}
    <div className="my-5 flex flex-wrap justify-center items-center md:justify-start gap-4">
      {/* BedRooms */}
      <AppInput label="Bedrooms" placeholder="5" />

      {/* Floor number */}
      <AppInput label="Floor No" placeholder="8" />

      {/* Bathrooms */}
      <AppInput label="Bathrooms" placeholder="3" />

      {/* property type */}
      <SelectDropDown
        className="flex-col justify-start items-start gap-0.5"
        selectClassName="w-[360px] h-10"
        label="Furnished Status"
        options={
          <>
            <option value="10" disbabled defaultValue={true}>
              Select Furnished Status
            </option>
            <option value="10">Completed</option>
            <option value="5">Pending</option>
          </>
        }
      />

<AppTextarea
            className="w-full"
            label="Additional Notes"
            placeholder="No. 13 off Kubwa express way"
            name="street"
          />
    </div>
    </div>
  )
}
