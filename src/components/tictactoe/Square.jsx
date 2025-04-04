import React from 'react'

const Square = (props) => {
  const {value,onClick}= props
  
  return (
    <div onClick={onClick}  className='flex border-2 m-3 w-[100px] h-[100px] items-center justify-center bg-indigo-200 text-4xl cursor-pointer'>
      <button >{value}</button>
    </div>
  )
}

export default Square