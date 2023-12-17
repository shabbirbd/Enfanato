import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";





const Footer = () => {
    const footerLinks = [
        {
            heading: "Information",
            links: ["Delivery", "Legal Notice", "Terms & Conditions", "About us"]
        },
        {
            heading: "Account",
            links: ["My account", "Guest Tracking", "Login", "Address", "Order History"]
        }
    ];
   
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

                <div className='mt-6 w-full h-[1px] bg-neutral-100'></div>

                <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-2 mt-5'>
                    <div className=' grid grid-cols-2 gap-3 px-5'>
                        {
                            footerLinks?.map((item, i)=>(
                                <div key={i} className=''>
                                    <h3 className='font-semibold text-md text-white'>{item.heading}</h3>
                                    <span className='block h-[3px] w-8 mt-1 bg-white'></span>
                                    <ul className='mt-2'>
                                        {
                                            item.links?.map((item, i)=>(
                                                <li key={i} className='font-base text-sm flex items-center text-neutral-100/70 hover:text-white duration-300 space-x-1 cursor-pointer group'>
                                                    <span className='duration-300 group-hover:translate-x-1'>{`>`}</span>
                                                    <p>{item}</p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>

                    <div className=' grid grid-cols-3 gap-3'>
                        <div className=' col-span-1'>
                            <h3 className='font-semibold text-md text-white'>Contact us</h3>
                            <span className='block h-[3px] w-8 mt-1 bg-white'></span>
                            <ul className='mt-2'>
                                <li className='font-base text-sm text-neutral-100/70 hover:text-white duration-300'>
                                    <p>Copmany name</p>
                                </li>
                                <li className='font-base text-sm text-neutral-100/70 hover:text-white duration-300 flex items-center space-x-2'>
                                    <SlLocationPin />
                                    <p>The address</p>
                                </li>
                                <li className='font-base text-sm text-neutral-100/70 hover:text-white duration-300 flex items-center space-x-2'>
                                    <FaPhone />
                                    <p>7777 7777 7777</p>
                                </li>
                                <li className='font-base text-sm text-neutral-100/70 hover:text-white duration-300 flex items-center space-x-2  '>
                                    <MdOutlineMailOutline />
                                    <p>someemail@email.com</p>
                                </li>
                            </ul>
                        </div>
                        <div className='col-span-2'>
                            <div>
                                <h3 className='font-semibold text-md text-white'>Some Info</h3>
                                <span className='block h-[3px] w-8 mt-1 bg-white'></span>
                                <p className='mt-2 text-sm text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam molestie elit mi, a semper odio scelerisque et. In ac fermentum massa.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-6 w-full h-[1px] bg-neutral-100'></div>
                
                <div>
                    <p className='text-sm my-5 text-white'>All right reserved @enfanato</p>
                </div>

            </div>

        </div>
    );
};

export default Footer; 