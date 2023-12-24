import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlineRateReview } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../data/products';
import CartModal from './CartModal';
import PreviewImgCarousel from './PreviewImgCarousel';
import ProductDetail from './ProductDetail';
import ReviewModal from './ReviewModal';



const ProductPreview = () => {
    const param = useParams();
    const navigate = useNavigate();
    const product = products.find((item)=> item.id === parseInt(param.id));
    const [cartedModal, setCartedModal] = useState(false);
    const [cartedProduct, setCartedProduct] = useState(null);
    const [option , setOption] = useState('description');
    const [reviewModal, setReviewModal] = useState(false);


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

            <div className='border-2 border-sky-600 mt-5'>
                <div className='w-full  flex items-center justify-center space-x-5'>
                    <button className={`font-bold  hover:text-textal ${option === 'description' ? "text-textal": 'text-textal/50'} duration-300 text-lg group`} onClick={()=> setOption('description')}>
                        Description
                        <span className={`block h-[2px] w-0 group-hover:w-full ${option === 'description' ? 'w-full' : ''} duration-300 bg-enfanato`}></span>
                    </button>
                    <button className={`font-bold  hover:text-textal ${option === 'reviews' ? "text-textal": 'text-textal/50'} duration-300 text-lg group`} onClick={()=> setOption('reviews')}>
                        Reviews {`(0)`}
                        <span className={`block h-[2px] w-0 group-hover:w-full ${option === 'reviews' ? 'w-full' : ''} duration-300 bg-enfanato`}></span>
                    </button>
                </div>

                <div className='mt-5 border-2 border-sky-300 p-5'>
                    {
                        option === 'description' ? 
                        <p className='text-sm text-textal'>Fashion has been creating well-designed collections since 2010. The brand offers feminine designs delivering stylish separates and statement dresses which have since evolved into a full ready-to-wear collection in which every item is a vital part of a woman's wardrobe. The result? Cool, easy, chic looks with youthful elegance and unmistakable signature style. All the beautiful pieces are made in Italy and manufactured with the greatest attention. Now Fashion extends to a range of accessories including shoes, hats, belts and more!</p> :
                        <div className='flex items-center justify-between'>
                            <p>No reviews</p>
                            <button className='flex items-center space-x-1 bg-enfanato h-10 px-3 hover:outline-dashed outline-1 outline-black text-white' onClick={()=> setReviewModal(true)}>
                                <MdOutlineRateReview />
                                <span>Write review</span>
                            </button>
                        </div>
                    }
                </div>
            </div>

                {
                    cartedProduct && <CartModal cartedModal={cartedModal} setCartedModal={setCartedModal} data={cartedProduct}/> 
                }

                <ReviewModal reviewModal={reviewModal} setReviewModal={setReviewModal}/>
        </div>
    );
};

export default ProductPreview;