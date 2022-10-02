import './DrinkButtons.css';
import { Button } from './ui/Button';

export const DrinkButtons = ({ drinkOne, drinkTwo, onClick }) => {
	return (
		<>
			<h2>
				Would you like {drinkOne.name} or {drinkTwo.name}?
			</h2>
			<div className="Button-group">
				<Button text={drinkOne.name} onClick={() => onClick(drinkOne)} />
				<Button text={drinkTwo.name} onClick={() => onClick(drinkTwo)} />
			</div>
		</>
	);
};
