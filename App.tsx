import React from 'react'

import Navigation from './src/navigation'
import { useStyled } from './src/hooks'
import StoreProvider from './src/providers/Store'
import InternationalizationProvider from './src/providers/Internationalization'
import { View } from './src/components/ui/atoms'
import InitialRequest from './src/layouts/InitialRequest'
import HeaderPrivider from './src/providers/Header'

const App: React.FC = () => {
    const style = useStyled("background-color-black", "height-100%")

    return (
        <InternationalizationProvider>
            <StoreProvider>
                <InitialRequest>
                    <HeaderPrivider>
                        <View style={style}>
                            <Navigation />
                        </View>
                    </HeaderPrivider>
                </InitialRequest>
            </StoreProvider>
        </InternationalizationProvider>
    )
}

export default App