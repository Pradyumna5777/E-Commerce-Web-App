import React, { useContext, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../swiperPage.css";
import { Navigation, Pagination } from "swiper/modules";
import ItemContext from "./context/itemContext";

export default function SwiperPage2() {
  const {similarItems,setObj,obj,isMobile } = useContext(ItemContext);
  const swiperItem=(items)=>{
    setObj(items);

  }
  const same=similarItems.filter((item)=>{
    return item.id !== obj.id;
  })

 
  return (
      <Swiper
        slidesPerView={isMobile?4:5}
        spaceBetween={isMobile?5:10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper w-[100%]"
      >
        {
       
       same.map((items, index) =>  (
           
              <SwiperSlide onClick={()=>swiperItem(items,index)} key={index} className="flex flex-col cursor-pointer">
                
                {
                  items.image?
                  <div className="md:h-[28vh] h-[15vh]"><img loading="lazy" src={items.image} alt="" /></div>:
                  <div className="md:h-[28vh] h-[15vh]"><img loading="lazy" src={items.images[0]} alt="" /></div>

                }
                <div className="flex flex-col items-start">
                  {
                    items.model?
                  <div className="font-black md:text-sm text-xs">
                    {items.model.slice(0, 20) + "..."}
                  </div>:''
                  }
                  <div className="font-black md:text-sm text-xs">Price: ₹{items.price}</div>
                </div>
              </SwiperSlide>
          )
        )}
      </Swiper>
  );
}
