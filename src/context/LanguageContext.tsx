
import React, { createContext, useContext } from 'react';

interface LanguageContextProps {
  language: string;
  t: (key: string) => string; // Simple function that just returns the key
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Simple implementation that just returns the translation key
  const t = (key: string): string => {
    return key;
  };

  return (
    <LanguageContext.Provider value={{ language: 'en', t }}>
      {children}
    </LanguageContext.Provider>
  );
};
