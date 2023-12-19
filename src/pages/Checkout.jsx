import React from 'react';
import CheckoutCard from '../components/CheckoutCard';
import DetailedForm from '../components/DetailedForm';

const Checkout = () => {
    return (
        <div className='p-5'>
            <h2 className='font-bold text-textal text-2xl'>Checkout</h2>
            <div className='grid grid-cols-1 lg:grid-cols-6 mt-10 gap-3'>
                <div className='border border-neutral-300 w-full lg:col-span-4 p-3'>
                    <h3 className='text-textal font-normal text-md'>Personal Information</h3>

                    <div className='w-full h-[1px] bg-neutral-300 my-3'></div>

                    <DetailedForm/>
                </div>
                <div className='w-full lg:col-span-2 px-1'>
                    <CheckoutCard/>
                </div>
            </div>
        </div>
    );
};

export default Checkout;