import React from 'react'

type IToDoList = {
    isVisibleToDoList: boolean
    toggleVisibleToDoList: () => void
}

const TO_DO_LIST = React.createContext<IToDoList>(undefined!)

export default TO_DO_LIST
