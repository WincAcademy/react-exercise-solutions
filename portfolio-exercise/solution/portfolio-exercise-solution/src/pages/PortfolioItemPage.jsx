export const PortfolioItemPage = ({ item }) => {
  return (
    <>
      <p>{item.title}</p>
      <img src={item.imageUrl} width="100" height="100" />
      <p>{item.description}</p>
    </>
  );
};
