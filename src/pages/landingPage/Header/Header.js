import React from 'react';
import banner1 from "../../../assets/bannar/banner1.png"
import banner2 from "../../../assets/bannar/banner2.png"
import banner3 from "../../../assets/bannar/banner3.png"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const banners=[
    {
        id:1,
        title:"Vegetable you should be eating",
        heading:"The Fresh Organic Vegetable",
        img:banner1
    },
    {
        id:1,
        title:"Vegetable you should be eating",
        heading:"The Fresh Organic Vegetable",
        img:banner2
    },
    {
        id:1,
        title:"Vegetable you should be eating",
        heading:"The Fresh Organic Vegetable",
        img:banner3
    }
]

const Header = () => {
    return (
        <div>
      <Swiper
        cssMode={true}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><div className='w-11/12 mx-auto flex flex-row items-center justify-center'>
            <div className='basis-1/2'>
                <h4 className=' text-green-700 font-bold text-xs md:text-base lg:text-base'>Vegetable you should be eating</h4>
                <h1 className='font-bold text-base md:text-xl lg:text-5xl mb-14 mt-7'>The Fresh Organic Vegetable </h1>
                <button className='text-sm bg-green-700 text-green-100 px-3 py-1 font-bold rounded-full'>Shop Now</button>
            </div>
            <div className='basis-1/2'>
            <img src={banner1} alt="" width="100%" />
            </div>

        </div></SwiperSlide>
        <SwiperSlide><div className='w-11/12 mx-auto flex flex-row items-center'>
            <div className='basis-1/2'>
                <h4 className=' text-green-700 font-bold text-xs md:text-base lg:text-base'>Vegetable you should be eating</h4>
                <h1 className='font-bold text-4xl mb-14 mt-7'>The Fresh Organic Vegetable </h1>
                <button className='text-sm bg-green-700 text-green-100 px-3 py-1 font-bold rounded-full'>Shop Now</button>
            </div>
            <div className='basis-1/2'>
            <img src={banner2} alt="" width="100%" />
            </div>

        </div></SwiperSlide>
        <SwiperSlide><div className='w-11/12 mx-auto flex flex-row items-center'>
            <div className='basis-1/2'>
                <h4 className=' text-green-700 font-bold text-xs md:text-base lg:text-base'>Vegetable you should be eating</h4>
                <h1 className='font-bold text-base md:text-xl lg:text-5xl mb-14 mt-7'>The Fresh Organic Vegetable </h1>
                <button className='text-sm bg-green-700 text-green-100 px-3 py-1 font-bold rounded-full'>Shop Now</button>
            </div>
            <div className='basis-1/2'>
            <img src={banner3} alt="" width="100%" />
            </div>

        </div></SwiperSlide>
        
      </Swiper>
        </div>
    );
};

export default Header;