import './DrinkItem.css';

export const DrinkItem = ({ drink, onClick }) => {
	return (
		<button className="drink-item" onClick={() => onClick(drink)}>
			<img src={drink.imgUrl} width={50} height={50} alt={drink.alt} />
			<p>{drink.name}</p>
		</button>
	);
};
