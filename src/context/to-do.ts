import React from 'react'
import { IToDo } from '../store/to-do-list/dto'

const TO_DO = React.createContext<IToDo & {
    isFull: boolean
    toggleFull: () => void
}>(undefined!)

export default TO_DO
