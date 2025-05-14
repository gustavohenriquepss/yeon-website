
import React, { createContext, useContext, useState } from 'react';
import i18n from '@/i18n';

interface LanguageContextProps {
  language: string;
  t: (key: string) => string;
  setLanguage: (lang: 'en' | 'pt') => void;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: 'en',
  t: (key: string) => key,
  setLanguage: () => {},
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<'en' | 'pt'>(i18n.getLanguage());
  
  // Function to set language in both state and i18n instance
  const setLanguage = (lang: 'en' | 'pt') => {
    i18n.setLanguage(lang);
    setLanguageState(lang);
  };

  // Use the i18n translation function
  const t = (key: string): string => {
    return i18n.t(key);
  };

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
