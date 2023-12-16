import React from 'react';

const PreviewModal = ({ product ,setPreview}) => {
    return (
        <div className='z-50 bg-white grid grid-cols-1 md:grid-cols-2 lg:h-[450px]'>
            <div className='border-2 border-red-300'>
                <div>
                    {
                        product?.images?.map((item, i)=>(
                            <img src={item} alt="item" key={i} />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default PreviewModal;