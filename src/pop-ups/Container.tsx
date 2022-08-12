import React from 'react'
import { View } from '../components/ui/atoms'
import { useStyled } from '../hooks'

const Container: React.FC = ({ children }) => {
    const style = useStyled(
        "position-absolute", 
        "left-20",
        "right-20",
        "top-20",
        "bottom-20",
        "background-color-white", 
        "padding-top-50",
        "padding-right-50",
        "padding-bottom-50",
        "padding-left-50",
        "border-radius-5",
        "flex-direction-row"
    )

    return (
        <View style={style}>{children}</View>
    )
}

export default Container