import React, { useState } from 'react';

const MagnifyingImage = ({data}) => {
    const [positions, setPositions] = useState({x:0, y:0});
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({x:0, y:0});

    const handleMouseHover = (e)=>{
       
    }

    return (
         <>
            <div className='relative lg:h-[500px]'>
                <img src={data} alt="image" className={`h-full w-full object-contain`} />   
            </div>
         </>
    );
};

export default MagnifyingImage;