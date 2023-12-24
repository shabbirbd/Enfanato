import { Dialog } from '@headlessui/react';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { FaStar } from "react-icons/fa6";


const ReviewModal = ({reviewModal, setReviewModal, setReview}) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const ratings = [1,2,3,4,5];

    const handleSubmitReview = ()=>{
        setReviewModal(false)
        setReview(true)
    }

    return (
        <Dialog open={reviewModal} onClose={()=> setReviewModal(false)} className="fixed inset-0 z-50">
            <div className='flex items-center justify-center min-h-screen '>
                <Dialog.Overlay className="fixed inset-0 bg-sky-600 opacity-30" />

                <div className='outline-dashed outline-enfanato lg:w-5/12 md:w-7/12 w-9/12  mx-auto shadow-lg bg-white relative rounded-md'>
                    <button
                        className="absolute top-3 right-3 p-2 text-gray-800 rounded-full outline-none hover:bg-gray-200 hover:outline-dashed outline-1 outline-black"
                        onClick={() => setReviewModal(false)}
                    >
                        <FaTimes />
                    </button>
                    
                    <h3 className='p-4 text-textal font-normal text-md'>Write a review</h3>

                    <div className='w-full h-[1px] bg-neutral-300'/>
                    
                    <form action="submit" className='flex flex-col space-y-3 items-center p-4'>
                        <div className='flex items-center justify-between px-3 lg:px-16 space-x-2 w-full'>
                            <p className='text-textal text-sm'>Name: </p>
                            <input type="text" placeholder='name' className='w-6/12 px-2 h-10 outline-dashed outline-1 outline-enfanato'/>
                        </div>
                        <div className='flex items-center justify-between px-3 lg:px-16  space-x-2 w-full'>
                            <p className='text-textal text-sm'>Title: </p>
                            <input type="text" placeholder='title' className='w-6/12 px-2 h-10 outline-dashed outline-1 outline-enfanato'/>
                        </div>
                        <div className='flex items-center justify-between px-3 lg:px-16  space-x-2 w-full'>
                            <p className='text-textal text-sm'>Rating: </p>
                            <div className='w-6/12 flex items-center space-x-1'>
                                {
                                    ratings.map((item)=>(
                                        <button 
                                            type='button' 
                                            key={item} 
                                            onClick={()=>setRating(item)}
                                            onMouseOver={()=> setHover(item)}
                                            onMouseOut={()=> setHover(0)}
                                            className={`text-xl ${item <= (hover || rating) ? "text-yellow-400" : "text-neutral-300"}`}
                                        >
                                            <FaStar />
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        
                        <div className='flex items-center justify-between px-3 lg:px-16  space-x-2 w-full'>
                            <p className='text-textal text-sm'>Comment: </p>
                            <textarea type="textarea" placeholder='title' className='w-6/12 px-2 h-16 outline-dashed outline-1 outline-enfanato'/>
                        </div>
                    </form>

                    <div className='w-full h-[1px] bg-neutral-300'/>

                    <div className='py-5 px-5 w-full flex items-center justify-end '>
                        <button className='h-10 bg-enfanato px-3 text-white hover:outline-dashed outline-1 outline-black' onClick={()=> handleSubmitReview()}>Submit review</button>
                    </div>

                </div>
            </div>
        </Dialog>
    );
};

export default ReviewModal;