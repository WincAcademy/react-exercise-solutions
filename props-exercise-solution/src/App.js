import './App.css';
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkChoice } from './components/DrinkChoice';
import { tea } from './utils/data';

export const App = () => {
	const greeting = 'Welcome to our cafe!';

	const userDrink = tea;

	return (
		<div className="App">
			<h1>{greeting}</h1>
			<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
			<DrinkChoice drink={userDrink} />
		</div>
	);
};
