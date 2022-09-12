import { useState } from 'react';
import './App.css';
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkChoice } from './components/DrinkChoice';
import { coffee, tea } from './utils/data';

export const App = () => {
	const [userDrink, setUserDrink] = useState(coffee);
	const greeting = 'Welcome to our cafe!';

	return (
		<div className="App">
			<h1>{greeting}</h1>
			<DrinkButtons
				drinkOne={tea} // TODO: Write change of tea.name to tea
				drinkTwo={coffee}
				onClick={setUserDrink}
			/>
			<DrinkChoice drink={userDrink} />
		</div>
	);
};
