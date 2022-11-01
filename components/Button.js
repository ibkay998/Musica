import React from 'react'

const Button = ({name}) => {
  return (
    <div className='ml-4 border-white border-2 px-2 py-2 cursor-pointer rounded-2xl h-40px hover:bg-[#FACD66] font-quicksand text-lg'>
      {name}
    </div>
  )
}

export default Button
