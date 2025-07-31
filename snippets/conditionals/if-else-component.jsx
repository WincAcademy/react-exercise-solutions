const MoodText = ({ isHappy }) => {
    if (isHappy) {
        return <p>Great!</p>;
    }
    else {
        return <p>Meh.</p>;
    }
};

export const App = () => {
    const isHappy = true;

    return (
        <>
            <p>Today I'm feeling:</p>
            <MoodText isHappy={isHappy} />
        </>
    );
};