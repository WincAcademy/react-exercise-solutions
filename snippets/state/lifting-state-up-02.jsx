import { useState } from 'react';

export const App = () => {
    const [number, setNumber] = useState(100);

    return (
        <>
            <NumberDisplay number={number} />
            { number > 50 && <p>The number is greater than 50!</p> }
        </>
    );
};

export const NumberDisplay = ({ number }) => {
    return (
        <p>The number is: {number}</p>
    );
};