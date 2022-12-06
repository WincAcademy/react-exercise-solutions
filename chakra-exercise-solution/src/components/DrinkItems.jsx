import { Wrap } from '@chakra-ui/react';
import { DrinkItem } from './DrinkItem';

export const DrinkItems = ({ drinks, onClick }) => {
	return (
		<Wrap spacing={16} w="2xl" justify={'center'}>
			{drinks.map((drink) => (
				<DrinkItem key={drink.id} drink={drink} onClick={onClick} />
			))}
		</Wrap>
	);
};
