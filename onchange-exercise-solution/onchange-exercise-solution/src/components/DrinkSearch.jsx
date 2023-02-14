import { useState } from 'react';
import { availableDrinks } from '../utils/data';
import { DrinkItems } from './DrinkItems';
import { TextInput } from './ui/TextInput';

export const DrinkSearch = ({ onClick }) => {
	const [searchField, setSearchField] = useState('');

	const matchedDrinks = availableDrinks.filter((drink) => {
		return drink.name.toLowerCase().includes(searchField.toLowerCase());
	});

	const handleChange = (event) => {
		setSearchField(event.target.value);
	};

	return (
		<>
			<label>Search for drinks:</label>
			<TextInput onChange={handleChange} />
			<DrinkItems onClick={onClick} drinks={matchedDrinks} />
		</>
	);
};
