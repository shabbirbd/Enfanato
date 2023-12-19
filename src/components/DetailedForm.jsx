import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CheckBox = ({children})=>{
    const [selected, setSelected] = useState(false)

    return(
        <div className='flex items-center space-x-2'>
            <button className='border-2 border-enfanato h-5 w-5 flex items-center justify-center text-enfanato font-bold' type='button' onClick={()=> setSelected(!selected)}>
                {
                    selected &&
                    <FaCheck />
                }
            </button>
            <p className='text-sm text-textal'>{children}</p>
        </div>
    )
};

const DetailedForm = ({signup}) => {
    const [gender, setGender] = useState(null);
    const [hidden, setHidden] = useState(false);

    return (
        <form  className='mt-5 flex flex-col space-y-3 w-full'>
            <Link to='/signin' className='text-sm text-textal'>Already have an account? <span className=' underline'>Log in instead!</span></Link>
            <div className='w-full grid grid-cols-4 py-5'>
                <p className='text-sm text-textal'>Social title: </p>
                <div className='col-span-3 w-full space-x-3 flex items-center justify-start text-sm text-textal'>
                    <p className='flex items-center space-x-1'>
                        <button type='button' onClick={()=>setGender('male')} className='border-[2px] border-enfanato h-5 w-5 rounded-full flex items-center justify-center '>
                            <span className={`${gender === 'male' ? "block" : "hidden"} w-3 h-3 bg-enfanato rounded-full `}></span>
                        </button>
                        <span>Mr.</span>
                    </p>
                    <p className='flex items-center space-x-1'>
                        <button type='button' onClick={()=>setGender('female')} className='border-[2px] border-enfanato h-5 w-5 rounded-full flex items-center justify-center '>
                            <span className={`${gender === 'female' ? "block" : "hidden"} w-3 h-3 bg-enfanato rounded-full `}></span>
                        </button>
                        <span>Mrs.</span>
                    </p>
                </div>
            </div>

            <div className='w-full grid grid-cols-4'>
                <p className='text-sm text-textal'>First name:</p>
                <div className='col-span-3'>
                    <div className='w-full'>
                        <input type="text" autoComplete='username' className='outline-dashed outline-[1px] h-10 outline-enfanato w-full px-2' />
                        <p className='font-thin text-[12px]'>Only letters and the dot (.) character, followed by a space, are allowed.</p>
                    </div>
                </div>
            </div>

            <div className='w-full grid grid-cols-4'>
                <p className='text-sm text-textal '>Last name:</p>
                <div className='col-span-3'>
                    <div className='w-full'>
                        <input type="text" className='outline-dashed outline-[1px] h-10 outline-enfanato w-full px-2' />
                        <p className='font-thin text-[12px]'>Only letters and the dot (.) character, followed by a space, are allowed.</p>
                    </div>
                </div>
            </div>

            {
                !signup &&
                <div>
                    <h3 className='font-semibold text-textal text-lg'>Create an account <span className='text-sm font-normal'>{`(optional)`}</span></h3>
                    <p className='text-[12px] text-textal'>And save time on your next order!</p>
                </div>
            }
            
            <div className='w-full grid grid-cols-4'>
                <p className='text-sm text-textal '>Email:</p>
                <div className='col-span-3'>
                    <input type="text" className='outline-dashed outline-[1px] h-10 outline-enfanato w-full px-2' />
                </div>
            </div>

            <div className='w-full grid grid-cols-4'>
                <p className='text-sm text-textal '>Password:</p>
                <div className='col-span-3'>
                    <div className='w-full flex items-center outline-dashed outline-[1px] h-10 outline-enfanato'>
                        <input type={hidden ? 'password' : 'text'} autoComplete='current-password' className=' w-full px-2 outline-none' />
                        <button type='button' onClick={()=>setHidden(!hidden)} className='outline-dashed outline-[1px] outline-enfanato h-full w-10 flex items-center justify-center hover:bg-enfanato hover:text-white duration-300'>
                            {
                                hidden ?  <FaEyeSlash /> :<FaEye />
                            }
                        </button>
                    </div>
                </div>
            </div>

            <div className='w-full grid grid-cols-4'>
                <p className='text-sm text-textal '>Birthdate:</p>
                <div className='col-span-3'>
                    <input type="text" placeholder='MM/DD/YYYY' className='outline-dashed outline-[1px] h-10 outline-enfanato w-full px-2' />
                </div>
            </div>

            <div className='grid grid-cols-4 w-full'>
                <div className='col-span-3 w-full col-start-2'>
                    <CheckBox>Receive offers from us</CheckBox>
                </div>
            </div>

            <div className='grid grid-cols-4 w-full'>
                <div className='col-span-3 w-full col-start-2'>
                    <CheckBox>Sign up for our newsletter</CheckBox>
                    <p className='text-[10px] '>You may unsubscribe at any moment. For that purpose, please find our contact info in the legal notice.</p>
                </div>
            </div>

            <div className='grid grid-cols-4 w-full'>
                <div className='col-span-3 col-start-2 flex items-center justify-center w-full'>
                    <button type='button' className='bg-enfanato text-white px-3 py-2'>{signup ? "Sign up" : "Continue"}</button>
                </div>
            </div>
        </form>
    );
};

export default DetailedForm;