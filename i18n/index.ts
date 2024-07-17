import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import {CommonEN} from '../locales/en';
import {CommonTA} from '../locales/ta';

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  debug: false,
  fallbackLng: 'en',
  interpolation: {escapeValue: false},
  ns: ['common'],
  defaultNS: 'common',
  lng: 'en',
  resources: {
    en: {
      common: CommonEN,
    },
    ta: {
      common: CommonTA,
    },
  },
});

export default i18n;
