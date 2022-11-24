import './DrinkButtons.css';
import { Button } from './ui/Button';

export const DrinkButtons = ({ drinkOne, drinkTwo }) => {
	return (
		<>
			<h2>
				Would you like {drinkOne} or {drinkTwo}?
			</h2>
			<div className="button-group">
				<Button text={drinkOne} />
				<Button text={drinkTwo} />
			</div>
		</>
	);
};
