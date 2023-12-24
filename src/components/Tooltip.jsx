import React from 'react';

const Tooltip = ({children, up}) => {
    return (
        <div className={`absolute  ${up ? "-top-9" : "right-10"} bg-enfanato p-1 z-[100] text-[12px]  items-center hidden group-hover/tooltip:flex justify-center rounded-md h-auto`}>
            <span className='z-10 whitespace-nowrap'>{children}</span>
            <div className={`${up ? "-bottom-1" : "-right-1"} h-3 w-3 -rotate-45 bg-enfanato absolute`}></div>
        </div>
    );
};

export default Tooltip;