import React from 'react';
import { useParams } from 'react-router-dom';

const ProductPreview = () => {
    const param = useParams();
    return (
        <div>
            product preview {param.id}
        </div>
    );
};

export default ProductPreview;