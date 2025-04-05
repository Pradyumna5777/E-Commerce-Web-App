import React from 'react'

import WishListBtn from './WishListBtn'

const SideBtn = () => {
  return (
    <div className="flex md:h-auto h-[7vh] bg-white rounded-2xl py-4 px-2 w-[25vw] md:w-auto shadow-md md:flex-col gap-2 absolute md:top-[2vh] top-0 left-0 text-white text-xl">
    {/* <FilterBtn />
    <RemoveFilterBtn /> */}
    <WishListBtn />
  </div>
  )
}

export default SideBtn