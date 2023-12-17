import React, { useState } from 'react';
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";



const ProductCard = ({product}) => {
    const [preview, setPreview] = useState(false)
    const [openModal, setOpenModal] = useState(false);


    return (
        <>
        {/*         
        {
            preview && 
            <div className='border-2 z-50 border-blue-600 absolute h-full lg:h-[450px]'>
                <PreviewModal setPreview={setPreview} product={product}/>
            </div>
        } */}
        {/* <Modal openModal={openModal} setOpenModal={setOpenModal} data={product}/>   */}



        <div className='outline-dashed outline-[1px] outline-neutral-300 rounded-xl flex flex-col  p-3 hover:bg-enfanato duration-300 group relative'>
            <div className='xl:h-[280px] lg:h-[250px] md:h-[230px] h-[230px] overflow-hidden relative'>
                <div className='overflow-hidden max-h-full h-full bg-white px-3'>
                    {
                        product?.images?.map((item, i)=>(
                            <img src={item} alt="item" className='flex-1 h-full w-full object-contain duration-300 group-hover:-translate-y-[100%]' key={i}/>
                        ))
                    }
                </div>

                <div className=' absolute duration-300 right-2 group-hover:-translate-x-0 -translate-x-[-200%] top-3 flex flex-col space-y-2 font-normal text-sm'>
                    <button className='h-8 w-8 rounded-full text-white hover:bg-enfanato/70 duration-300 bg-enfanato flex items-center justify-center'>
                        <FaRegHeart />
                    </button>
                    <button className='h-8 w-8 rounded-full text-white hover:bg-enfanato/70 duration-300 bg-enfanato flex items-center justify-center' >
                        <FaCodeCompare />   
                    </button>
                    <button className='h-8 w-8 rounded-full text-white hover:bg-enfanato/70 duration-300 bg-enfanato flex items-center justify-center' onClick={()=> setOpenModal(true)}>
                        <FaRegEye />
                    </button>

                    
                </div>
            </div>

            <div className='flex items-center justify-between mt-2 w-full'>
                <h3 className='text-neutral-600 group-hover:text-white font-semibold text-sm'>{product.title}</h3>
                <p className='font-semibold text-md text-elemental'>$ {product.price}</p>
            </div>

            <p className='font-normal text-sm text-neutral-400' >{product.seller}</p>

        </div>
        </>
        
    );
};

export default ProductCard;