import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";


const Footer = () => {
    return (
        <div className='bg-white relative'>
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shapeRendering="auto" fill="#95B9E5" className={`transform absolute md:-top-16 -top-14  md:h-16 h-14 z-30`}>
                <defs>
                <path id="wavepath" d="M 0 2000 0 500 Q 19 274 38 500 t 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0  v1000 z" />
                </defs>
                <g >
                <use xlinkHref="#wavepath" y="-97" fill="#95B9E5">
                </use>
                </g>
            </svg>
            
            <div className='bg-[#95B9E5] flex flex-col items-center z-50'>
                <div className='lg:px-0 px-5 flex flex-col lg:flex-row items-center justify-center space-x-0 lg:space-x-3'>
                    <h2 className='font-semibold text-lg text-white flex-shrink-0 lg:-translate-y-2 -translate-y-0'>Sign up to newsletter</h2>
                    <div className='flex flex-col items-center w-full max-w-96 '>
                        <form action='submit' className='flex items-center justify-between bg-white w-full'>
                            <input type="text" placeholder='your email address' className='focus:outline-none m-2 text-md' />
                            <button type='button' className='bg-white h-full duration-300 hover:bg-enfanato px-3 hover:text-white font-bold text-lg'>
                                <MdOutlineMailOutline />    
                            </button>
                        </form>
                        <p className='max-w-full font-base block text-[12px] text-neutral-100'>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
                    </div>
                </div>

                <div className='mt-5 w-full h-[1px] bg-neutral-100'></div>

            </div>

        </div>
    );
};

export default Footer; 