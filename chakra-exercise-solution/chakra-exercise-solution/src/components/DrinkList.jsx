import { Flex } from '@chakra-ui/react';
import { DrinkItem } from './DrinkItem';

export const DrinkList = ({ drinks, clickFn }) => {
  return (
    <Flex gap={16} w="50%" flexWrap="wrap" justify={'center'}>
      {drinks.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} clickFn={clickFn} />
      ))}
    </Flex>
  );
};
