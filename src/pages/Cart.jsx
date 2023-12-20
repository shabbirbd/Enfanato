import React from 'react';
import CartTable from '../components/CartTable';

const Cart = () => {
    return (
        <div className='py-5 px-5'>
            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-textal mt-10'>Shopping Cart</h2>

            <div className='grid grid-cols-1 lg:grid-cols-6 mt-10 gap-3 '>
                <div className='lg:col-span-4 w-full'>
                    <CartTable/>
                </div>

                <div className='border border-red-900 lg:col-span-2 w-full'>
                    hello card
                </div>
            </div>
        </div>
    );
};

export default Cart;