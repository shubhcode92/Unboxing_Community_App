import React from 'react'
import { Header, PrepurchaseNav, ProductInfo, Sidebar, SidebarMenu } from './components'

const App = () => {
  return (
    <>
      <div className='flex'>
        <div>
          <Sidebar />
        </div>
        <div>
          <Header />
          <div className='w-[1350px] border-[1px] border-[#35353580] mx-8 my-3'></div>
          <ProductInfo />
          <div className='flex'>
            <SidebarMenu />
            <PrepurchaseNav />
          </div>
        </div>
      </div>
    </>
  )
}

export default App