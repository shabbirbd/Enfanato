import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/products';
import CartModal from './CartModal';
import PreviewImgCarousel from './PreviewImgCarousel';
import ProductDetail from './ProductDetail';


const ProductPreview = () => {
    const param = useParams();
    const navigate = useNavigate();
    const product = products.find((item)=> item.id === parseInt(param.id));
    const [cartedModal, setCartedModal] = useState(false);
    const [cartedProduct, setCartedProduct] = useState(null);


    return (
        <div className='border-2 border-green-400'>
            <div className='border-2 border-red-300 w-full flex items-center justify-between p-3'>
                <p className='text-sm font-normal text-neutral-300'>Home / product / {product?.id}</p>
                
                <div className='flex items-center space-x-3 text-textal'>
                    <button onClick={()=> navigate(`/product/${product.id > 1 ? product.id - 1 : products.length}`)}><FaArrowLeft /></button>
                    <button onClick={()=> navigate(`/product/${product.id < products.length ? product.id + 1 : 1}`)}><FaArrowRight /></button>
                </div>
            </div>

            <div className='border-2 border-sky-500 mt-10 flex items-center spare-x-2   '>
                <PreviewImgCarousel data={product}/>
                <ProductDetail data={product} setCartedModal={setCartedModal} setCartedProduct={setCartedProduct} />
            </div>

                {
                    cartedProduct && <CartModal cartedModal={cartedModal} setCartedModal={setCartedModal} data={cartedProduct}/> 
                }
        </div>
    );
};

export default ProductPreview;