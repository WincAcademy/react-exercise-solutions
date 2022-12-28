import { DrinkItem } from './DrinkItem';

export const DrinkItems = ({ drinks }) => {
	return (
		<>
			{drinks.map((drink) => (
				<DrinkItem key={drink.id} drink={drink} />
			))}
		</>
	);
};
