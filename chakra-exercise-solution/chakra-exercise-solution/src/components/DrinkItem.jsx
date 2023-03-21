import { Center, Image, Text, WrapItem } from '@chakra-ui/react';

export const DrinkItem = ({ drink, clickFn }) => {
  return (
    <WrapItem>
      <Center gap={8} cursor={'pointer'} onClick={() => clickFn(drink)}>
        <Image
          src={drink.imgUrl}
          w={50}
          h={50}
          borderRadius={'xl'}
          alt={drink.alt}
        />
        <Text fontWeight={'450'}>{drink.name}</Text>
      </Center>
    </WrapItem>
  );
};
