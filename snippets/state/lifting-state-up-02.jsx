import { useState } from 'react';

export const App = () => {
    const [number, setNumber] = useState(100);

    return (
        <>
            <NumberDisplay       number={number} />
            <DoubleNumberDisplay number={number} />
        </>
    );
};

export const NumberDisplay = ({ number }) => {
    return (
        <p>The number is: {number}</p>
    );
};

export const DoubleNumberDisplay = ({ number }) => {
    return (
        <p>The double of the number is: {number * 2}</p>
    );
};