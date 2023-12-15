import React from 'react';

const ProductCard = ({product}) => {
    return (
        <div className='outline-dashed outline-[1px] outline-neutral-300 rounded-xl flex flex-col items-center p-3 hover:bg-enfanato duration-300 group relative'>
            <div className='border border-red-700 xl:h-[280px] lg:h-[250px] md:h-[230px] h-[230px] relative'>
                <div className='overflow-hidden max-h-full h-full bg-white px-3'>
                    {
                        product?.images?.map((item, i)=>(
                            <img src={item} alt="item" className='flex-1 h-full w-full object-contain duration-300 group-hover:-translate-y-[100%] border-2 border-blue-400 ' key={i}/>
                        ))
                    }
                </div>

                <div className='border border-red-600 absolute right-2 top-3'>
                    hello
                </div>
            </div>
        </div>
    );
};

export default ProductCard;