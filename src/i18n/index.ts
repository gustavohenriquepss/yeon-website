
// Enhanced i18n implementation
import { translations } from '@/data/translations';

type Language = 'en' | 'pt';

const i18n = {
  language: 'pt' as Language,
  
  setLanguage(lang: Language) {
    this.language = lang;
  },
  
  t(key: string): string {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    
    return translations[key][this.language];
  },
  
  getLanguage(): Language {
    return this.language;
  }
};

export default i18n;
