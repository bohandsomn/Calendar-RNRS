import React from 'react'
import { Navigate, Route, Routes } from 'react-router-native'
import { View } from '../components/ui/atoms'
import { useStyled } from '../hooks'
import PATH from './path'
import routes from './routes'

const AppRoutes: React.FC = () => {
    const style = useStyled("flex-1")
    const isAuth = true

    return (
        <View style={style}>
            <Routes>
                {
                    routes.public.map(({ path, Element }) => (
                        <Route 
                            key={path}
                            path={path} 
                            element={<Element/>} 
                        />
                    ))
                }
                {
                    routes.auth.map(({ path, Element }) => (
                        isAuth 
                            ? <Route key={path} path={path} element={<Element/>} />
                            : <Route key={path} path={PATH.CALENDAR} element={<Navigate to={PATH.CALENDAR}/>} /> 
                    ))    
                }
                <Route 
                    path={PATH.DEFAULT} 
                    element={<Navigate to={PATH.NOT_FOUND} />} 
                />
            </Routes>
        </View>
    )
}

export default React.memo(AppRoutes)