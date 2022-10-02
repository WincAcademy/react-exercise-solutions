// import { useState } from 'react';
import './App.css';
// import { DrinkButtons } from './components/DrinkButtons';
// import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';
import { availableDrinks } from './utils/data';

export const App = () => {
	// const [userDrink, setUserDrink] = useState(tea);
	const greeting = 'Welcome to our cafe!';

	return (
		<div className="App">
			<h1>{greeting}</h1>
			{/* <DrinåçkButtons
				drinkOne={tea} 
				drinkTwo={coffee}
				onClick={setUserDrink}
			/> */}
			<DrinkSearch availableDrinks={availableDrinks} />
			{/* <DrinkChoice drink={userDrink} /> */}
		</div>
	);
};
