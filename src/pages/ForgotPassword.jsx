import React from 'react';

const ForgotPassword = () => {
    return (
        <div className='px-5 py-5'>
            <p className='text-sm font-normal text-neutral-300'>Home / password-recovery</p>

            <div className='border border-neutral-300 p-5 mt-5'>
                <p className='text-sm font-normal text-neutral-400'>Please enter the email address you used to register. You will receive a temporary link to reset your password.</p>

                <div className='flex items-center justify-start space-x-3 mt-10'>
                    <p className='text-sm font-normal text-textal'>Email address: </p>
                    <input type="text" className='outline-dashed outline-[1px] outline-enfanato h-12 px-2 w-96' />
                    <button className='bg-enfanato/80 duration-300 text-white h-10 px-3 hover:outline-dashed outline-[1px] outline-black hover:bg-enfanato'>Send reset link</button>
                </div>

                <div className='w-full h-[1px] bg-neutral-300 mt-10'></div>

                <a className='mt-5 block text-sm text-neutral-400' href='/signin'>{`<`}Back to login</a>
            </div>
            
        </div>
    );
};

export default ForgotPassword;