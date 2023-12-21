import { Dialog } from "@headlessui/react";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { PiShoppingCartFill } from "react-icons/pi";






import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import Counter from "./Counter";


const Modal = ({openModal, setOpenModal , data}) => {
    const [activeSlide, setActiveSlide] = useState(false);
    const [index, setIndex] = useState(0)

    return (
            <Dialog open={openModal} onClose={() => setOpenModal(false)} className="fixed inset-0 z-10 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen px-4 py-8 border-2 border-green-300">
                    <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                    <div className="relative lg:w-7/12 md:w-9/12 w-10/12  p-4 mx-auto bg-white rounded-md shadow-lg border-2 border-red-600 flex items-center justify-center">                    
                        <button
                            className="absolute top-2 right-2 p-2 text-gray-800 rounded-full outline-none hover:bg-gray-200 hover:outline-dashed outline-1 outline-black"
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
                        <div className="border-2 border-green-500 relative mt-5 flex  items-center w-full space-x-1">
                            <div className="border border-neutral-600 w-full relative flex-1 flex items-center justify-center overflow-hidden" >
                                <img src={data.images[index]} alt="image" className={`lg:h-[500px] object-cover object-center hover:object-left-top transform hover:scale-150 ease-in duration-500`} />
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

                            <div className="flex-1 h-full flex flex-col items-center">
                                <h2 className="text-2xl font-bold text-textal">{data.title}</h2>
                                <p className="text-xl font-bold text-elemental">${data.price}</p>

                                <div className="flex flex-col items-center mt-3">
                                    <p className="text-sm font-bold text-textal my-2">Size</p>
                                    <select name="size" className="outline-dashed outline-1 outline-enfanato p-2" onChange={(e)=> console.log(e.target.value)}>
                                        <option value="s">s</option>
                                        <option value="m">m</option>
                                        <option value="l">l</option>
                                    </select>
                                </div>

                                <div className="mt-3 flex flex-col items-center">
                                    <p className="text-sm font-bold text-textal my-2">Color</p>
                                    <div className="flex items-center justify-center space-x-3">
                                        <button onClick={()=>console.log("Green")} className="h-5 w-5 bg-green-500 hover:border-2 border-black"></button>
                                        <button onClick={()=>console.log("Yellow")} className="h-5 w-5 bg-yellow-400 hover:border-2 border-black"></button>
                                    </div>
                                </div>

                                <div className="flex items-center mt-5 space-x-3">
                                    <Counter id={data.id} newProduct/>
                                    <button className="bg-enfanato text-white h-10 px-3 hover:outline-dashed outline-1 outline-black text-sm flex items-center space-x-2">
                                        <PiShoppingCartFill />
                                        Add to cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
            </Dialog>
    );
};

export default Modal;