import { TextInput } from './ui/TextInput';
import { useState } from 'react';

export const DrinkSearch = ({ availableDrinks }) => {
	const [searchField, setSearchField] = useState('');

	const matchedDrinks = availableDrinks.filter((drink) => {
		return drink.name.toLowerCase().includes(searchField.toLowerCase());
	});

	const handleChange = (event) => {
		setSearchField(event.target.value);
		console.log(matchedDrinks);
	};

	return (
		<>
			<label>Search for drinks:</label>
			<TextInput onChange={handleChange} />
		</>
	);
};
