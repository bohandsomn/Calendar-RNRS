import React, { useMemo } from 'react'

import Context from '../context'
import { useToggle } from '../hooks'

const HeaderPrivider: React.FC = ({ children }) => {
    const [isVisible, toggleVisible] = useToggle(false)
    
    const value = useMemo(() => ({
        isVisible,
        toggleVisible
    }), [isVisible])

    return (
        <Context.AUTH.Provider value={value}>
            {children}
        </Context.AUTH.Provider>
    )
}

export default HeaderPrivider