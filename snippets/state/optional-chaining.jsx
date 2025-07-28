import { useState } from 'react';

export const Market = () => {
    // Product is now an object with a name property
    const [product, setProduct] = useState({
        name: 'apples',
    });

    return (
        <MarketStall product={product} />
    );
};

export const MarketStall = ({ product }) => {
    return (
        <p>We are selling {product?.name}!</p>
    );
};