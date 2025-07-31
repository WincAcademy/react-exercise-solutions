import './WeatherIcon.css';

export const WeatherIcon = ({ weather }) => {
    return (
        <>
            <img
                className="weather-icon"
                src={weather.imageSrc}
                alt={weather.imageAlt}
            />
            <h2>{weather.weatherType}</h2>
        </>
    );
};