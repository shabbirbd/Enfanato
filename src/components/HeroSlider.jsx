import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
 


const HeroSlider = () => {
        const texts = ["Wooden planes", "Colorful Spinners", "Beautifyl Teddys"];
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
                                <div className={`min-h-full -translate-y-[${translate}%] duration-500 flex items-center justify-center border-2 border-yellow-500`} key={i} >
                                    <h2 >{item} {i} {translate}</h2>
                                </div>
                            ))
                        }
                    </div>

                    
                </div>
        </div>
    );
};

export default HeroSlider;