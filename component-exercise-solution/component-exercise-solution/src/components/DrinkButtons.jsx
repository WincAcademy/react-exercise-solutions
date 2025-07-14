import './DrinkButtons.css';

export const DrinkButtons = () => {
	return (
        <>
            <h2>Would you like tea or coffee?</h2>
            <div className="button-group">
                <button className="button">Tea</button>
                <button className="button">Coffee</button>
            </div>
        </>
	);
};