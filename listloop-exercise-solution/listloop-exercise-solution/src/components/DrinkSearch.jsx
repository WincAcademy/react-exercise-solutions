import { useState } from 'react';
import { availableDrinks } from '../utils/data';
import { DrinkList } from './DrinkList';
import { TextInput } from './ui/TextInput';

export const DrinkSearch = () => {
  const [searchField, setSearchField] = useState('test drink');

  return (
    <>
      <label>Search for drinks:</label>
      <TextInput />
      <DrinkList drinks={availableDrinks} />
    </>
  );
};
