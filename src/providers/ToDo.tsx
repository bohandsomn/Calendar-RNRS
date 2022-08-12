import React, { useMemo } from 'react'
import Context from '../context'
import { useToggle } from '../hooks'
import { IToDo } from '../store/to-do-list/dto'

const ToDoProvider: React.FC<Props> = ({ children, ...props }) => {
    const [isFull, toggleFull] = useToggle(false)

    const value = useMemo(() => ({
        ...props,
        isFull,
        toggleFull
    }), [props, isFull])

    return (
        <Context.TO_DO.Provider value={value}>
            { children }
        </Context.TO_DO.Provider>
    )
}

type Props = IToDo

export default ToDoProvider