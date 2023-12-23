import React, { useState } from 'react';
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import MagnifyingImage from './MagnifyingImage';


const PreviewImgCarousel = ({data}) => {
    const [index, setIndex] = useState(0);

    return (
        <div className="w-full relative flex-1 flex items-center justify-center" >
            <MagnifyingImage data={data?.images[index]}/>
            {/* image carousel controller */}
            <div className="w-full  absolute flex items-center justify-between">
                <button className={`relative  bg-black/10 text-2xl font-bold duration-300 hover:bg-black/50 hover:text-white py-5 px-1 ${index > 0 ? "opacity-100" : "opacity-30"}`} onClick={()=>index > 0 && setIndex(index-1)}>
                    <MdOutlineArrowBackIos />
                </button>
                <button className={`relative  bg-black/10 text-2xl font-bold duration-300 hover:bg-black/50 hover:text-white py-5 px-1 ${index < 1 ? "opacity-100" : "opacity-30"}`} onClick={()=>index < 1 && setIndex(index + 1)}>
                    <MdOutlineArrowForwardIos />
                </button>
            </div>
        </div>
    );
};

export default PreviewImgCarousel;