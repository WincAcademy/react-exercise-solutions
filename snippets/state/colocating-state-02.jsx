import { useState } from 'react';

export const Classroom = ({ className }) => {
    return (
        <>
            <p>Welcome to {className}!</p>
            <Topic />
        </>
    );
};

export const Topic = () => {
    const [topic, setTopic] = useState('React Basics');

    return (
        <p>Today's topic is: {topic}</p>
    );
};