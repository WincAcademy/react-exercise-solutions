import './WeatherIcon.css';

export const WeatherIcon = () => {
	return (
        <>
            <img className="weather-icon" src="/weather-icons/sunny.png" alt="Weather icon" />
            <h2>It's Sunny!</h2>
        </>
	);
};