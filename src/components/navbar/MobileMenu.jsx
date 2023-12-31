import { Dialog } from '@headlessui/react';
import React from 'react';
import { ImCross } from "react-icons/im";
import { Link } from 'react-router-dom';
import { navlinks } from '../../data/navLinks';


const MobileMenu = ({open, setOpen}) => {

    return (
            <Dialog open={open} onClose={()=> setOpen(false)} className={`w-1/2 min-h-screen h-full fixed top-0 left-0 right-0 bottom-0 z-[100]  lg:hidden bg-white flex flex-col justify-between`}>
                    <div className='w-full flex justify-end items-center h-16 px-5 bg-elemental'>
                        <button className='text-sm font-semibold text-white  p-3' onClick={()=>setOpen(false)}>
                            <ImCross />
                        </button>
                    </div>
                    <ul className='flex-1  mx-3'>
                        {
                            navlinks?.map((item, i)=>(
                                <li key={i} className='h-16 border-b border-neutral-200 shadow-sm flex items-center'>
                                    <Link to={item.link} className='flex items-center space-x-3 w-full text-neutral-600 hover:text-elemental duration-300'>
                                        <img src={item.icon} alt="icon" className='h-8' />
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='w-full h-16 bg-elemental flex items-center justify-end px-5'>
                        <button className='text-sm text-white'>Sign in</button>
                    </div>
            </Dialog>
    );
};

export default MobileMenu;