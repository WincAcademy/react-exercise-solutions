import './DrinkButtons.css';

export const DrinkButtons = (props) => {
	return (
        <>
            <h2>Would you like tea or coffee?</h2>
            <div className="button-group">
                <button className="button">{props.drinkOne}</button>
                <button className="button">{props.drinkTwo}</button>
            </div>
        </>
	);
};