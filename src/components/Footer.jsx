import React from 'react';

const Footer = () => {
    return (
        <div className='bg-white relative'>
            <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shapeRendering="auto" fill="#95B9E5" className={`transform  absolute md:-top-16 -top-14  md:h-16 h-14 z-30`}>
                <defs>
                <path id="wavepath" d="M 0 2000 0 500 Q 19 274 38 500 t 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0  v1000 z" />
                </defs>
                <g >
                <use xlinkHref="#wavepath" y="-97" fill="#95B9E5">
                </use>
                </g>
            </svg>
            
            <div className='bg-[#95B9E5]'>
                footer
            </div>
        </div>
    );
};

export default Footer;