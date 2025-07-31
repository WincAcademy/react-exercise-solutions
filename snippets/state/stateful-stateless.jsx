import { useState } from 'react';

// Stateful parent component
export const Market = () => {
    const [product, setProduct] = useState('apples');

    return (
        <MarketStall product={product} />
    );
};

// Stateless child component
export const MarketStall = ({ product }) => {
    return (
        <p>We are selling {product}!</p>
    );
};