import { useLanguage } from "@/contexts/LanguageContext";

export const useLangLink = () => {
  const { language } = useLanguage();
  return (path: string) => {
    const normalized = path.startsWith("/") ? path : `/${path}`;
    return `/${language}${normalized}`;
  };
};