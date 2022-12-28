import { useState } from 'react';
import { availableDrinks } from '../utils/data';
import { DrinkItems } from './DrinkItems';
import { TextInput } from './ui/TextInput';

export const DrinkSearch = () => {
	const [searchField, setSearchField] = useState('test drink');

	return (
		<>
			<label>Search for drinks:</label>
			<TextInput />
			<DrinkItems drinks={availableDrinks} />
		</>
	);
};
