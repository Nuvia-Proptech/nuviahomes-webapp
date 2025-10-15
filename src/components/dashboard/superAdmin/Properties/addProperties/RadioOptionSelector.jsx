import { InnerCircledBorderIcon } from '@/components/shared/Icons/InnerCircledBorderIcon'
import React, { useState } from 'react'

export const RadioOptionSelector = ({title, options}) => {
    const [selectedOption, setSelectedOption] = useState(options[0])
  return (
    <div>
    <p className="text-sm text-textColor font-normal font-publicSans my-2">
      {title}
    </p>
    {options.map((item) => (
      <div
        onClick={() => setSelectedOption(item)}
        className="flex items-center gap-2 my-3"
      >
        {selectedOption === item ? (
          <InnerCircledBorderIcon />
        ) : (
          <p
            className={`w-4.5 h-4.5 rounded-full border border-neutralColor-70}`}
          ></p>
        )}
        <p className="capitalize text-textColor font-urbanist text-sm font-normal">
          {item}
        </p>
      </div>
    ))}
  </div>
  )
}
