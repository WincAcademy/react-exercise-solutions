const isHappy = true;

// Generic JavaScript if-statement
if (isHappy)
    console.log("I'm feeling great!");

// JSX truthy operator (if-expression)
export const App = () => {
    return (
        isHappy && <p>I'm feeling great!</p>
    );
};