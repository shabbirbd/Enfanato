import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import iconrobot from '../assets/iconrobot.png';
import iconspinner from '../assets/iconspinner.png';
import iconteddy from '../assets/iconteddy.png';
 


const HeroSlider = () => {
        const texts = ["Wooden planes", "Colorful Spinners", "Beautifyl Teddys"];
        const images = [iconspinner, iconteddy, iconrobot]
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


    return (
        <div className='border-2 border-green-600 xl:h-[650px] lg:h-[550px] md:h-[450px] h-[350px] bg-white m-3 relative '>
                <div className='w-full h-full flex items-center justify-between px-5 absolute z-50'>
                    <button className='h-16 w-16 border border-neutral-300 rounded-full flex items-center justify-center' onClick={()=>prevText()}>
                        <FaArrowLeft />
                    </button>
                    <button className='h-16 w-16 border border-neutral-300 rounded-full flex items-center justify-center' onClick={()=> nextText()}>
                        <FaArrowRight />
                    </button>
                </div>

                <div className='absolute border-2 h-full grid grid-cols-2 border-red-500 w-full'>
                    <div className='overflow-hidden relative flex flex-col  border-2 border-violet-600 w-full'>
                        {
                            texts.map((item, i)=>(
                                <div className={`min-h-full h-full -translate-y-[${translate}%] duration-500 flex items-center justify-center `} key={i} >
                                    <h2 >{item} {i} {translate}</h2>
                                </div>
                            ))
                        }
                    </div>

                    <div className='border-2 border-sky-500 overflow-hidden relative flex items-center justify-center w-full'>
                        {
                            images.map((item, i)=>(
                                <div key={i} className={`${translate === i* 100 ? "opacity-100" : "opacity-0"} flex items-center justify-center transition-all ease-in-out absolute h-full duration-1000  p-5`}>
                                    <img src={item} alt="img" className='border-2 h-full border-red-700 '/>
                                </div>
                            ))
                        }
                    </div>
                </div>
        </div>
    );
};

export default HeroSlider;