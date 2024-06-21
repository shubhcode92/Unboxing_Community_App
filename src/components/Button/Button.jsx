import React from 'react'
import plus from './SVG/plus.svg'

const Button = () => {
  return (
    <>
      <div className='mt-8'>
        <button className='flex h-[60px] w-[947px] border-[2px] border-dashed px-[391px] py-[20px] border-[#F37413] ml-4 text-white'>
          <img className='' src={plus} alt="Plus" />
          <div className='w-[152px] h-[19px] text-sm'>Add more questions</div>
        </button>
      </div>
    </>
  )
}

export default Button