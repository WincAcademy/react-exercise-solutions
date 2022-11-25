import { useState } from 'react';
import './App.css';
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkChoice } from './components/DrinkChoice';
import { availableDrinks } from './utils/data';

export const App = () => {
	const [userDrink, setUserDrink] = useState();
	const greeting = 'Welcome to our cafe!';

	return (
		<div className="app">
			<h1>{greeting}</h1>
			{userDrink ? (
				<DrinkChoice drink={userDrink} />
			) : (
				<DrinkButtons
					drinkOne={availableDrinks[0]}
					drinkTwo={availableDrinks[1]}
					onClick={setUserDrink}
				/>
			)}
		</div>
	);
};
