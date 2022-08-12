import React from 'react'
import { useAppSelector } from '../../../../hooks'
import { profileSelector } from '../../../../store/selector'
import { View } from '../../atoms'
import AppAuth from './AppAuth'
import Profile from './Profile'

const Authorization: React.FC = () => {
    const profile = useAppSelector(profileSelector)

    return (
        <View>
            {
                profile.data?.login === undefined 
                    ? <AppAuth />
                    : <Profile />
            }
        </View>
    )
}

export default Authorization