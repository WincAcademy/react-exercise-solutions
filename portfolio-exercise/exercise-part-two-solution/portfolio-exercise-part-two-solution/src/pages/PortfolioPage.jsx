import { PortfolioItemCard } from '../components/PortfolioItemCard';
import { portfolioItems } from '../utils/data';
import { Center } from '@chakra-ui/react';

export const PortfolioPage = ({ clickFn }) => {
  return (
    <Center gap={8} h="100vh" bgColor="blue.100">
      {portfolioItems.map((item) => (
        <PortfolioItemCard clickFn={clickFn} item={item} key={item.id} />
      ))}
    </Center>
  );
};
