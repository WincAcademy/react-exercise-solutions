import { useState } from 'react';

export const Market = () => {
    const [productA, setProductA] = useState(); // Initially empty!
    const [productB, setProductB] = useState('bananas');

    return (
        <>
            { productA && <MarketStall product={productA} /> }
            { productB && <MarketStall product={productB} /> }
        </>
    );
};

export const MarketStall = ({ product }) => {
    return (
        <p>We are selling {product}!</p>
    );
};