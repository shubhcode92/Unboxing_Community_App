import React, { useState } from 'react'
import {backBtn, notify, icon, dropArrow} from './index.js';
import {Link} from 'react-router-dom'



const Header = () => {
  const [userName, setUserName] = useState("shubhcode92");
  const [isOpen, setIsOpen] = useState(false);

  const getDate = () => {
    const date = new Date();

    const monthNames = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    const dayNames = [
      "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];
  
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const dayName = dayNames[date.getDay()];
    const paddedDay = day.toString().padStart(2, '0');
    const formattedDate = `${paddedDay} ${month}, ${dayName}`;
  
    return formattedDate;
  }


  return (
    <>
      <div className='flex justify-between w-[1350px] h-10 items-center mx-8 my-3'>
        <div className='flex'>
          <Link to={'queries/repair'}>          
            <img className='mr-4 mt-3' src={backBtn} alt="backArrow" />
          </Link>
          <Link to={'queries/repair'}>          
            <h1 className=' text-[#F37413] font-semibold text-[28px]'>Product Information</h1>
          </Link>
        </div>
        <div className='flex space-x-6 items-center'>
          <div className='text-[#6F6F6F] hover:text-white'>{getDate()}</div>
          <Link to={'queries/repair'}><div><img src={notify} alt="Notify" /></div></Link>
          <div className=''>
            <div className='text-white'>{userName}</div>
            <span className='text-[#6F6F6F] font-thin text-[14px]'>Expert</span>
          </div>
          <div className='relative z-10 flex items-center'>
            <div className='items-center'><img src={icon} alt="" /></div>
            <Link><div><img src={dropArrow} alt="" onClick={() => setIsOpen(!isOpen)} /></div></Link>
            {isOpen && (
              <div className='origin-top-right absolute border-[1px] border-[#F37413] right-0 top-14 mt-2 w-32 rounded-md shadow-lg bg-black ring-1 ring-black text-white ring-opacity-5 focus:outline-none'>
                <ul className=' text-lg space-y-4 text-center my-5'>
                  <li className='hover:text-[#F37413]'>Your Profile</li>
                  <li className='hover:text-[#F37413]'>Setting</li>
                  <li className='hover:text-[#F37413]'>Help</li>
                  <li className='hover:text-[#F37413]'>Log Out</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Header