import React from 'react';
import { Link } from 'react-router-dom';
import { navlinks } from '../../data/navLinks';


const Navlinks = () => {
    return (
        <div className='bg-white lg:py-7 py-5 relative  z-30 hidden lg:block shadow-lg '>
            <ul className='flex items-center justify-center space-x-8'>
                {
                    navlinks?.map((item, i)=>(
                        <li key={i}>
                            <Link to={item.link} className='flex flex-col items-center space-y-3 text-sm font-semibold text-neutral-600 hover:text-elemental duration-300 '>
                                <img src={item.icon} alt="icon" className='h-10  object-cover hover:scale-105 duration-500 '/>
                                <span >{item.title}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Navlinks;