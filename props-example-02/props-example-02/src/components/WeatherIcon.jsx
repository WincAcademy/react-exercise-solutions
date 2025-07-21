import './WeatherIcon.css';

export const WeatherIcon = ({ imageSrc, weatherType }) => {
    return (
        <>
            <img
                className="weather-icon"
                src={imageSrc}
                alt="Weather icon"
            />
            <h2>{weatherType}</h2>
        </>
    );
};