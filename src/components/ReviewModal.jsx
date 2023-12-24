import { Dialog } from '@headlessui/react';
import React from 'react';
import { FaTimes } from 'react-icons/fa';

const ReviewModal = ({reviewModal, setReviewModal}) => {
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
                    
                    <div className='p-4'>review</div>
                </div>
            </div>
        </Dialog>
    );
};

export default ReviewModal;