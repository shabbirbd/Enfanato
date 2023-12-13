import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import plane from '../assets/plane.png';
import spinner from '../assets/spinner.png';
import teddy from '../assets/teddy.png';
 


const HeroSlider = () => {
        const texts = [ "Colorfull Fidget Spinners", "Teddy Bear Selection", "Wooden Planes"];
        const images = [spinner, teddy, plane,]
        const [translate, setTranslate] = useState(0)

        const nextText = ()=>{
            if(translate < 200){
                setTranslate(translate + 100)
            } else {
                setTranslate(0)
            }
        }

        const prevText = ()=>{
            if(translate > 0){
                setTranslate(translate - 100)
            } else{
                setTranslate(200)
            }
        }

        useEffect(()=>{
            clearTimeout();
            setTimeout(() => {
                nextText()
            }, 5000);
        }, [translate])


    return (
        <div className='bg-enfanato/20 rounded-xl xl:h-[550px] lg:h-[450px] md:h-[350px] h-[350px] bg-white m-3 relative '>
                <div className='w-full h-full flex items-center justify-between px-2 absolute z-50'>
                    <button className='lg:h-16 md:h-12 h-10 lg:w-16 md:w-12 w-10 border border-neutral-300 rounded-full flex items-center justify-center bg-white' onClick={()=>prevText()}>
                        <FaArrowLeft />
                    </button>
                    <button className='lg:h-16 md:h-12 h-10 lg:w-16 md:w-12 w-10 border border-neutral-300 rounded-full flex items-center justify-center bg-white' onClick={()=> nextText()}>
                        <FaArrowRight />
                    </button>
                </div>

                <div className='absolute h-full grid grid-cols-2 w-full'>
                    <div className='overflow-hidden relative flex flex-col  w-full h-full'>
                        {
                            texts?.map((item, i)=>(
                                <div className={`min-h-full h-full  -translate-y-[${translate}%] duration-1000 flex flex-col items-end justify-center px-16`} key={i} >
                                    <h2 className='translate-x-5 lg:text-8xl md:text-6xl text-4xl leading-snug text-elemental font-bold'>{item}</h2>
                                </div>
                            ))
                        }
                    </div>

                    <div className='relative flex items-center justify-center w-full'>
                        {
                            images?.map((item, i)=>(
                                <div key={i} className={`${translate === i* 100 ? "opacity-100" : "opacity-0"} flex items-center justify-center transition-all ease-in-out absolute h-full duration-1000 p-5 `}>
                                    <img src={item} alt="img" className='w-full object-cover'/>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </div>
    );
};

export default HeroSlider;