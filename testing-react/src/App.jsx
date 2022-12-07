import { useState } from 'react';
import './App.css';

function App() {
    const [name, setName] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setName(e.target.name.value);
    };
    return (
        <div className="App">
            {name ? (
                <>
                    <h1>Hello, {name}</h1>
                    <button onClick={() => setName(null)}>
                        Greet someone else
                    </button>
                </>
            ) : (
                <>
                    <h1>Who needs a greeting?</h1>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="name" />
                        <button type="submit">Greet!</button>
                    </form>
                </>
            )}
        </div>
    );
}

export default App;
