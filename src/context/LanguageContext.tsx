
import React, { createContext, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18n from '@/i18n';

interface LanguageContextProps {
  language: string;
  setLanguage: (language: string) => void;
  t: (key: string, options?: object) => string;
}

const LanguageContext = createContext<LanguageContextProps>({
  language: i18n.language,
  setLanguage: () => {},
  t: (key: string) => key,
});

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { i18n, t } = useTranslation();

  // Initialize language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  const setLanguage = (language: string) => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
    // Instead of router.refresh(), we'll use a different approach
    // Force a re-render by triggering an i18n change event
    window.location.reload(); // Simple solution for now
  };

  // Use the t function from react-i18next directly
  const translate = (key: string, options?: object) => {
    return t(key, options || {});
  };

  return (
    <LanguageContext.Provider value={{ language: i18n.language, setLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};
