import { useState } from 'react';

export const App = () => {
    const [clicked, setClicked] = useState(false);

    return (
        <>
            <button onClick={() => { setClicked(true); }}>
                Click me!
            </button>

            {clicked && <p>Button was clicked!</p>}
        </>
    );
};