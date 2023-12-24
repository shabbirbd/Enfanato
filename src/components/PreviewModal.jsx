import { Dialog } from "@headlessui/react";
import React from 'react';
import { FaTimes } from "react-icons/fa";
import PreviewImgCarousel from "./PreviewImgCarousel";
import ProductDetail from "./ProductDetail";


const PreviewModal = ({openModal, setOpenModal , data, setCartedModal, setCartedProduct}) => {
    


    // const handleNextData = (id)=>{
    //     if(id < products.length){
    //         setData(products.find((item)=>item.id === id+1));
    //     } else{
    //         setData(products.find((item)=>item.id === 1));
    //     }
    //     console.log(id)
    // }
    
    // const handlePrevData = (id)=>{
    //     if(id > 1){
    //         setData(products.find((item)=>item.id === id-1))
    //     } else{
    //         setData(products.find((item)=> item.id === products.length))
    //     }
    // };

    

    return (
            <Dialog open={openModal} onClose={() => setOpenModal(false)} className="fixed inset-0 z-10 ">
                <div className="flex items-center justify-center min-h-screen px-4 py-8 ">
                    <Dialog.Overlay className="fixed inset-0 bg-sky-600 opacity-30" />
                    <div className="relative lg:w-7/12 md:w-9/12 w-10/12  p-4 mx-auto bg-white rounded-md shadow-lg  flex items-center justify-center">                    
                        <button
                            className="absolute top-2 right-2 p-2 text-gray-800 rounded-full outline-none hover:bg-gray-200 hover:outline-dashed outline-1 outline-black"
                            onClick={() => setOpenModal(false)}
                        >
                            <FaTimes />
                        </button>

                        {/* Modal data controller buttons */}
                        {/* <div className="absolute w-full flex items-center justify-between">
                            <button className="relative -translate-x-10 bg-white/70 text-2xl font-bold duration-300 hover:bg-white py-5 px-1" onClick={()=>handlePrevData(data.id)}>
                                <MdOutlineArrowBackIos />
                            </button>
                            <button className="relative translate-x-10 bg-white/70 text-2xl font-bold duration-300 hover:bg-white py-5 px-1" onClick={()=>handleNextData(data.id)}>
                                <MdOutlineArrowForwardIos />
                            </button>
                        </div> */}

                        {/* Main modal content */}
                        <div className="mt-5 flex  items-center w-full space-x-1">
                            <PreviewImgCarousel data={data}/>

                            <ProductDetail data={data} setCartedModal={setCartedModal} setCartedProduct={setCartedProduct} setOpenModal={setOpenModal}/>
                        </div>
                    </div>
                </div>  
            </Dialog>
    );
};

export default PreviewModal;