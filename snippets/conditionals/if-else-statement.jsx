const isHappy = true;

// Generic JavaScript if-else-statement
if (isHappy) {
    console.log("I'm feeling great!");
} else {
    console.log("Meh.");
}

// JSX ternary operator (if-else-expression)
export const App = () => {
    return (
        isHappy
            ? <p>I'm feeling great!</p>
            : <p>Meh.</p>
    );
};