import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Signin = () => {
    const [hidePassword, setHidePassword] = useState(false);

    return (
        <div className='py-5 px-5'>
            <p className='text-sm font-normal text-neutral-300'>Home / login</p>

            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-textal mt-14'>Login to your account</h2>

            <div className='border border-neutral-300 mt-10 flex flex-col items-center justify-center py-10 px-5'>
                <form  className='w-full flex flex-col items-center justify-center space-y-5 '>
                    <div className='w-full grid grid-cols-4 justify-items-center'>
                        <p className='text-textal'>Email:</p>
                        <input type="text" placeholder='Your email' className='w-full col-span-3 outline-dashed outline-[1px] outline-enfanato px-3 h-10 max-w-2xl'/>
                    </div>
                    <div className='w-full grid grid-cols-4 justify-items-center'>
                        <p className='text-textal'>Password:</p>
                        <div className='w-full col-span-3 flex items-center justify-between outline-dashed outline-[1px] outline-enfanato pl-3 h-10 max-w-2xl '>
                            <input type={hidePassword ? "password" : "text"} placeholder='Your password' className='w-full outline-none focus:outline-none' />
                            <button type='button' onClick={()=>setHidePassword(!hidePassword)} className='outline-dashed outline-enfanato outline-[1px] h-full w-10 flex items-center justify-center hover:bg-enfanato hover:text-white duration-300'>
                                {
                                    hidePassword ?  <FaEyeSlash /> :<FaEye />
                                }
                            </button>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-5 '>
                        <Link to='/password-recovery' className='text-sm font-thin text-textal'>Forgot password?</Link>
                        <button className='h-10 bg-enfanato text-white hover:outline-dashed outline-1 outline-black' type='button'>Sign in</button>
                    </div>
                </form>
                
                <div className='w-full my-8 h-[1px] bg-neutral-300'></div>

                <Link to="/signup" className='text-sm font-normal text-textal hover:text-elemental duration-300'>No account? Create one here..</Link>
            </div>
        </div>
    );
};

export default Signin;