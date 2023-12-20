import React, { useContext, useState } from 'react';
import { BsFillTagsFill } from "react-icons/bs";
import { FaPencil } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import { products } from '../data/products';






const CheckoutCard = () => {
    const [show, setShow] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    const totalCartedItem = cart.reduce((sum, item)=> sum + item.quantity, 0);
    const cartedProducts = cart.map( (item)=>{
        return products?.find((product)=> product.id === item.productId );
    });
   
    const getQuantity = (id)=>{
        return cart.find((item)=> item.productId === id).quantity;
    };
    const total = cartedProducts[0] !== undefined && cart.reduce((sum, item)=> {
        const price = cartedProducts.find((product)=> product.id === item.productId).price;
        return sum + (item.quantity * price)
    }, 0) || 0;
    const shippingFee = total >= 250 ? 0 : total === 0 ? 0 : 7.99;


    

    return (
        <div className='border border-neutral-300'>
            <div className={`duration-300 w-full ${show ? "max-h-screen" : "max-h-10"}  overflow-hidden`}>
                <div className='flex items-center justify-between h-10 w-full text-textal text-sm px-2'>
                    <p>{totalCartedItem} {totalCartedItem > 1 ? "items" : "item"}</p>
                    <button onClick={()=>setShow(!show)} className='flex items-center'>{show ? "Hide details" : "Show details"} {show ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                </div>

                <div className='w-full h-[1px] bg-neutral-300 my-2'></div>

                <div className=' my-2 divide-y divide-neutral-300'>
                    {   
                        cartedProducts.length > 0 &&
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
                <div className='w-full flex items-center justify-end my-2 px-2'>
                    <Link to="/cart" className='flex items-center text-textal text-sm'><FaPencil /> Edit</Link>
                </div>
            </div>

            <div className='w-full h-[1px] bg-neutral-300 mb-2'></div>

            <div className=''>
                <div className='w-full flex items-center justify-between px-2 text-sm text-textal'>
                    <p>Subtotal: </p>
                    <p>{total}</p>
                </div>
                <div className='w-full flex items-center justify-between px-2 text-sm text-textal'>
                    <p>Shipping: </p>
                    <p>{shippingFee}</p>
                </div>
            </div>

            <div className='w-full h-[1px] bg-neutral-300 my-2'></div>

            <div className='flex items-center justify-between px-2'>
                <h2 className='text-textal font-semibold text-lg'>Total {`(tax incl.)`}</h2>
                <h2 className='text-textal font-semibold text-lg'>${(total + shippingFee).toFixed(2)}</h2>
            </div>

            <div className='bg-[#D1ECF1] m-2 py-5 px-3'>
                <h3 className='text-textal font-semibold'>Spend $250 or more to get free shipping?</h3>
            </div>

            <div className='w-full h-[1px] bg-neutral-300 my-2'></div>
            
            <div className='flex items-center justify-between px-2 mb-2 space-x-3'>
                <p><BsFillTagsFill /></p>
                <input type="text" className='outline-1 outline-dashed outline-enfanato flex-1 h-10 px-2  ' />
                <button className='bg-enfanato text-white hover:outline-dashed outline-black outline-1 px-2 py-2'>Add</button>
            </div>
        </div>
    );
};

export default CheckoutCard;