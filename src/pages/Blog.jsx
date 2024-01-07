import React from 'react';
import { FaEye, FaTag } from 'react-icons/fa6';
import { IoCalendarOutline } from "react-icons/io5";
import { Link, useParams } from 'react-router-dom';
import CommentsFrom from '../components/CommentsFrom';
import { blogs } from '../data/blogs';


const Blog = () => {
    const id = parseInt(useParams().id);
    const blogData = blogs?.find((item)=> item.id === id);

    return (
        <div className='p-5'>
            <p className='text-sm  text-neutral-400'>Home / blog / {id}</p>

            <div className='mt-8'>
                <h2 className='text-2xl lg:text-3xl font-bold text-textal'>{blogData?.title}</h2>
                <div className='mt-5 text-[12px] text-neutral-400 flex items-center space-x-2'>
                    <p className='flex items-center space-x-1'>
                        <IoCalendarOutline />
                        <span>{blogData.date}</span>
                    </p>
                    <span className='block h-4 w-[1px] bg-neutral-400'/>
                    <p className='flex items-center space-x-1'>
                        <FaTag />
                        <span>{blogData.category}</span>
                    </p>
                    <span className='block h-4 w-[1px] bg-neutral-400'/>
                    <p className='flex items-center space-x-1'>
                        <FaEye />
                        <span>{blogData.views} views</span>
                    </p>
                </div>
                <div className='mt-5 text-sm text-textal flex flex-col space-y-3'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tincidunt gravida. Suspendisse in nulla quam. Aenean diam ligula, elementum non tempus sit amet, porta sit amet dolor. Praesent nec magna mi. Vivamus ac purus vel massa vestibulum blandit. In feugiat nibh vel sagittis maximus. In hac habitasse platea dictumst. Sed nec cursus ipsum, sit amet interdum nisl.</p>
                    <p>Ut condimentum condimentum egestas. Sed venenatis eleifend leo, eget facilisis ante sodales eget. Integer ullamcorper arcu sit amet nisi volutpat, a placerat augue fermentum. Ut risus elit, tincidunt sed sagittis non, suscipit eu libero. Sed diam diam, tempor sit amet massa placerat, volutpat sodales turpis. Sed finibus lacus ac neque pulvinar, ac sodales nisi aliquam. Ut iaculis auctor odio eu iaculis. Fusce sit amet sem sapien. Mauris vitae nisl ornare sapien ornare varius eget a magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tincidunt gravida. Suspendisse in nulla quam. Aenean diam ligula, elementum non tempus sit amet, porta sit amet dolor. Praesent nec magna mi. Vivamus ac purus vel massa vestibulum blandit. In feugiat nibh vel sagittis maximus. In hac habitasse platea dictumst. Sed nec cursus ipsum, sit amet interdum nisl.</p>
                    <p>Ut condimentum condimentum egestas. Sed venenatis eleifend leo, eget facilisis ante sodales eget. Integer ullamcorper arcu sit amet nisi volutpat, a placerat augue fermentum. Ut risus elit, tincidunt sed sagittis non, suscipit eu libero. Sed diam diam, tempor sit amet massa placerat, volutpat sodales turpis. Sed finibus lacus ac neque pulvinar, ac sodales nisi aliquam. Ut iaculis auctor odio eu iaculis. Fusce sit amet sem sapien. Mauris vitae nisl ornare sapien ornare varius eget a magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tincidunt gravida. Suspendisse in nulla quam. Aenean diam ligula, elementum non tempus sit amet, porta sit amet dolor. Praesent nec magna mi. Vivamus ac purus vel massa vestibulum blandit. In feugiat nibh vel sagittis maximus. In hac habitasse platea dictumst. Sed nec cursus ipsum, sit amet interdum nisl.</p>
                    <p>Ut condimentum condimentum egestas. Sed venenatis eleifend leo, eget facilisis ante sodales eget. Integer ullamcorper arcu sit amet nisi volutpat, a placerat augue fermentum. Ut risus elit, tincidunt sed sagittis non, suscipit eu libero. Sed diam diam, tempor sit amet massa placerat, volutpat sodales turpis. Sed finibus lacus ac neque pulvinar, ac sodales nisi aliquam. Ut iaculis auctor odio eu iaculis. Fusce sit amet sem sapien. Mauris vitae nisl ornare sapien ornare varius eget a magna.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean tincidunt tincidunt gravida. Suspendisse in nulla quam. Aenean diam ligula, elementum non tempus sit amet, porta sit amet dolor. Praesent nec magna mi. Vivamus ac purus vel massa vestibulum blandit. In feugiat nibh vel sagittis maximus. In hac habitasse platea dictumst. Sed nec cursus ipsum, sit amet interdum nisl.</p>
                    <p>Ut condimentum condimentum egestas. Sed venenatis eleifend leo, eget facilisis ante sodales eget. Integer ullamcorper arcu sit amet nisi volutpat, a placerat augue fermentum. Ut risus elit, tincidunt sed sagittis non, suscipit eu libero. Sed diam diam, tempor sit amet massa placerat, volutpat sodales turpis. Sed finibus lacus ac neque pulvinar, ac sodales nisi aliquam. Ut iaculis auctor odio eu iaculis. Fusce sit amet sem sapien. Mauris vitae nisl ornare sapien ornare varius eget a magna.</p>
                </div>
            </div>

            <div className='mt-10 flex flex-col items-center'>
                <p className='text-lg font-bold text-textal'>Share this post</p>
                <span className='block h-[3px] w-10 bg-enfanato'/>
                <div className='mt-5 w-full flex items-center space-x-3' >
                    <Link to="#" className='bg-sky-500 text-white px-3 py-1'>Facebook</Link>
                    <Link to="#" className='bg-red-800 text-white px-3 py-1'>Pinterest</Link>
                    <Link to="#" className='bg-sky-700 text-white px-3 py-1'>Linkedin</Link>
                </div>
            </div>

            <div className='mt-10 flex flex-col items-center'>
                <p className='text-lg font-bold text-textal'>Comments</p>
                <span className='block h-[3px] w-10 bg-enfanato'/>
            </div>

            <div className='mt-5'>
                <p className='text-textal font-semibold'>0 comments</p>
            </div>

            <div className='h-[2px] w-full bg-neutral-300 my-2'/>
                <CommentsFrom/>
            <div className='w-rull h-[2px] bg-neutral-300 mt-5'/>
        </div>
    );
};

export default Blog;