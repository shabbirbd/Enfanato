import { Dialog } from '@headlessui/react';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from 'react-router-dom';


const SigninModal = ({signinModal, setSigninModal}) => {
    const [show, setShow] = useState(false);

    return (
        <Dialog open={signinModal} onClose={()=>setSigninModal(false)} className="fixed inset-0 z-50">
            <div className='flex items-center justify-center min-h-screen '>
                <Dialog.Overlay className="fixed inset-0 bg-sky-600 opacity-30" />
                <div className='outline-dashed outline-enfanato lg:w-5/12 md:w-7/12 w-9/12  mx-auto shadow-lg bg-white relative rounded-md flex flex-col items-center'>
                    <button
                        className="absolute top-3 right-3 p-2 text-gray-800 rounded-full outline-none hover:bg-gray-200 hover:outline-dashed outline-1 outline-black"
                        onClick={() => setSigninModal(false)}
                    >
                        <FaTimes />
                    </button>

                    <h3 className='text-textal font-normal text-xl p-4'>You need to login or create an account</h3>

                    <div className='w-full h-[1px] bg-neutral-300 mb-2'/>

                    <form action="submit" className=' w-full flex flex-col items-center'>
                        <p className='text-sm text-textal'>Save products on your wishlist to buy them later or share with your friends.</p>
                        <div className='w-full mt-3 grid grid-cols-2 place-items-center gap-3 px-5'>
                            <p className='text-textal text-md self-center'>Email:</p>
                            <input type="email"  className='outline-dashed outline-enfanato outline-1 px-2 h-10 w-full' placeholder='Your email'/>
                        </div>
                        <div className='w-full mt-3 grid grid-cols-2 place-items-center gap-3 px-5'>
                            <p className='text-textal text-md self-center'>Password:</p>
                            <div className='outline-dashed outline-enfanato outline-1 h-10 w-full flex items-center'>
                                <input type={show ? "text" : "password"}  className='px-2 h-full outline-none flex-1' placeholder='Your password'/>
                                <button type='button' className='border-l border-dashed border-enfanato h-full w-10 hover:bg-enfanato hover:text-white duration-300 flex items-center justify-center active:bg-neutral-500' onClick={()=> setShow(!show)}>
                                    {
                                        show ? <IoMdEye /> : <IoMdEyeOff />
                                    }
                                </button>
                            </div>
                        </div>
                    </form>

                    <Link to="/password-recovery" className='text-sm text-textal hover:text-elemental duration-300 mt-3'>Forgot your password?</Link>

                    <button type='button' className='bg-enfanato text-white px-4 py-1 mt-3 hover:outline-dashed outline-1 outline-black'>Sign in</button>

                    <div className='my-3 w-full h-[1px] bg-neutral-300'/>

                    <Link to="/signup" className='mb-3 text-textal text-sm hover:text-elemental duration-300'>No account? create one here</Link>
                </div>
            </div>
        </Dialog>
    );
};

export default SigninModal;