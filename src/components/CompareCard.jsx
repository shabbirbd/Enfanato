import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CopmareContext } from '../App';
import { products } from '../data/products';

const CompareCard = () => {
    const [compare, setCompare] = useContext(CopmareContext);
    const comparedProducts = compare.map((item)=>{
        return products.find((product)=> product.id === item)
    });
    const navigate = useNavigate();

    console.log(comparedProducts)
    return (
        <div className='bg-white fixed right-1/4 bottom-0 text-black z-50 py-1 outline-1 outline-dashed outline-enfanato flex items-center px-2 rounded-t-md cursor-pointer' onClick={()=> navigate('/compare')}>
            <p className='text-sm text-textal'>Compare <span>{`(${compare.length})`}</span></p>
            <div className='flex items-center ml-3 space-x-2'>
                {
                    comparedProducts?.map((item, i)=> (
                        <img src={item.images[0]} alt="img" className='h-5' key={i}/>
                    ))
                }
            </div>
        </div>
    );
};

export default CompareCard;