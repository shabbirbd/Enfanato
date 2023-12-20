import React, { useContext } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { CartContext } from '../App';
import { products } from '../data/products';
import Counter from './Counter';


const CartTable = () => {
    const [cart, setCart] = useContext(CartContext);
    const cartedProducts = cart?.map((item)=>{
        return products.find((product)=> item.productId === product.id )
     });

     const getQuantity = (id)=>{
        return cart.find((item)=> item.productId === id).quantity;
    };

    const handleDelet = (id)=>{
        const newCart = cart.filter((item)=> item.productId !== id );
        setCart(newCart);
    }


    //  const total = cartedProducts[0] !== undefined && cart.reduce((sum, item)=> {
    //     const price = cartedProducts.find((product)=> product.id === item.productId).price;
    //     return sum + (item.quantity * price)
    // }, 0) || 0;

     

    return (
        <div className='w-full border-t border-b border-neutral-300 px-3'>
            <div className='grid grid-cols-12 gap-2 font-semibold text-sm text-textal py-3'>
                <p className='col-span-5 text-center'>Product</p>
                <p className='col-span-2 text-center'>Price</p>
                <p className='col-span-2 text-center'>Quantity</p>
                <p className='col-span-2 text-center'>Total</p>
            </div>
            <div className='w-full h-[1px] bg-neutral-300'></div>

            {
                cartedProducts[0] !== undefined &&
                cartedProducts?.map((product, i)=>(
                    <div className='grid grid-cols-12 gap-2 py-3' key={i}>
                        <div className='col-span-5 flex items-center justify-between space-x-2'>
                            <img src={product?.images[0]} alt="image" className='w-20' />
                            <div className='flex flex-col flex-1'> 
                                <p className='text-md font-semibold text-textal'>{product?.title}</p>
                                <span className='text-sm text-textal'>Size: s</span>
                                <span className='text-sm text-textal'>Color: Yellow</span>
                            </div>
                        </div>

                        <p className='col-span-2 flex items-center justify-center text-sm text-textal'>${product?.price}</p>

                        <div className='col-span-2 flex items-center justify-center'><Counter id={product.id}/></div>

                        <p className='col-span-2 flex items-center justify-center text-sm font-semibold text-elemental'>${getQuantity(product.id) * product.price}</p>


                        <button className='text-textal font-bold text-md' onClick={()=>handleDelet(product.id)}><RiDeleteBin6Line /></button>
                        
                    </div>
                ))
            }
        </div>
    );
};

export default CartTable;