import { Center, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import { DrinkChoice } from './components/DrinkChoice';
import { DrinkSearch } from './components/DrinkSearch';

export const App = () => {
  const [userDrink, setUserDrink] = useState();

  const greeting = 'Welcome to our cafe!';

  return (
    <Center h="100vh" flexDir="column">
      {userDrink ? (
        <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
      ) : (
        <>
          <Heading size="2xl" mb={8} color="blue.200">
            {greeting}
          </Heading>
          <DrinkSearch clickFn={setUserDrink} />
        </>
      )}
    </Center>
  );
};
