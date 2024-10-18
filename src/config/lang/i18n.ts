import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import esTranslation from '@/config/lang/es.json'
import enTranslation from '@/config/lang/en.json'

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'es'],
    resources: {
      en: {
        translation: enTranslation,
      },
      es: {
        translation: esTranslation,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
