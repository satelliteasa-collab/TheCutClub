import React, { useState } from 'react';
import { Page, Theme } from './types';
import { ThemeSelector } from './components/ThemeSelector';
import { ThemeIndustrial } from './components/ThemeIndustrial';
import { ThemeOrganic } from './components/ThemeOrganic';
import { ThemeCyber } from './components/ThemeCyber';

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(Theme.MODERN);
  const [currentPage, setCurrentPage] = useState<Page>(Page.TOP);

  const renderTheme = () => {
    switch (currentTheme) {
      case Theme.MODERN:
        // ThemeIndustrial now contains the Modern Modern design
        return <ThemeIndustrial page={currentPage} setPage={setCurrentPage} />;
      case Theme.ORGANIC:
        return <ThemeOrganic page={currentPage} setPage={setCurrentPage} />;
      case Theme.ROYAL:
        // ThemeCyber now contains the Royal Luxury design
        return <ThemeCyber page={currentPage} setPage={setCurrentPage} />;
      default:
        return <ThemeIndustrial page={currentPage} setPage={setCurrentPage} />;
    }
  };

  return (
    <>
      {renderTheme()}
      <ThemeSelector currentTheme={currentTheme} setTheme={setCurrentTheme} />
    </>
  );
};

export default App;