import {
  Card,
  Image,
  CardBody,
  Stack,
  Heading,
  Text,
  Flex,
} from '@chakra-ui/react';
import { Tag } from './ui/PortfolioItemPage';

export const PortfolioItemCard = ({ item, clickFn }) => {
  return (
    <Card
      borderRadius="xl"
      w="sm"
      h="30rem"
      onClick={() => clickFn(item)}
      cursor="pointer"
      _hover={{ transform: 'scale(1.01)' }}
    >
      <CardBody>
        <Image h={64} w="sm" src={item.imageUrl} borderRadius="xl" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{item.title}</Heading>
          <Text>{item.summary}</Text>
          <Flex gap={2}>
            {item.skills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </Flex>
        </Stack>
      </CardBody>
    </Card>
  );
};
