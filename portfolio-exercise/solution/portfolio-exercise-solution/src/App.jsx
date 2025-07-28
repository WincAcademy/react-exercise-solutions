import './App.css';
import { useState } from 'react';
import { PortfolioItemPage } from './pages/PortfolioItemPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { portfolioItems } from './utils/data';

export const App = () => {
    console.log(portfolioItems);
    const [selectedItem, setSelectedItem] = useState(portfolioItems[0]);

    return (
        <>
            {selectedItem
                ? <PortfolioItemPage item={selectedItem} />
                : <PortfolioPage />
            }
        </>
    );
};
