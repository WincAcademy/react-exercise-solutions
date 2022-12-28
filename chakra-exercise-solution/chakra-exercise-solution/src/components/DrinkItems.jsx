import { Flex } from '@chakra-ui/react';
import { DrinkItem } from './DrinkItem';

export const DrinkItems = ({ drinks, onClick }) => {
	return (
		<Flex gap={16} w="50%" flexWrap="wrap" justify={'center'}>
			{drinks.map((drink) => (
				<DrinkItem key={drink.id} drink={drink} onClick={onClick} />
			))}
		</Flex>
	);
};
