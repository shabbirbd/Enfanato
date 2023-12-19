import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaSearch, FaShoppingCart, FaThList } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { GoPersonFill, GoSearch } from "react-icons/go";
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';
import enfanato from '../../assets/enfanato.png';
import CartCard from '../CartCard';
import Wave from '../Wave';



const NavHeader = ({setOpen}) => {
    const [cartOpen, setCartOpen] = useState(false);
    const [cart, setCart] = useContext(CartContext);
    const cartCardRef = useRef(null);
    const cartIconRef = useRef(null);
    const totalCartedQuantity = JSON.stringify(cart.reduce((sum, item)=> sum + item.quantity, 0));
    


    useEffect(()=>{
        const handleClickOutside = (event)=>{
            if(cartCardRef.current && cartIconRef.current && !cartCardRef.current.contains(event.target) && !cartIconRef.current.contains(event.target)){
                setCartOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside);

        return ()=> document.removeEventListener('click', handleClickOutside)

    }, [cartCardRef, cartIconRef, cart])

    return (
        <div className='bg-[#F9F5F5] relative z-40 lg:py-0'>
            <div className='md:py-7 pt-5 w-full flex items-center justify-between px-5 z-10'>
                <div className='outline-dashed outline-1 outline-enfanato bg-white max-w-xs w-full  py-3 px-3  items-center justify-between hidden lg:flex'>
                    <input type="text" className='font-base text-sm leading-3 focus:outline-none' placeholder='Search our catalogue'/>
                    <GoSearch className='cursor-pointer'/>
                </div>
                


                <Link to="/" className='flex-shrink-0'>
                    <img src={enfanato} alt="icon" className='h-20 hover:scale-105 duration-300' />
                </Link>



                <div className='max-w-xs w-full flex items-center justify-end space-x-3 lg:space-x-5 text-neutral-500'>
                    <div className='hover:text-elemental duration-300 block lg:hidden'>
                        <FaSearch className='cursor-pointer font-bold text-2xl'/>
                    </div>

                    <Link to={"/signin"} className='flex flex-col items-center cursor-pointer duration-300 hover:text-elemental'>
                        <GoPersonFill className='cursor-pointer font-bold text-2xl'/>
                        <p  className='text-sm hidden lg:block'>Sign In</p>
                    </Link>

                    <Link to="/signin" className='lg:flex hidden flex-col items-center cursor-pointer duration-300 hover:text-elemental'>
                        <FiHeart className='cursor-pointer font-bold text-2xl'/>
                        <p className='text-sm hidden lg:block'>Whitelist (0)</p>
                    </Link>

                    <div className='flex flex-col items-center relative cursor-pointer' onClick={()=>setCartOpen(true)} ref={cartIconRef}>
                        <p className='relative  text-elemental'>
                            <FaShoppingCart className='cursor-pointer font-bold text-2xl' />
                            <span className='flex items-center justify-center bg-enfanato text-white h-[15px] w-[15px] text-[12px] rounded-full absolute -top-1 -right-1'>{totalCartedQuantity}</span>
                        </p>
                        <p className='text-sm hidden lg:block  text-elemental'>Cart</p>

                        {
                            cartOpen &&
                            <div className=' absolute top-12 right-0 z-50' ref={cartCardRef}>
                                <CartCard/>
                            </div>
                        }
                    </div>

                    <div className='flex flex-col items-center duration-300 hover:text-elemental lg:hidden'>
                        <button onClick={()=>setOpen(true)}>
                            <FaThList className='cursor-pointer font-bold text-2xl' />
                        </button>
                    </div>
                </div>
            </div>

            <div className='relative lg:bottom-7 md:bottom-8 bottom-4 hidden lg:block'>
            <Wave rotate fill="#F9F5F5"/>
            </div>
        </div>
    );
};

export default NavHeader;