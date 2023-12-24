import React, { useContext, useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { FaCodeCompare } from 'react-icons/fa6';
import { PiShoppingCartFill } from 'react-icons/pi';
import { CartContext } from '../App';
import Counter from './Counter';
import Tooltip from './Tooltip';


const ProductDetail = ({data, setCartedProduct, setCartedModal, setOpenModal}) => {
    const [cart, setCart] = useContext(CartContext);
    const [color, setColor] = useState('Yellow');
    const [size, setSize] = useState('s');
    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = (id)=>{
        const productToCart = {
            productId: id,
            color: color,
            size: size,
            quantity: quantity
        }
        setCartedProduct(productToCart);
        setCart([...cart, productToCart]);
        setCartedModal(true);
        setOpenModal(false);
    };
    return (
        <div className="flex-1 h-full flex flex-col items-center">
            <h2 className="text-2xl font-bold text-textal">{data.title}</h2>
            <p className="text-xl font-bold text-elemental">${data.price}</p>

            <div className="flex flex-col items-center mt-3">
                <p className="text-sm font-bold text-textal my-2">Size</p>
                <select name="size" className="outline-dashed outline-1 outline-enfanato cursor-pointer p-2" onChange={(e)=> setSize(e.target.value)}>
                    <option value="s">s</option>
                    <option value="m">m</option>
                    <option value="l">l</option>
                </select>
            </div>

            <div className="mt-3 flex flex-col items-center">
                <p className="text-sm font-bold text-textal my-2">Color</p>
                <div className="flex items-center justify-center space-x-3">
                    <button onClick={()=>setColor("Green")} className={`h-5 w-5 bg-green-500 hover:border-2 border-black ${color === 'Green' ? "border-2" : ''}`}></button>
                    <button onClick={()=>setColor("Yellow")} className={`h-5 w-5 bg-yellow-400 hover:border-2 border-black ${color === "Yellow" ? "border-2" : ''}`}></button>
                </div>
            </div>

            <div className="flex items-center mt-5 space-x-3">
                <Counter id={data.id} newProduct setQuantity={setQuantity}/>
                <button className="bg-enfanato text-white h-10 px-3 hover:outline-dashed outline-1 outline-black text-sm flex items-center space-x-2" onClick={()=>handleAddToCart(data.id)}>
                    <PiShoppingCartFill />
                    Add to cart
                </button>

                <button className='flex items-center justify-center h-10 w-10 outline-dashed outline-1 outline-enfanato text-enfanato hover:text-white hover:bg-enfanato duration-300 group/tooltip relative'>
                    <Tooltip up>Add to whitelist</Tooltip>
                    <FaRegHeart />
                </button>
                <button className='flex items-center justify-center h-10 w-10 outline-dashed outline-1 outline-enfanato text-enfanato hover:text-white hover:bg-enfanato duration-300 group/tooltip relative'>
                    <Tooltip up>Compare</Tooltip>
                    <FaCodeCompare />   
                </button>
            </div>
        </div>
    );
};

export default ProductDetail;