import React from 'react';
import { FaCalendarAlt, FaRegEye } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { blogs } from '../data/blogs';




const Blogs = () => {
    return (
        <div className='mt-16 flex flex-col items-center '>
            <h2 className='text-3xl md:text-4xl text-textal font-bold'>Blog</h2>
            <p className='md:w-[70px] w-[60px] h-[4px] bg-textal mt-1'></p>

            <div className='w-full mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-0'> 
                {
                    blogs?.map((item, i)=>(
                        <div className=' w-full px-3 duration-500 hover:scale-[102%]' key={i}>
                            <img src={item.banner} alt="banner" className='w-full object-cover'/>
                            <h3 className='mt-3 text-md text-textal font-semibold'>{item.title}</h3>

                            <span className='h-[1px] w-full bg-neutral-300 mt-3 block'></span>

                            <p className='text-sm text-neutral-600 mt-3' >
                                {item.article} 
                                <span className='cursor-pointer underline'>
                                    Read more..
                                </span>
                            </p>

                            <span className='h-[1px] w-full bg-neutral-300 mt-3 block'></span>

                            <div className='flex items-center text-sm mt-2 text-textal font-semibold space-x-3'>
                                <p className='flex items-center space-x-2'>
                                    <FaCalendarAlt />
                                    <span>{item.date}</span>
                                </p>
                                <p className='flex items-center space-x-2'>
                                    <IoPricetags />
                                    <span>{item.category}</span>
                                </p>
                                <p className='flex items-center space-x-2'>
                                    <FaRegEye />
                                    <span>{item.views}</span>
                                </p>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Blogs;