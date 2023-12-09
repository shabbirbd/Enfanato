import React from 'react';

const Topbar = () => {
    return (
        <div className='border-2 border-green-400  relative w-full'>
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shapeRendering="auto" fill="#FAB6B6" className='transform rotate-180 absolute md:h-16 h-12 -z-10 '>
                <defs>
                <path id="wavepath" d="M 0 2000 0 500 Q 19 274 38 500 t 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0  v1000 z" />
                </defs>
                <g >
                <use xlinkHref="#wavepath" y="-97" fill="#FAB6B6">
                </use>
                </g>
            </svg>
            
            <h2 className='z-50'>Topbar</h2>

        </div>
    );
};

export default Topbar;