import React from 'react'

type IAuth = {
    isVisible: boolean
    toggleVisible: () => void
}

const AUTH = React.createContext<IAuth>(undefined!)

export default AUTH
