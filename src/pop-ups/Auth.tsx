import React, { useCallback, useContext, useState } from 'react'
import { Text, View } from '../components/ui/atoms'
import { Cancel } from '../components/ui/molecules/icons'
import Context from '../context'
import { useStyled } from '../hooks'
import Login from '../screens/Login'
import Register from '../screens/Register'
import Container from './Container'

const Auth: React.FC = () => {
    const style = useStyled("background-color-white", "flex-direction-row")
    const contentStyle = useStyled("background-color-white", "width-100%")
    const textStyle = useStyled("color-black")
    const [mode, setMode] = useState<'LOGIN' | 'REGISTER'>('LOGIN')
    const authContext = useContext(Context.AUTH)

    const handleToggle = useCallback(() => setMode(mode === 'LOGIN' ? 'REGISTER' : 'LOGIN'), [mode])

    return (
        <Container>
            <View style={style}>
                <View style={contentStyle}>
                    {
                        mode === 'LOGIN'
                            ? <Login />
                            : <Register />
                    }
                    <Text style={textStyle} onPress={handleToggle}>
                        {
                            mode === 'LOGIN'
                                ? 'Register'
                                : 'Login'
                        }
                    </Text>
                </View>
                <Cancel onPress={authContext.toggleVisible} />
            </View>
        </Container>
    )
}

export default Auth