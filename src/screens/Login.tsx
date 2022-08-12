import React, { useCallback, useContext } from 'react'

import { Text, View } from '../components/ui/atoms'
import Button from '../components/ui/molecules/general/Button'
import Field from '../components/ui/molecules/general/Field'
import Context from '../context'
import { useAppDispatch, useAppTranslation, useInput, useStyled } from '../hooks'
import actions from '../store/profile'

const Login: React.FC = () => {
    const viewStyle = useStyled("background-color-white")
    const textStyle = useStyled("color-black", "font-family-montserrat-bold")
    const authContext = useContext(Context.AUTH)
    const translate = useAppTranslation()
    const dispatch = useAppDispatch()

    const [login, changeLogin] = useInput('') 
    const [password, changePassword] = useInput('') 

    const header = translate(`
		auth
		login
		header
	`)
    const loginPlaceholder = translate(`
		auth
		login
		login
	`)
    const passwordPlaceholder = translate(`
		auth
		login
		password
	`)
    const submit = translate(`
		auth
		login
		submit
	`)

    const handleSubmit = useCallback(() => {
        dispatch(actions.login.pending({
            login,
            password
        }) as any)

        authContext.toggleVisible()
    }, [login, password, authContext.isVisible])

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{header}</Text>
            <Field
                value={login}
                onChangeText={changeLogin}
                placeholder={loginPlaceholder}
            />
            <Field
                value={password}
                onChangeText={changePassword}
                placeholder={passwordPlaceholder}
            />
            <Button onPress={handleSubmit}>{submit}</Button>
        </View>
    )
}

export default React.memo(Login)