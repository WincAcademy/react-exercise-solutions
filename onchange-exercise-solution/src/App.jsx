import { useState } from 'react';
import './App.css';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';

export const App = () => {
	const [userDrink, setUserDrink] = useState();

	const greeting = 'Welcome to our cafe!';

	return (
		<div className="app">
			{userDrink ? (
				<DrinkChoice drink={userDrink} onClick={setUserDrink} />
			) : (
				<>
					<h1>{greeting}</h1>
					<DrinkSearch onClick={setUserDrink} />
				</>
			)}
		</div>
	);
};
