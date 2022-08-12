import { useTranslation } from 'react-i18next'
import en from '../internationalization/resources/en'

type Translate = (name: keyof typeof en.translation) => string

const useAppTranslation = (): Translate => {
    const translate = useTranslation().t
    return translate
}

export default useAppTranslation
