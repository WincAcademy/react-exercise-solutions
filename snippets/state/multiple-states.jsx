import { useState } from 'react';

export const Market = () => {
    const [productA, setProductA] = useState('apples');
    const [productB, setProductB] = useState('bananas');

    return (
        <>
            <MarketStall product={productA} />
            <MarketStall product={productB} />
        </>
    );
};

export const MarketStall = ({ product }) => {
    return (
        <p>We are selling {product}!</p>
    );
};