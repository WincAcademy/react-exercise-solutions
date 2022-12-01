import { useState } from 'react';
import { TextInput } from './ui/TextInput';

export const DrinkSearch = ({ drinks }) => {
	const [searchField, setSearchField] = useState('test drink');

	return (
		<>
			<label>Search for drinks:</label>
			<TextInput />
			<p>{searchField}</p>
		</>
	);
};
