import React from 'react'
import { useAppTranslation, useStyled } from '../../../../hooks'
import { Text, View } from '../../atoms'

const Header: React.FC = () => {
    const viewStyle = useStyled("background-color-white")
    const textStyle = useStyled("color-black", "font-family-montserrat-bold")

    const translate = useAppTranslation()
    const header = translate(`
		to-do-list
		header
	`)

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{header}</Text>
        </View>
    )
}

export default Header