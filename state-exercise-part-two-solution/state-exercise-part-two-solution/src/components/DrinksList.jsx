import { DrinkItem } from "./DrinkItem";

export const DrinksList = ({ drinks, clickFn }) => {
	return (
		<div>
			<h2>Drinks List</h2>
			{drinks.map((drink) => {
				return <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />;
			})}
		</div>
	);
};
