import { useState } from 'react';
import './App.css';
import { PortfolioItemPage } from './pages/PortfolioItemPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { portfolioItems } from './utils/data';

export const App = () => {
  console.log(portfolioItems);
  const [selectedItem, setSelectedItem] = useState(portfolioItems[0]);

  return (
    <div className="App">
      {selectedItem ? (
        <PortfolioItemPage item={selectedItem} />
      ) : (
        <PortfolioPage />
      )}
    </div>
  );
};
