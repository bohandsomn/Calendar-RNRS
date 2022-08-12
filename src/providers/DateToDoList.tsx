import React, { useMemo, useState } from 'react'
import Context from '../context'

const DateToDoListProvider: React.FC = ({ children }) => {
    const [date, setDate] = useState<string | null>(null)

    const value = useMemo(() => ({
        date,
        setDate
    }), [date])

    return (
        <Context.DATE_TO_DO_LIST.Provider value={value}>
            {children}
        </Context.DATE_TO_DO_LIST.Provider>
    )
}

export default DateToDoListProvider