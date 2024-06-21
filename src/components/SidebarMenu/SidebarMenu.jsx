import React from 'react'

const SidebarMenu = () => {
  const rowStyle = 'pl-[28px] h-[42px] py-[10px] hover:text-[#F37413] hover:bg-[#292929]';
  const points = ["Gallery", "Specification", "Key Notes", "Company Profile", "Performance", "Experience", "Review", "Safety", "Queries"];
  return (
    <div className='w-[280px] h-[765px] border-[2px] border-[#35353580] bg-[#141416] rounded-r-md mx-8 text-white font-semibold text-[18px]'>
      <ul className='space-y-6 mt-3'>
        {/* map function to render all key points */}
        {points.map((val, ind) => (<li key={ind} className={rowStyle}>{val}</li>))}
      </ul>
      <ul className='space-y-6 mt-3'>
        <li className='pl-[42px] h-[42px] py-[10px] text-[#F37413] bg-[#292929]'>Pre-Purchase</li>
        <li className='pl-[42px] h-[42px] py-[10px] hover:text-[#F37413] hover:bg-[#292929]'>Post-Purchase</li>
      </ul>
    </div>
  )
}

export default SidebarMenu