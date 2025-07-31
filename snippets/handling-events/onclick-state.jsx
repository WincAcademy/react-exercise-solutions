import { useState } from 'react';

export const App = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(true);
    };

    return (
        <>
            <button onClick={handleClick}>
                Click me!
            </button>

            {clicked && <p>Button was clicked!</p>}
        </>
    );
};