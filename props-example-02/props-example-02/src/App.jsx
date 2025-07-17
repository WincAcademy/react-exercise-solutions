import './App.css'
import { DrinkButtons } from './components/DrinkButtons'

export const App = () => {
    const coffee = "Coffee";

    return (
        <>
            <h1>Welcome to our cafe!</h1>
            <DrinkButtons drinkOne={"Tea"} drinkTwo={coffee} />
        </>
    )
}