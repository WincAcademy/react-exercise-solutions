import { useState } from 'react';

export const NumberDisplay = () => {
    const [number, setNumber] = useState(100);

    return (
        <p>The number is: {number}</p>
    );
};