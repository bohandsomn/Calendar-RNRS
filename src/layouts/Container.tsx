import React from 'react'
import { View } from '../components/ui/atoms'
import { useStyled } from '../hooks'

const Container: React.FC = ({ children }) => {
    const style = useStyled("margin-right-20", "margin-left-20")
    return (
        <View style={style}>{children}</View>
    )
}

export default Container