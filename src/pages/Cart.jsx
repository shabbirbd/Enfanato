import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';
import CartTable from '../components/CartTable';
import CheckoutCard from '../components/CheckoutCard';


const Cart = () => {
    return (
        <div className='py-5 px-5'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-textal mt-10'>Shopping Cart</h2>

            <div className='grid grid-cols-1 lg:grid-cols-6 mt-10 gap-3 '>
                <div className='lg:col-span-4 w-full'>
                    <CartTable/>
                </div>

                <div className=' lg:col-span-2 w-full'>
                    <CheckoutCard inCart/>
                </div>
            </div>

            <Link to='/' className='flex items-center justify-center text-white bg-enfanato mt-5 h-10 max-w-[200px] hover:outline-dashed outline-1 outline-black'>
                <IoIosArrowBack />
                <span>Continue Shopping</span>
            </Link>
        </div>
    );
};

export default Cart;