import React, { useContext } from 'react'
import Context from '../context'
import { useStyled } from '../hooks'
import Container from './Container'
import Auth from '../pop-ups/Auth'
import { View } from '../components/ui/atoms'
import AppLogo from '../components/ui/molecules/header/AppLogo'
import Authorization from '../components/ui/molecules/header/Authorization'

const Header: React.FC = () => {
    const style = useStyled("justify-content-space-between", "flex-direction-row", "align-items-center")
    const authContext = useContext(Context.AUTH)

    return (
        <Container>
            <View style={style}>
                <AppLogo />
                <Authorization />
                {authContext.isVisible && <Auth />}
            </View>
        </Container>
    )
}

export default React.memo(Header)