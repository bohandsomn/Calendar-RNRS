import React, { useMemo } from 'react'
import { useStyled } from '../../../../hooks'
import { Pressable, Text } from '../../atoms'

const Button: React.FC<Props> = ({ children, style, textStyle, ...props }) => {
    const textStyleDefault = useStyled("padding-top-10", "padding-right-20", "padding-bottom-10", "padding-left-20", "border-radius-5")
    const styleDefault = useStyled("border-radius-5")

    const textStyleWithDefault = useMemo(() => ({
        ...textStyleDefault,
        ...textStyle
    }), [textStyle])

    const styleWithDefault = useMemo(() => ({
        ...styleDefault,
        ...style
    }), [style])

    return (
        <Pressable style={styleWithDefault} {...props}>
            <Text style={textStyleWithDefault}>{children}</Text>
        </Pressable>
    )
}

type DefaultProps = typeof Pressable.defaultProps
type Props = DefaultProps & {
    textStyle?: NonNullable<DefaultProps>['style']
}

export default Button