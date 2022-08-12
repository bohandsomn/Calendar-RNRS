import React from 'react'
import { useStyled } from '../../../../hooks'
import { Text, View } from '../../atoms'

const DayOfTheWeek: React.FC = ({ children }) => {
    const style = useStyled("width-100%/7", "align-items-center")
    
    return (
        <View style={style}>
            <Text>
                {children}
            </Text>
        </View>
    )
}

export default DayOfTheWeek