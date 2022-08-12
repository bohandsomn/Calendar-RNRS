import React, { useMemo } from 'react'
import Context from '../context'
import { useInput } from '../hooks'

const ToDoCreatorProvider: React.FC = ({ children }) => {
    const [header, setHeader] = useInput('')
    const [content, setContent] = useInput('')

    const value = useMemo(() => ({
        header,
        setHeader,
        content,
        setContent,
    }), [header, content])

    return (
        <Context.TO_DO_CREATOR.Provider value={value}>
            {children}
        </Context.TO_DO_CREATOR.Provider>
    )
}

export default ToDoCreatorProvider