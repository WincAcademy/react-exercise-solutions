import { DrinkItem } from './DrinkItem';

export const DrinkItems = ({ drinks, onClick }) => {
	return (
		<>
			{drinks.map((drink) => (
				<DrinkItem key={drink.id} drink={drink} onClick={onClick} />
			))}
		</>
	);
};
