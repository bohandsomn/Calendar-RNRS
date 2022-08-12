import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector, useAppTranslation, useStyled } from '../../../../hooks'
import actions from '../../../../store/profile'
import { profileSelector } from '../../../../store/selector'
import { Text, View } from '../../atoms'
import ErrorBoundary from '../general/ErrorBoundary'
import Spinner from '../general/Spinner'

const Profile: React.FC = () => {
    const style = useStyled("flex-direction-row")
    const nameStyle = useStyled("font-family-montserrat-bold", "margin-right-20")
    const linkStyle = useStyled("text-decoration-line-underline")
    const profile = useAppSelector(profileSelector)
    const dispatch = useAppDispatch()
    const translate = useAppTranslation()

    const handlePress = useCallback(() => {
        dispatch(actions.signOut.pending() as any)
    }, [])

    const signOut = translate(`
		header
		profile
		sign-out
	`)

    if (profile.isLoading) {
        return (
            <Spinner />
        )
    }

    if (profile.error !== null) {
        return (
            <ErrorBoundary message={profile.error} />
        )
    }

    return (
        <View style={style}>
            <Text style={nameStyle}>
                {profile.data.name}
            </Text>
            <Text onPress={handlePress} style={linkStyle}>{signOut}</Text>
        </View>
    )
}

export default Profile