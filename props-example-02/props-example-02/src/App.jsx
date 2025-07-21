import './App.css'
import { WeatherIcon } from './components/WeatherIcon'

export const App = () => {
    const sunnyWeather = "Sunny";

    return (
        <>
            <h1>Winc Weather App</h1>
            <WeatherIcon
                imageSrc="/weather-icons/sunny.png"
                weatherType={sunnyWeather}
            />
        </>
    )
}