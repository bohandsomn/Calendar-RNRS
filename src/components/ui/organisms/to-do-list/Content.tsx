import React from 'react'

import { useStyled } from '../../../../hooks'
import { View } from '../../atoms'
import Header from '../../molecules/to-do-list/Header'
import List from '../../molecules/to-do-list/list'
import Creator from './Creator'

const Content: React.FC = () => {
    const style = useStyled("background-color-white", "width-100%")
    
    return (
        <View style={style}>
            <Header />
            <Creator />
            <List />
        </View>
    )
}

export default React.memo(Content)