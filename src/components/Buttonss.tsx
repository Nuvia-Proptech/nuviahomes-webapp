import React from 'react'

function Buttonss({btnContent, btnStyle}) {
  return (
    <button type="button" className={`text-gray-900 ${btnStyle} hover:bg-gradient-to-br focus:ring-4 focus:outline-none text-white rounded-lg px-5 py-2.5 text-center me-2 mb-2 text-xl font-semibold`}>{btnContent}</button>
  )
}

export default Buttonss