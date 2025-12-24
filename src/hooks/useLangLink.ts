import { useCallback } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const useLangLink = () => {
  // For this project routes don't use an /ar prefix by default.
  // Return the provided path unchanged so navigation works in all languages.
  const { language } = useLanguage();

  return useCallback((path: string) => path || '/', [language]);
};

export default useLangLink;
