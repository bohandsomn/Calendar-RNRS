import React from 'react'
import Spinner from '../components/ui/molecules/general/Spinner'
import { useAppFonts } from '../hooks'

const InitialRequest: React.FC = ({ children }) => {
    const [isFontsLoading] = useAppFonts(['Montserrat_400Regular', 'Montserrat_700Bold'])

    if (!isFontsLoading) {
        return <Spinner />
    }

    return (
        <>
            {children}
        </>
    )
}

export default InitialRequest