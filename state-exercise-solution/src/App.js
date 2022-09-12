import { useState } from 'react';
import './App.css';
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkChoice } from './components/DrinkChoice';

const tea = {
	name: 'Tea',
	imgUrl: 'https://media.wincacademy.nl/tea.jpeg',
	alt: `Picture of a cup of tea`,
};
const coffee = {
	name: 'Coffee',
	imgUrl: 'https://media.wincacademy.nl/coffee.jpeg',
	alt: `Picture of a cup coffee`,
};

export const App = () => {
	const [userDrink, setUserDrink] = useState(coffee);
	const greeting = 'Welcome to our cafe!';

	return (
		<div className="App">
			<h1>{greeting}</h1>
			<DrinkButtons drinkOne={tea.name} drinkTwo={coffee.name} />
			<DrinkChoice drink={userDrink} />
		</div>
	);
};
