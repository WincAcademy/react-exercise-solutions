export const PortfolioItemPage = ({ item }) => {
	const { title, description, imageUrl } = item;
	return (
		<>
			<h1>{title}</h1>
			<img src={imageUrl} />
			<p>{description}</p>
		</>
	);
};
