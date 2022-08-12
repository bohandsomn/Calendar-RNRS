import React, { useMemo } from 'react'

import STYLES from '../../styles'
import defaultValue from '../../styles/default'
import styled, { PropsBase } from './styled'

type Style = keyof typeof STYLES
type Styles = typeof STYLES
export type TagName = keyof PropsBase

type Props<T extends TagName> = Omit<PropsBase[T], 'style'> & { 
    style?: Styles[Style]
}

class Atom {
    public static create<T extends TagName>(tagName: T) {
        const Component: any = styled[tagName]
        
        return React.forwardRef<unknown, Props<T>>(({style, ...props}, ref) => {
            const styleWithDefault = useMemo(() => ({
                ...defaultValue[tagName],
                ...style
            }), [style])
            
            return (
                <Component 
                    style={styleWithDefault}
                    ref={ref} 
                    {...props}
                />
            )
        })
    }
}

export default Atom
