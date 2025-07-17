import './DrinkButtons.css';
import { Button } from './ui/Button';

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
	return (
        <>
            <h2>Would you like tea or coffee?</h2>
            <div className="button-group">
                <Button>{drinkOne}</Button>
                <Button>{drinkTwo}</Button>
            </div>
        </>
	);
};