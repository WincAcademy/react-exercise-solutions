import { useState } from "react";
import { TextInput } from "./ui/TextInput";
import { DrinksList } from "./DrinksList";
import { availableDrinks } from "../utils/data";

export const DrinkSearch = ({ clickFn }) => {
	const [searchField, setSearchField] = useState("");
	const handleChange = (event) => {
		setSearchField(event.target.value);
	};
	const matchedDrinks = availableDrinks.filter((drink) =>
		drink.name.toLowerCase().includes(searchField.toLowerCase())
	);
	return (
		<>
			<label>Search for drinks:</label>
			<TextInput changeFn={handleChange} />
			<DrinksList drinks={matchedDrinks} clickFn={clickFn} />
		</>
	);
};
