import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from '../../public/locales/en/translation.json';
import id from '../../public/locales/id/translation.json';

export const I18nLocaleOptions = ['en', 'id'] as const;
export type I18nLocales = typeof I18nLocaleOptions[number];

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    defaultNS: 'common',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    lng: 'id',
    ns: ['common'],
    resources: {
      en: { common: en },
      id: { common: id },
    },
  });

export default i18n;
