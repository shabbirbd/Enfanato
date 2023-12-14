import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import plane from '../assets/plane.png';
import spinner from '../assets/spinner.png';
import teddy from '../assets/teddy.png';

 


const HeroSlider = () => {
        const texts = [ "Colorfull Fidget Spinners", "Teddy Bear Selection", "Wooden Planes"];
        const images = [spinner, teddy, plane,]
        const [index, setIndex] = useState(0)

        const nextText = useCallback(() => {
            setIndex((index + 1) % texts.length);
            console.log(index)
        }, [index, texts]);

        const prevText = useCallback(() => {
            setIndex((index - 1 + texts.length) % texts.length);
            console.log(index)
        }, [index, texts]);

        useEffect(()=>{
            const timeOut = ()=>{
                setTimeout(() => {
                    nextText()
                    console.log("here")
                }, 10000);
            };
            return ()=>clearTimeout(timeOut)
        },[index])


    return (
        <div className='bg-enfanato/50 rounded-xl xl:h-[550px] lg:h-[450px] md:h-[350px] h-[350px] m-3 relative '>
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
                                <div className={`min-h-full h-full duration-1000 flex flex-col items-end justify-center px-16`} key={i} style={{transform: `translateY(-${index * 100}%)`, transition: 'transform 1s'}} >
                                    <h2 className='translate-x-5 lg:text-8xl md:text-6xl text-4xl leading-snug text-elemental font-bold'>{item}</h2>
                                </div>
                            ))
                        }
                    </div>

                    <div className='relative flex items-center justify-center w-full'>
                        {
                            images?.map((item, i)=>(
                                    <div className={` flex items-center justify-center transition-all absolute ease-in-out min-w-full max-h-full duration-1000 p-5 `} key={i} style={{ transition: 'opacity 1s  ease-in-out', opacity: index === i ? 1 : 0}}>
                                        <img src={item} alt="item" className='h-full object-cover scale-110 lg:scale-95 ' />
                                    </div>
                            ))
                        }
                    </div>
                </div>
        </div>
    );
};

export default HeroSlider;