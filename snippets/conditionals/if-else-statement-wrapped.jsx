// JSX ternary operator (if-else-expression)
export const App = () => {
    return (
        <>
            {isHappy
                ? <p>I'm feeling great!</p>
                : <p>Meh.</p>}
        </>
    );
};