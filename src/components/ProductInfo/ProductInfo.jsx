import React, { useState } from 'react'
import location from './SVG/location.svg'
import productData from './ProductData'
import {Link} from 'react-router-dom';
import { dropArrow } from '../Header';

const ProductInfo = () => {
  const [index, setIndex] = useState(0);
  const [isOpen , setIsOpen] = useState(false);
  const [width, setWidth] = useState("90%")

  const changeIndex = (ind) => {
    setIndex(ind);
    setIsOpen(false);
  }

  return (
    <>
      <div className='flex bg-[#141416] h-[114.6px] w-[1350px] border-[2px] rounded-lg border-[#35353580] mx-8 my-3 justify-around items-center'>
        <div className='w-[132px] h-[88.6px] border-r-[1px] border-[#35353580] content-center'>
          <span className='text-[#6F6F6F] text-center'>Catalog</span>
          <div className='flex'>
            <div className='text-[#F5F5F5] text-xl'>{productData[index].Catalog}</div>
            <Link><div><img src={dropArrow} alt="" onClick={() => setIsOpen(!isOpen)} /></div></Link>
          </div>
          {isOpen && (
            <div className='absolute z-10 border-[1px] border-[#F37413] rounded-md shadow-lg bg-black ring-1 ring-black text-white ring-opacity-5 focus:outline-none mt-2'>
              <ul className='text-lg space-y-4 text-center my-5'>
                {productData.map((val, ind) => (
                  <Link key={ind}>
                    <li onClick={() => changeIndex(ind)} key={ind} className='hover:text-[#F37413]'>{val.Catalog}</li>                  
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
        <div className='w-[132px] h-[88.6px] border-r-[1px] border-[#35353580] content-center'>
          <span className='text-[#6F6F6F]'>Sub Catalog</span>
          <div className='text-[#F5F5F5] text-xl'>{productData[index].SubCatalog}</div>
        </div>
        <div className='w-[132px] h-[88.6px] border-r-[1px] border-[#35353580] content-center'>
          <span className='text-[#6F6F6F]'>Brand Name</span>
          <div className='text-[#F5F5F5] text-xl'>{productData[index].BrandName}</div>
        </div>
        <div className='w-[132px] h-[88.6px] border-r-[1px] border-[#35353580] content-center'>
          <span className='text-[#6F6F6F]'>Model No</span>
          <div className='text-[#F5F5F5] text-xl'>{productData[index].ModelNo}</div>
        </div>
        <div className='w-[132px] h-[88.6px] border-r-[1px] border-[#35353580] content-center'>
          <span className='text-[#6F6F6F]'>Device category</span>
          <div className='text-[#F5F5F5] text-xl'>{productData[index].DeviceCategory}</div>
        </div>
        <div className='w-[132px] h-[88.6px] border-r-[1px] border-[#35353580] content-center'>
          <span className='text-[#6F6F6F] '>Manufacturer</span>
          <div className='text-[#F5F5F5] text-xl'>{productData[index].Manufacturer}</div>
        </div>
        <div className='w-[132px] h-[88.6px] border-r-[1px] border-[#35353580] content-center'>
          <span className='text-[#6F6F6F]'>Manufactured in</span>
          <div className='flex' >
            <img src={location} alt="" />
            <div className='text-[#F5F5F5] text-xl ml-3'>{productData[index].ManufacturedIn}</div>
          </div>
        </div>
        <div className='w-[132px] h-[88.6px]  border-[#35353580] content-center'>
          <span className='text-[#6F6F6F] text-[13px]'>Product ata capability</span>
          <div className=" text-[#F5F5F5] mt-2 relative w-full bg-[#434343] h-2 rounded overflow-hidden before:absolute before:top-0 before:left-0 before:h-full before:bg-[#F37413] before:content-[''] before:w-[70%] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:flex after:items-center after:justify-center after:text-black after:font-bold"></div>
          <div className='text-[#F5F5F5] text-xl ml-3'>{productData[index].ProductDataCapability}</div>
        </div>
      </div>
    </>
  )
}

export default ProductInfo