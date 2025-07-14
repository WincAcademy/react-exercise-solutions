import './App.css'

function App() {
    const greeting = "Welcome to React!"
    const description = <p>This app is going to change your life.</p>
    
    return (
        <div>
            <h1>Hello World!</h1>
            <p>{greeting}</p>
            {description}
        </div>
    )
}

export default App