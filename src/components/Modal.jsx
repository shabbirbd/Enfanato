import { Dialog } from "@headlessui/react";
import { Carousel } from "@material-tailwind/react";
// import CarouselItem from "@material-tailwind/react/CarouselItem";


import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";


const Modal = ({openModal, setOpenModal , data}) => {
    const [activeSlide, setActiveSlide] = useState(false)

    return (
        <div>
            <Dialog open={openModal} onClose={() => setOpenModal(false)} className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4 py-8">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                    <Dialog.Title className="text-lg font-medium text-gray-800">Product Details</Dialog.Title>
                    <Dialog.Description className="mt-2 text-sm text-gray-500">{data?.description}</Dialog.Description>
                    <Carousel
                        className="mt-4 rounded-xl"
                    >
                        {data?.images.map((item, i) => (
                            <div className="" key={i}> 
                                    <img
                                        src={item}
                                        alt={`image ${i + 1}`}
                                        className="h-full w-full object-cover"
                                    />
                            </div>
                        ))}
                    </Carousel>
                    <button
                        className="absolute top-2 right-2 p-2 text-gray-800 rounded-full outline-none hover:bg-gray-200 focus:ring-2 ring-offset-2 ring-indigo-600"
                        onClick={() => setOpenModal(false)}
                    >
                        <FaTimes />
                    </button>
                    </div>
                </div>  
            </Dialog>
        </div>
    );
};

export default Modal;