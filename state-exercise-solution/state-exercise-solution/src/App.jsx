import './App.css'
import { WeatherIcon } from './components/WeatherIcon'
import { sunnyWeather, cloudyWeather } from './utils/data'
import { useState } from 'react'

export const App = () => {
    const [weather, setWeather] = useState(sunnyWeather);

    return (
        <>
            <h1>Winc Weather App</h1>
            { weather && <WeatherIcon weather={weather} /> }
        </>
    )
}