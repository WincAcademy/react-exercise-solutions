import { useState } from 'react';
import './App.css';
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';
import { tea, coffee } from './utils/data';

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
					<DrinkButtons
						drinkOne={tea}
						drinkTwo={coffee}
						onClick={setUserDrink}
					/>
					<DrinkSearch />
				</>
			)}
		</div>
	);
};
