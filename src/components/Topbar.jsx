import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaInstagram, FaPinterestP } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import Wave from './Wave';




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
        <div className='h-12 md:h-14  relative w-full bg-transparent z-50 '>
            <Wave rotate fill="#FAB6B6"/>
            
            <div className='flex flex-row items-center space-x-2 relative px-5 top-2'>
                {
                    social?.map((item, i)=>(
                        <p key={i} className='cursor-pointer font-semibold text-sm text-white hover:text-sky-600 duration-300 hover:text-md'>
                            {item.icon}
                        </p>
                    ))
                }
            </div>
        </div>
    );
};

export default Topbar;