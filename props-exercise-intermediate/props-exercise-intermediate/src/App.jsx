import './App.css'
import { WeatherIcon } from './components/WeatherIcon'
import { sunnyWeather } from './utils/data'

export const App = () => {
    return (
        <>
            <h1>Winc Weather App</h1>
            <WeatherIcon weather={sunnyWeather} />
        </>
    )
}