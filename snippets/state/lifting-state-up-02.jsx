import { useState } from 'react';

export const App = () => {
    const [number, setNumber] = useState(100);

    return (
        <>
            <NumberDisplay number={number} />
            <IsNumberEven  number={number} />
        </>
    );
};

export const NumberDisplay = ({ number }) => {
    return (
        <p>The number is: {number}</p>
    );
};

export const IsNumberEven = ({ number }) => {
    return (
        <p>The number is {number % 2 === 0 ? 'even' : 'odd'}!</p>
    );
}