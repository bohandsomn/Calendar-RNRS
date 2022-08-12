import React, { useContext } from 'react'
import { NativeRouter } from 'react-router-native'
import Context from '../context'

import Header from '../layouts/Header'
import Auth from '../pop-ups/Auth'
import AppRoutes from './AppRoutes'

const Navigation: React.FC = () => {
    const authContext = useContext(Context.AUTH)

    return (
        <NativeRouter>
            <Header />
            <AppRoutes />
            {authContext.isVisible && (
                <Auth />
            )}
        </NativeRouter>
    )
}

export default Navigation
