import React, { useContext, useEffect, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CartContext } from '../App';


const Counter = ({id}) => {
    const [cart, setCart] = useContext(CartContext);
    const initialCount = cart.find((ietm)=> ietm.productId === id).quantity;
    const [count, setCount] = useState(initialCount);


    useEffect(()=>{
        setCount(initialCount)
    }, [cart])

    useEffect(()=>{
        const oldCart = [...cart];
        const updatedCart = oldCart.map((product)=>{
            const newP = {...product}
            if(newP.productId === id){
                newP.quantity = count;
            }
            return newP;
        });
        setCart(updatedCart)
    }, [count, id])

    return (
        <div className=' h-10 w-20 flex items-center justify-between'>
            <p className='outline-1 outline-dashed outline-enfanato flex-1 h-full flex items-center justify-center'>{count}</p>
            <div className='grid grid-cols-1 outline-1 outline-dashed outline-enfanato h-full'>
                <button onClick={()=>setCount(count+1)} className='border-b border-dashed border-enfanato hover:bg-neutral-200'>
                    <IoIosArrowUp />
                </button>
                <button onClick={()=>count > 1 && setCount(count-1)} className='hover:bg-neutral-200'>
                    <IoIosArrowDown />
                </button>
            </div>
        </div>
    );
};

export default Counter;