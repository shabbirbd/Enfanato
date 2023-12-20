import React, { useContext, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from '../App';
import { products } from '../data/products';




const CheckoutCard = () => {
    const [show, setShow] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    const totalCartedItem = cart.reduce((sum, item)=> sum + item.quantity, 0);
    const cartedProducts = cart.map((item)=>{
        return products.find((product)=> product.id === item.productId )
     });
     const getQuantity = (id)=>{
        return cart.find((item)=> item.productId === id).quantity;
     }

    return (
        <div className='border border-neutral-300'>
            <div className={`duration-300 w-full ${show ? "h-auto" : "h-10"} border border-red-300 overflow-hidden`}>
                <div className='flex items-center justify-between h-10 w-full text-textal text-sm px-2'>
                    <p>{totalCartedItem} {totalCartedItem > 1 ? "items" : "item"}</p>
                    <button onClick={()=>setShow(!show)} className='flex items-center'>{show ? "Hide details" : "Show details"} {show ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                </div>

                <div className='w-full h-[1px] bg-neutral-300 my-2'></div>

                <div className=' my-2 divide-y divide-neutral-300'>
                    {
                        cartedProducts?.map((product, i)=>(
                            <div key={i} className='py-2 flex items-center border-neutral-300 px-2 mx-2'>
                                <img src={product?.images[0]} alt="item" className='w-12' />

                                <div className='flex-1 w-full  px-2 flex items-center justify-between'>
                                    <div className='text-textal text-sm px-2'>
                                        <h3 className='text-lg font-semibold'>{product?.title}</h3>
                                        <p>Size: s</p>
                                        <p>Color: yellow</p>
                                    </div>
                                     
                                    <p className='text-sm text-textal flex items-center'>
                                        <span className='text-[12px]'>{getQuantity(product?.id)}</span>
                                        <RxCross2 />
                                        <span className='font-bold'>${product?.price}</span>
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default CheckoutCard;