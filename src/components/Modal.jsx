import { Dialog } from "@headlessui/react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";


// import CarouselItem from "@material-tailwind/react/CarouselItem";


import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";


const Modal = ({openModal, setOpenModal , data}) => {
    const [activeSlide, setActiveSlide] = useState(false);
    const [index, setIndex] = useState(0)

    return (
            <Dialog open={openModal} onClose={() => setOpenModal(false)} className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4 py-8 border-2 border-green-300">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <div className="relative lg:w-7/12 md:w-9/12 w-10/12  p-4 mx-auto bg-white rounded-md shadow-lg border-2 border-red-600 flex items-center justify-center">                    
                        <button
                            className="absolute top-2 right-2 p-2 text-gray-800 rounded-full outline-none hover:bg-gray-200 "
                            onClick={() => setOpenModal(false)}
                        >
                            <FaTimes />
                        </button>

                        {/* Modal data controller buttons */}
                        <div className="absolute w-full flex items-center justify-between">
                            <button className="relative -translate-x-10 bg-white/70 text-2xl font-bold duration-300 hover:bg-white py-5 px-1" >
                                <MdOutlineArrowBackIos />
                            </button>
                            <button className="relative translate-x-10 bg-white/70 text-2xl font-bold duration-300 hover:bg-white py-5 px-1">
                                <MdOutlineArrowForwardIos />
                            </button>
                        </div>

                        {/* Main modal content */}
                        <div className="border-2 border-green-500 relative mt-5 flex  items-center justify-center w-full space-x-1">
                            <div className="border border-neutral-600 w-full relative flex-1 flex items-center justify-center">
                                <img src={data.images[index]} alt="image" className={`lg:h-[500px] object-cover  duration-500`} />
                                {/* image carousel controller */}
                                <div className="w-full  absolute flex items-center justify-between">
                                    <button className={`relative  bg-black/10 text-2xl font-bold duration-300 hover:bg-black/50 hover:text-white py-5 px-1 ${index > 0 ? "opacity-100" : "opacity-30"}`} onClick={()=>index > 0 && setIndex(index-1)}>
                                        <MdOutlineArrowBackIos />
                                    </button>
                                    <button className={`relative  bg-black/10 text-2xl font-bold duration-300 hover:bg-black/50 hover:text-white py-5 px-1 ${index < 1 ? "opacity-100" : "opacity-30"}`} onClick={()=>index < 1 && setIndex(index + 1)}>
                                        <MdOutlineArrowForwardIos />
                                    </button>
                                </div>
                            </div>
                            <div className="flex-1 border border-neutral-300">
                                info
                            </div>
                        </div>
                    </div>
                </div>  
            </Dialog>
    );
};

export default Modal;