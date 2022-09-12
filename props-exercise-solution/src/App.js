import './App.css';
import { DrinkButtons } from './components/DrinkButtons';
import { DrinkChoice } from './components/DrinkChoice';

// TODO: Create utils/utils.js
const tea = {
	name: 'Tea',
	imgUrl: 'https://media.wincacademy.nl/coffee.jpeg',
	alt: `Picture of a cup of tea`,
};

const coffee = {
	name: 'Coffee',
	imgUrl: 'https://media.wincacademy.nl/tea.jpeg',
	alt: `Picture of a cup coffee`,
};

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
