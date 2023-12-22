import React, { useState } from 'react';

const MagnifyingImage = ({data}) => {
    const [positions, setPositions] = useState({x:0, y:0});
    const [showMagnifier, setShowMagnifier] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({x:0, y:0});

    const handleMouseHover = (e)=>{
        const {left, top, width, height} = e.currentTarget.getBoundingClientRect();

        const x = ((e.pageX - left)/ width) * 100;
        const y = ((e.pageY - top)/ height) * 100;
        setPositions({x,y});
        setCursorPosition({x: e.pageX - left, y: e.pageY - top});
    }

    return (
         <>
            <div 
                className='border-2 border-green-500 relative lg:h-[500px] overflow-hidden'
                onMouseEnter={()=> setShowMagnifier(true)}
                onMouseLeave={()=> setShowMagnifier(false)}
                onMouseMove={handleMouseHover}
             >
                <img 
                    src={data} 
                    alt="image" 
                    className={`h-full w-full object-contain border border-yellow-400 origin-left`} 
                    id="img"
                />   
                <div
                    style={{
                        position: "absolute",
                        left: `${cursorPosition.x - 100}px`,
                        top: `${cursorPosition.y -100}px`,
                        pointerEvents: "none"
                    }}
                >
                    <div className='w-[200px] h-[200px] border-2 border-black'
                        style={{
                            backgroundImage: `url(${data})`,
                            backgroundPosition: `${positions.x}% ${positions.y}%`
                        }}
                    ></div>
                </div>
            </div>
         </>
    );
};

export default MagnifyingImage;