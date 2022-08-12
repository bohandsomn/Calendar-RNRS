import { useMemo } from 'react'
import STYLES from '../styles'

const useStyled = <S extends (keyof typeof STYLES)[]>(...styles: S) => {
    const style = useMemo(() => styles.reduce((accumulator, current) => ({
        ...accumulator,
        ...STYLES[current]
    }), {} as typeof STYLES[S[number]]), [styles])

    return style 
}

export default useStyled
