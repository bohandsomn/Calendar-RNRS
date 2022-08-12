import React, { useMemo } from 'react'
import Context from '../context'
import { useToggle } from '../hooks'

const ToDoListProvider: React.FC = ({ children }) => {
    const [isVisibleToDoList, toggleVisibleToDoList] = useToggle(false)
    const value = useMemo(() => ({
        isVisibleToDoList,
        toggleVisibleToDoList
    }), [isVisibleToDoList])

    return (
        <Context.TO_DO_LIST.Provider value={value}>
            {children}
        </Context.TO_DO_LIST.Provider>
    )
}

export default ToDoListProvider