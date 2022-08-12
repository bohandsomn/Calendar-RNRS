import React from 'react'

type ISidebar = {
    isVisibleSidebar: boolean
    toggleVisibleSidebar: () => void
}

const SIDEBAR = React.createContext<ISidebar>(undefined!)

export default SIDEBAR
