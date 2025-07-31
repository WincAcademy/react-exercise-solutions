export const Market = () => {
    // Regular variable, not state-managed
    let product = 'apples';
    
    // Let's change the product value directly
    // after two seconds have passed
    setTimeout(() => {
        product = 'bananas';
    }, 2000);

    return (
        <MarketStall product={product} />
    );
};

export const MarketStall = ({ product }) => {
    return (
        <p>We are selling {product}!</p>
    );
};