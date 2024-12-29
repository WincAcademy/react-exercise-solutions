import { useState } from "react";
import "./App.css";
import { DrinkChoice } from "./components/DrinkChoice";
import { DrinkSearch } from "./components/DrinkSearch";
import { Heading } from "@chakra-ui/react";

export const App = () => {
	const [userDrink, setUserDrink] = useState();

	const greeting = "Welcome to our cafe!";
	console.log({ userDrink });
	return (
		<div className='app'>
			{userDrink ? (
				<DrinkChoice drink={userDrink} clickFn={setUserDrink} />
			) : (
				<>
					<Heading marginBottom={8} fontSize={"3xl"} color='blue.100'>
						{greeting}
					</Heading>
					<DrinkSearch clickFn={setUserDrink} />
				</>
			)}
		</div>
	);
};
