export const DrinkItem = ({ drink, clickFn }) => {
	return (
		<button key={drink.id} style={styles} onClick={() => clickFn(drink)}>
			<img src={drink.imgUrl} alt={drink.alt} width={50} height={50} />
			<p>{drink.name}</p>
		</button>
	);
};

const styles = {
	display: "flex",
	flexDirection: "row",
	alignItems: "center",
};
