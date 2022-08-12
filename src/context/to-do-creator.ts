import React from 'react'

type IToDoCreator = {
    header: string
    setHeader: (header: string) => void
    content: string
    setContent: (content: string) => void
}

const TO_DO_CREATOR = React.createContext<IToDoCreator>(undefined!)

export default TO_DO_CREATOR
