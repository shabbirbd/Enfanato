import React, { useContext } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import { products } from '../data/products';
import Counter from './Counter';



const CartCard = () => {
    const [cart, setCart] = useContext(CartContext);
    const cartedProducts = cart.map((item)=>{
       return products.find((product)=> item.productId === product.id )
    });
    const totalCartedItem = cart.reduce((sum, item)=> sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item)=> {
                            const price = cartedProducts.find((product)=>product.id === item.productId).price;
                            return sum + (item.quantity * price)
                        }, 0);
    const shippingFee = totalPrice >= 250 ? 0 : 7.99;
                        

            

    const handleDelet = (id)=>{
        const newCart = cart.filter((item)=> item.productId !== id );
        setCart(newCart);
        console.log(cart)
    }


    return (
        <div className='outline-2 outline-dashed outline-enfanato p-2 w-[300px] bg-white cursor-auto'>
            <div className=' w-full '>
                {
                    cartedProducts?.map((item, i)=>(
                        <div key={i} className='border-b border-enfanato flex items-center w-full space-x-2 py-2'>
                            <img src={item.images[0]} alt="item" className='w-16 object-cover' />
                            <div className='flex-1  flex flex-col'>
                                <p className='text-md text-textal'>{item.title}</p>
                                <span className='text-[12px] text-textal'>Size: s</span>
                                <span className='text-[12px] text-textal'>Color: Yellow</span>
                                <div className='flex items-center mt-2 justify-between'>
                                    <Counter id={item.id}/>
                                    <p className='ml-2 flex items-center text-[12px] text-textal'>
                                        <span><RxCross2 /> </span>${item.price}
                                    </p>
                                    <button onClick={()=>handleDelet(item.id)} className='duration-300 hover:scale-105'>
                                        <RiDeleteBin5Line />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='text-sm text-textal mt-5 w-full'>
                <div className='w-full flex items-center justify-between'>
                    <p>{JSON.stringify(totalCartedItem)} {totalCartedItem > 1 ? "items" : "item"}</p>
                    <p>${JSON.stringify(totalPrice)}</p>
                </div>

                <div className='flex items-center justify-between'>
                    <p>Shipping</p>
                    <p>${shippingFee}</p>
                </div>
            </div>

            <div className='w-full h-[1px] bg-neutral-300 my-3'></div>

            <div className='flex items-center justify-between text-textal'>
                <h3 className='font-semibold text-lg'>Total {`(tax incl.)`}</h3>
                <p className='text-sm'>${totalPrice + shippingFee}</p>
            </div>

            <div className='bg-[#D1ECF1] w-full mt-3 p-2'>
                <h3 className='text-textal font-semibold'>Spend $250 or more to get free shipping?</h3>
            </div>

            <div className='w-full bg-enfanato/80 hover:bg-enfanato duration-300 hover:outline-dashed outline-1 outline-black text-white mt-3 flex justify-center items-center py-3'>
                <Link to='/checkout' className='w-full h-full text-center'>Checkout</Link>
            </div>

        </div>  
    );
};

export default CartCard;