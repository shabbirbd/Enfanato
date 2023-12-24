import { Dialog } from '@headlessui/react';
import React, { useContext } from 'react';
import { FaCheck, FaTimes } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';
import { CartContext } from '../App';
import { products } from '../data/products';



const CartModal = ({cartedModal, setCartedModal, data}) => {
    const [cart, setCart] = useContext(CartContext);
    const cartedProduct = products.find((product)=> product.id === data.productId);
    const totalCartedItem = cart.reduce((sum, item)=> sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item)=>{
        const price = products.find((product)=> product.id === item.productId).price;
        return sum + (item.quantity * price)
    }, 0);

    return (
        <Dialog open={cartedModal} onClose={()=> setCartedModal(false)} className="fixed inset-0 z-50">
            <div className='flex items-center justify-center min-h-screen px-4 py-8 '>
                <Dialog.Overlay className="fixed inset-0 bg-sky-600 opacity-30" />
                <div className='outline-dashed outline-enfanato lg:w-7/12 md:w-9/12 w-10/12  mx-auto shadow-lg bg-white relative rounded-md'>
                    <button
                        className="absolute top-3 right-3 p-2 text-gray-800 rounded-full outline-none hover:bg-gray-200 hover:outline-dashed outline-1 outline-black"
                        onClick={() => setCartedModal(false)}
                    >
                        <FaTimes />
                    </button>
                
                    <div className='flex items-center font-bold md:text-2xl text-lg text-textal space-x-3 p-4'>
                        <FaCheck />
                        <h3 className='font-normal pr-5'>Product successfully added to your cart</h3>
                    </div>

                    <div className='w-full h-[1px] bg-neutral-300 my-2'></div>

                    <div className=' grid grid-cols-1 lg:grid-cols-5'>
                        <div className='lg:col-span-2 flex items-center justify-center'>
                            <img src={cartedProduct.images[0]} alt="product" className='max-h-[200px]'/>
                            <p className='text-textal font-normal text-sm flex items-center space-x-2'>
                                <span>{data.quantity}</span>
                                <RxCross2 />
                                <span className='text-md font-semibold'>{cartedProduct.price}</span>
                            </p>
                        </div>
                        <div className='lg:col-span-3 flex flex-col p-3'>
                            <p className='flex items-center space-x-1 text-sm text-textal mt-3'>
                                <span>There are </span>
                                <span>{totalCartedItem}</span>
                                <span>{totalCartedItem > 1 ? "items" : "item"}</span>
                                <span>in your cart.</span>
                            </p>

                            <p className='text-sm text-textal mt-3'>
                                <span className='font-semibold'>Total products: </span>
                                <span>${totalPrice}</span>
                            </p>

                            <div className='bg-[#D1ECF1] w-full mt-3 p-2'>
                                <h3 className='text-textal font-semibold'>Spend $250 or more to get free shipping?</h3>
                            </div>

                            <div className=' mt-2 flex items-center justify-center'>
                                <Link to="/cart" className='w-full flex items-center justify-center bg-enfanato text-white h-10 hover:outline-dashed outline-1 outline-black'>Proceed to checkout</Link>
                            </div>

                            <Link to='/' className='flex w-full items-center justify-center text-enfanato mt-3 duration-300 h-10 outline outline-1 outline-enfanato hover:bg-enfanato hover:text-white' onClick={()=> setCartedModal(false)}>
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Dialog>
    );
};

export default CartModal;