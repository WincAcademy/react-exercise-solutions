export const DrinkItems = ({ drinks }) => {
	return (
		<>
			{drinks.map((drink) => (
				<p>{drink.name}</p>
			))}
		</>
	);
};
