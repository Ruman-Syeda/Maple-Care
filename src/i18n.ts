import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  resources: {
    en: { translation: { greeting: 'Hello world' } },
    fr: { translation: { greeting: 'Bonjour le monde' } },
    es: { translation: { greeting: 'Hola mundo' } },
  },
});

export default i18n;