import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import resources from './resources'

const language = 'ua'

i18n
    .use(initReactI18next)
    .init({
        compatibilityJSON: 'v3',
        resources,
        lng: language,
        interpolation: {
            escapeValue: false 
        }
    })

export default i18n

