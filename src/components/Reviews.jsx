import React from 'react';
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { reviews } from '../data/reviews';



const SliderButton = ({children, type})=>{
    const swiper = useSwiper()
    return(
        <button onClick={()=> type === "next" ? swiper.slideNext() : swiper.slidePrev()}>{children}</button>
    )
}


const Reviews = () => {
    return (
        <div className='mt-14 bg-main-pattern2 bg-[length:250px_250px] bg-repeatrelative'>
            <div className=' w-full min-h-full bg-sky-900/80 py-16  flex flex-col items-center '>
                <h2 className='text-3xl font-bold text-white'>What parent says</h2>
                <p className='block h-1 w-[60px] bg-white mt-1'></p>

                <div className='max-w-full mt-10'>
                <Swiper className="mySwiper" loop={true}>
                    {
                        
                        reviews?.map((item)=>(
                                <SwiperSlide key={item.id}>
                                    <div className='flex flex-col items-center justify-center px-5'>
                                        <p className='text-white max-w-3xl text-center px-5'>{item.review}</p>
                                        <div className='mt-10 flex items-center space-x-3'>
                                            <img src={item.avater} alt="avater" className='h-14 w-14 rounded-full object-contain'/>
                                            <div>
                                                <p className='text-md font-semibold text-white'>{item.name}</p>
                                                <span className='font-normal text-white text-sm'>{item.title}</span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                        ))
                    }
                    <div className='w-full z-40 flex items-center justify-between px-3 absolute -translate-y-[300%] text-white font-bold text-2xl'>
                       <SliderButton>
                        <MdOutlineArrowBackIos />
                       </SliderButton>
                       <SliderButton type="next">
                        <MdArrowForwardIos />
                       </SliderButton>
                    </div>

                </Swiper>
                
                </div>
            </div>
        </div>
    );
};

export default Reviews;