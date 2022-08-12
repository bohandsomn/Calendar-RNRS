import React, { useCallback, useMemo } from 'react'
import Context from '../context'
import { useNumber } from '../hooks'
import Calendar from '../utils/calendar'

const CalendarProvider: React.FC = ({ children }) => {
    const [year, incrementYear, decrementYear] = useNumber(new Date().getFullYear())
    const [month, incrementMonth, decrementMonth] = useNumber(new Date().getMonth())

    const increment = useCallback(() => {
        if (month === 11) {
            incrementYear()
            incrementMonth(0)
        } else {
            incrementMonth()
        }
    }, [month])

    const decrement = useCallback(() => {
        if (month === 0) {
            decrementYear()
            decrementMonth(11)
        } else {
            decrementMonth()
        }
    }, [month])

    const calendar = useMemo(() => new Calendar(year), [year])
    const dates = useMemo(() => [...calendar].filter((node) => node.month === month), [month])

    const value = useMemo(() => ({
        year,
        month,
        dates,
        increment,
        decrement,
    }), [month])
    return (
        <Context.CALENDAR.Provider value={value}>
            {children}
        </Context.CALENDAR.Provider>
    )
}

export default CalendarProvider