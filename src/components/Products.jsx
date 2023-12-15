import React, { useState } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const Products = () => {
    const [category, setCategory] = useState(1)
    return (
        <div className='mt-14 border-2 border-red-300'>
            <div className=' flex items-center justify-center py-5 space-x-5 lg:text-lg font-semibold'>
                <div className='group'>
                    <button className={`${category === 1 ? "text-textal" : "text-neutral-300"} hover:text-textal`} onClick={()=>setCategory(1)}>New products</button>
                    <span className={`h-[3px] bg-enfanato block duration-300 group-hover:w-full ${category === 1 ? "w-full" : "w-0"}`}></span>
                </div>
                <div className='group'>
                    <button className={`${category === 2 ? "text-textal" : "text-neutral-300"} hover:text-textal`} onClick={()=>setCategory(2)}>New products</button>
                    <span className={`h-[3px] bg-enfanato block duration-300 group-hover:w-full ${category === 2 ? "w-full" : "w-0"}`}></span>
                </div>
            </div>


            <div className='border-2 border-yellow-600 mx-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5'>
                {
                    products?.map((product, i)=>(
                        <ProductCard product={product} key={i}/>
                    ))
                }
            </div>
        </div>
    );
};

export default Products;