import './WeatherIcon.css';

export const WeatherIcon = (props) => {
    return (
        <>
            <img
                className="weather-icon"
                src={props.imageSrc}
                alt="Weather icon"
            />
            <h2>{props.weatherType}</h2>
        </>
    );
};