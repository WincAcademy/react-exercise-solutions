import { useState } from 'react';

export const Classroom = ({ className }) => {
    const [topic, setTopic] = useState('React Basics');

    return (
        <>
            <p>Welcome to {className}!</p>
            { topic && <Topic topic={topic} setTopic={setTopic} /> }
        </>
    );
};

export const Topic = ({ topic, setTopic }) => {
    return (
        <p>Today's topic is: {topic}</p>
    );
};