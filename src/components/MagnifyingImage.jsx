import React, { useRef, useState } from 'react';

const MagnifyingImage = ({data}) => {
    const containerRef = useRef(null);
    const imageRef = useRef(null);
    const [offsets, setOffsets] = useState({ x: 0, y: 0 });


    return (
         <>
            <div className='border-2 border-green-500  overflow-hidden' ref={containerRef} >
                <img 
                    src={data} 
                    alt="image" 
                    className={`lg:h-[500px] object-cover border border-yellow-400`} 
                    ref={imageRef}
                    id="img"
                />   
            </div>
         </>
    );
};

export default MagnifyingImage;