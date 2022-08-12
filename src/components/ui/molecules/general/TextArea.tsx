import React, { useMemo } from 'react'
import { useStyled } from '../../../../hooks'
import { TextInput } from '../../atoms'

const TextArea: React.FC<Props> = ({style, ...props}) => {
    const styleDefault = useStyled(
        "padding-top-10", 
        "padding-left-20", 
        "padding-bottom-10", 
        "padding-right-20",
        "border-radius-5",
        "background-color-white",
        "color-black"
    )

    const styleWithDefault = useMemo(() => ({
        ...styleDefault,
        ...style
    }), [style])

    return (
        <TextInput 
            multiline
            numberOfLines={4}
            style={styleWithDefault}
            {...props} 
        />
    )
}


type Props = typeof TextInput.defaultProps

export default TextArea