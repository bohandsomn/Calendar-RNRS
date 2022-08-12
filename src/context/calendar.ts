import React from 'react'

import type Node from '../utils/calendar/node'

type ICalendar = {
    year: number
    month: number
    dates: Node[]
    increment: () => void
    decrement: () => void
}

const CALENDAR = React.createContext<ICalendar>(undefined!)

export default CALENDAR
