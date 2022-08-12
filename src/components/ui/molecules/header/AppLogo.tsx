import React from 'react'
import { useStyled } from '../../../../hooks'

import { View } from '../../atoms'
import { Logo } from '../icons'

const AppLogo: React.FC = () => {
    const style = useStyled("margin-top-40", "margin-bottom-40")
    
    return (
        <View style={style}>
            <Logo />
        </View>
    )
}

export default React.memo(AppLogo)