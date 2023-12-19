import React, { useContext } from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { CartContext } from '../App';
import { products } from '../data/products';
import Counter from './Counter';



const CartCard = () => {
    const [cart, setCart] = useContext(CartContext);
    const cartedProducts = cart.map((item)=>{
       return products.find((product)=> item.productId === product.id )
    });


    const handleDelet = (id)=>{
        const newCart = cart.filter((item)=> item.productId !== id );
        setCart(newCart);
        console.log(cart)
    }


    return (
        <div className='outline-2 outline-dashed outline-enfanato p-2 w-[300px] bg-white'>
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
                                        <span><RxCross2 /></span> {item.price}
                                    </p>
                                    <button onClick={()=>handleDelet(item.id)} className=''>
                                        <RiDeleteBin5Line />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>  
    );
};

export default CartCard;