import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestP } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";




const Topbar = () => {
    const social = [
        {
            link: '#',
            icon: <FaFacebookF />
        },
        {
            link: '#',
            icon: <FaInstagram />
        },
        {
            link: '#',
            icon: <FaPinterestP />
        },
        {
            link: '#',
            icon: <FaGooglePlusG />
        },
        {
            link: '#',
            icon: <TfiYoutube />
        },
    ]

    return (
        <div className='h-12 md:h-14  relative w-full bg-white'>
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shapeRendering="auto" fill="#FAB6B6" className='transform rotate-180 absolute top-0 md:h-16 h-12 '>
                <defs>
                <path id="wavepath" d="M 0 2000 0 500 Q 19 274 38 500 t 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0  v1000 z" />
                </defs>
                <g >
                <use xlinkHref="#wavepath" y="-97" fill="#FAB6B6">
                </use>
                </g>
            </svg>
            
            <div className='flex flex-row z-50 items-center space-x-2 relative px-5 top-2'>
                {
                    social?.map((item, i)=>(
                        <p key={i} className='cursor-pointer font-semibold text-sm text-white hover:text-sky-600 duration-300'>
                            {item.icon}
                        </p>
                    ))
                }
            </div>
        </div>
    );
};

export default Topbar;