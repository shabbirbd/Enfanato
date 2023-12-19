import React, { useContext, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CartContext } from '../App';
import { products } from '../data/products';



const CheckoutCard = () => {
    const [show, setShow] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    const totalCartedItem = cart.reduce((sum, item)=> sum + item.quantity, 0);
    const cartedProducts = cart.map((item)=>{
        return products.find((product)=> item.productId === product.id )
     });
    return (
        <div className='border border-neutral-300'>
            <div className={`duration-300 w-full ${show ? "h-auto" : "h-10"} px-2 border border-red-300 overflow-hidden`}>
                <div className='flex items-center justify-between h-10 w-full text-textal text-sm'>
                    <p>{totalCartedItem} {totalCartedItem > 1 ? "items" : "item"}</p>
                    <button onClick={()=>setShow(!show)} className='flex items-center'>{show ? "Hide details" : "Show details"} {show ? <IoIosArrowUp /> : <IoIosArrowDown />}</button>
                </div>
                <div className='w-full h-[1px] bg-neutral-300 my-2'></div>
                <div>
                    hello
                </div>

            </div>
        </div>
    );
};

export default CheckoutCard;