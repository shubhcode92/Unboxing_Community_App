import React from 'react'

const Question = ({q}) => {
  return (
    <>
        <div className='ml-4 space-y-2 mt-4'>

            {/* take props to handle multiple Questions */}
            <div className=' font-medium text-[16px] text-[#F5F5F5]'>{q}</div>
            <div className='font-medium text-[16px] text-[#F5F5F5]'>Answer</div>
            <input className='bg-[#353535] border-[1px] border-[#434343] rounded-md px-[24px] py-[24px] h-[48px] w-[947px]' type="text" placeholder='Type the answer here' />
        </div>
    </>
  )
}

export default Question