import React from 'react'
import {logo, arrow, fifth, first, fourth, point, second, sixth, third} from '../Sidebar/index.js'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
        <div className='flex flex-col bg-black w-[98px] h-[1024px] border-r-[1px] border-[#35353580] justify-between items-center justify-center '>
            <div className='mt-3'>
              <Link to={'queries/repair'}>
                <img className='h-12 w-12' src={logo} alt="Logo" />              
              </Link>
            </div>
            <div className='flex flex-col items-center justify-center space-y-8 mt-[-450px]'>
                <Link to={'queries/repair'}><img className='h-6 w-6' src={first} alt="first" /></Link>
                <Link to={'queries/repair'}><img className='h-6 w-6' src={third} alt="third" /></Link>
                <Link to={'queries/repair'}><img className='h-6 w-6' src={fourth} alt="fourth" /></Link>
                <Link to={'queries/repair'}><img className='h-6 w-6' src={sixth} alt="sixth" /></Link>
                <Link to={'queries/repair'}><img className='h-6 w-6' src={fifth} alt="fifth" /></Link>  
            </div>
            <div className='flex flex-col items-center justify-center space-y-8 mb-16 '>
              <Link to={'queries/repair'}><img className='h-5 w-5' src={arrow} alt="arrow" /></Link>  
              <Link to={'queries/repair'}><img className='h-5 w-5' src={point} alt="point" /></Link> 
            </div>
        </div>   
    </>
  )
}

export default Sidebar