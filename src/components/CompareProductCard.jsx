import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { FaCartPlus } from "react-icons/fa";
import { RiDeleteBin6Line } from 'react-icons/ri';
import { CartContext, CopmareContext } from '../App';
import CartModal from './CartModal';



const CompareProductCard = ({data}) => {
    const [cartedModal, setCartedModal] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    const [compare, setCompare] = useContext(CopmareContext);
    const cartedProduct = {productId: data.id};
    
    const handleDelete = (id)=>{
        if(compare.find((item)=> item === id)){
            setCompare(compare.filter((item)=> item !== id));
            toast("Product removed from compare");
        } 
    };
    
    const handleAddToCart = (id)=>{
        if(cart.find((item)=> item.productId === id)){
            toast("Product already in cart");
        } else {
            const newCartedProduct = {
                productId: id,
                quantity: 1,
            }
            setCart([...cart, newCartedProduct]);
            toast("Product added to cart");
            setCartedModal(true);
        }
    };
    


    return (
        <div className='outline-dashed outline-1 max-w-[250px] w-full outline-enfanato rounded-md px-4'>
            <div className='w-full flex items-center justify-end py-4'>
                <button className='text-textal font-bold hover:text-elemental' onClick={()=>handleDelete(data.id)}><RiDeleteBin6Line /></button>
            </div>

            <div className='flex flex-col pb-4'>
                <div className='w-full h-[250px] px-3'>
                    <img src={data.images[0]} alt="product" className='h-full object-cover' />
                </div>

                <div className='my-2'>
                    <p className='text-textal text-sm hover:text-elemental duration-300'>{data.title}</p>
                    <p className='text-elemental text-sm font-bold'>${data.price}</p>
                </div>

                <button className='text-sm h-10 outline-dashed outline-1 outline-enfanato hover:bg-enfanato hover:text-white hover:outline-black duration-300 flex items-center justify-center space-x-2' onClick={()=>{handleAddToCart(data.id)}}>
                    <FaCartPlus />
                    <span>Add to cart</span>
                </button>
            </div>

            <CartModal cartedModal={cartedModal} setCartedModal={setCartedModal} data={cartedProduct}/>
        </div>
    );
};

export default CompareProductCard;