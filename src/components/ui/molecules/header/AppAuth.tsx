import React, { useContext } from 'react'
import Context from '../../../../context'

import { View } from '../../atoms'
import { Auth } from '../icons'

const AppAuth: React.FC = () => {
    const authContext = useContext(Context.AUTH)
    
    return (
        <View onTouchStart={authContext.toggleVisible}>
            <Auth />
        </View>
    )
}

export default React.memo(AppAuth)