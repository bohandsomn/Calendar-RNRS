import React, { useCallback, useContext } from 'react'

import { Text, View } from '../components/ui/atoms'
import Button from '../components/ui/molecules/general/Button'
import Field from '../components/ui/molecules/general/Field'
import Context from '../context'
import { useAppDispatch, useAppTranslation, useInput, useStyled } from '../hooks'
import actions from '../store/profile'

const Register: React.FC = () => {
    const viewStyle = useStyled("background-color-white")
    const textStyle = useStyled("color-black", "font-family-montserrat-bold")
    const authContext = useContext(Context.AUTH)
    const translate = useAppTranslation()
    const dispatch = useAppDispatch()

    const [name, changeName] = useInput('') 
    const [login, changeLogin] = useInput('') 
    const [password, changePassword] = useInput('') 

    const header = translate(`
		auth
		register
		header
	`)
    const namePlaceholder = translate(`
		auth
		register
		name
	`)
    const loginPlaceholder = translate(`
		auth
		register
		login
	`)
    const passwordPlaceholder = translate(`
		auth
		register
		password
	`)
    const submit = translate(`
		auth
		register
		submit
	`)

    const handleSubmit = useCallback(() => {
        const id = new Date().getTime()

        dispatch(actions.register.pending({
            id,
            name,
            login,
            password,
        }) as any)

        authContext.toggleVisible()
    }, [login, password, authContext.isVisible])

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{header}</Text>
            <Field
                value={name}
                onChangeText={changeName}
                placeholder={namePlaceholder}
            />
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

export default React.memo(Register)