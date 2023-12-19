import React from 'react';
import DetailedForm from '../components/DetailedForm';





const Signup = () => {
    
    
    return (
        <div className='py-5 px-5'>
            <p className='text-sm font-normal text-neutral-300'>Home / signup</p>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-textal mt-14'>Create an account</h2>

            <div className='border border-neutral-300 mt-10 py-5 px-5'>
                <a href='/signin' className='text-sm text-textal'>Already have an account? <span className=' underline'>Log in instead!</span></a>

                <DetailedForm signup/>
            </div>
        </div>
    );
};

export default Signup;