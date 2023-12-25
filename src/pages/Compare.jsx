import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { RiDeleteBin6Line } from "react-icons/ri";
import { CopmareContext } from '../App';
import CompareProductCard from '../components/CompareProductCard';
import { products } from '../data/products';


const Compare = () => {
    const [compare, setCompare] = useContext(CopmareContext);
    const comparedProducts = compare.map((item)=> {
        return products.find((product)=> product.id === item)
    });

    const handleRemoveAllCompare = ()=>{
        if(compare.length > 0 ){
            setCompare([]);
            toast("Compare cleared");
        } else {
            toast("No items in compare");
        }
    };
    

    return (
        <div>
            <h2 className='text-2xl lg:text-3xl text-textal font-bold p-4'>Products to compare</h2>

            <div className='flex items-center justify-end px-5'>
                <button className='text-textal text-sm hover:text-elemental duration-300 flex items-center space-x-1' onClick={()=> handleRemoveAllCompare()}>
                    <RiDeleteBin6Line />
                    <span>Remove all products</span>
                </button>
            </div>

            <div className='w-full my-3 h-[1px] bg-neutral-300'/>

            <div className='w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 justify-items-center px-3'>
                {
                    comparedProducts.length > 0 ?
                    comparedProducts?.map((product, i)=>(
                        <CompareProductCard data={product} key={i}/>
                    ))
                    :
                    <p className='text-textal text-sm'>There is no product left in compare</p>
                }
            </div>
        </div>
    );
};

export default Compare;