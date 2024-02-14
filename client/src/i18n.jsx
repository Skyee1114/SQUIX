import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';
import krTranslation from './locales/kr.json';
import ptTranslation from './locales/pt.json';
import ruTranslation from './locales/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      english: {
        translation: enTranslation,
      },
      portuguese: {
        translation: ptTranslation,
      },
      russian: {
        translation: ruTranslation,
      },
      spanish: {
        translation: esTranslation,
      },
      korean: {
        translation: krTranslation,
      },
    },
    lng: 'english',
    fallbackLng: 'english',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
