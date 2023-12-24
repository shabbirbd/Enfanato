    import React, { useState } from 'react';
import { FaRegEye, FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import CartModal from './CartModal';
import PreviewModal from './PreviewModal';
import Tooltip from './Tooltip';



    const ProductCard = ({product}) => {
        const [openModal, setOpenModal] = useState(false);
        const [cartedModal, setCartedModal] = useState(false);
        const [cartedProduct, setCartedProduct] = useState(null);

        const navigate = useNavigate();




        return (
            <>
                <div className='outline-dashed outline-[1px] outline-neutral-300 rounded-xl flex flex-col  p-3 hover:bg-enfanato duration-300 group relative' >
                    <div className='xl:h-[280px] lg:h-[250px] md:h-[230px] h-[230px] overflow-hidden relative'>
                        <div className=' max-h-full h-full bg-white px-3 cursor-pointer' onClick={()=>navigate(`/product/${product.id}`)} >
                            {   product?.images?.length &&
                                product?.images?.map((item, i)=>(
                                    <img src={item} alt="item" className='flex-1 h-full w-full object-contain duration-300 group-hover:-translate-y-[100%]' key={i}/>
                                ))
                            }
                        </div>

                        <div className=' absolute duration-300 right-2 group-hover:-translate-x-0 -translate-x-[-200%] top-3 flex flex-col space-y-2 font-normal text-sm'>
                            <button className='h-8 w-8 rounded-full text-white hover:bg-enfanato/70 duration-300 bg-enfanato flex items-center justify-center group/tooltip'>
                                <Tooltip>Add to whitelist</Tooltip>
                                <FaRegHeart />
                            </button>
                            <button className='h-8 w-8 rounded-full text-white hover:bg-enfanato/70 duration-300 bg-enfanato flex items-center justify-center group/tooltip' >
                                <Tooltip>Compare</Tooltip>
                                <FaCodeCompare />   
                            </button>
                            <button className='h-8 w-8 rounded-full text-white hover:bg-enfanato/70 duration-300 bg-enfanato flex items-center justify-center group/tooltip' onClick={()=> setOpenModal(true)}>
                                <Tooltip>Quick view</Tooltip>
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
                <PreviewModal openModal={openModal} setOpenModal={setOpenModal} data={product}  setCartedModal={setCartedModal} setCartedProduct={setCartedProduct}/> 
                {
                    cartedProduct && <CartModal cartedModal={cartedModal} setCartedModal={setCartedModal} data={cartedProduct}/> 
                }
            </>
            
        );
    };

    export default ProductCard;