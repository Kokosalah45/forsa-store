import {
  createContext,
  useContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";

import * as Localization from "expo-localization";
import { useTranslation } from "react-i18next";

type locales = "en" | "ar";

const languageContext = createContext<
  Partial<{
    locale: locales;
    setLocale: Dispatch<SetStateAction<locales>>;
    t: Function;
    dir: "ltr" | "rtl";
  }>
>({});

interface IProps {
  children: React.ReactNode;
}

export function LanguageProvider({ children }: IProps) {
  const { t, i18n } = useTranslation();

  const [locale, setLocale] = useState<locales>(Localization.locale as locales);

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [locale]);

  return (
    <languageContext.Provider value={{ setLocale, t, locale, dir: i18n.dir() }}>
      {children}
    </languageContext.Provider>
  );
}

export const useLanguageContext = () => useContext(languageContext);
