import React from 'react';

const Wave = ({rotate, fill}) => {
    return (
        <svg width="100%" height="100%" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" overflow="auto" shapeRendering="auto" fill={fill} className={`transform ${rotate && 'rotate-180'} absolute top-0 md:h-16 h-12`}>
            <defs>
            <path id="wavepath" d="M 0 2000 0 500 Q 19 274 38 500 t 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0 38 0  v1000 z" />
            </defs>
            <g >
            <use xlinkHref="#wavepath" y="-97" fill={fill}>
            </use>
            </g>
        </svg>
    );
};

export default Wave;