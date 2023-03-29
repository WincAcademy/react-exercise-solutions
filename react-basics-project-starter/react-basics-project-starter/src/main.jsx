import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecipeListPage } from './pages/RecipeListPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <RecipeListPage />
    </ChakraProvider>
  </React.StrictMode>,
);
