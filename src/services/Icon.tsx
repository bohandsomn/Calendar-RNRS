import React from 'react'
import { useMemo } from 'react'
import Svg, { Path, SvgProps } from 'react-native-svg'

import type { IDefaultValue } from '../components/ui/molecules/icons/default-value'

class Icon {
    public static readonly create = ({ d, ...defaultValue }: IDefaultValue) => {
        const isArray = Array.isArray(d)

        return React.memo((props: Props) => {
            const properties = useMemo(() => ({...defaultValue, ...props}), [props])

            return (
                <Svg {...properties}>
                    {
                        isArray 
                            ? d.map((string) => (
                                <Path key={string} d={string} />
                            ))
                            : <Path d={d} />
                    }
                </Svg>
            )
        })
    }
}

type Props = SvgProps

export default Icon
