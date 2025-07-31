import './App.css'
import { WeatherIcon } from './components/WeatherIcon'
import { sunnyWeather, cloudyWeather } from './utils/data'

export const App = () => {
    let sunny = true;

    return (
        <>
            <h1>Winc Weather App</h1>
            <WeatherIcon weather={
                sunny
                    ? sunnyWeather
                    : cloudyWeather
            } />
        </>
    )
}