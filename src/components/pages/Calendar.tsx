import React from 'react'

import CalendarProvider from '../../providers/Calendar'
import DateToDoListProvider from '../../providers/DateToDoList'
import ToDoListProvider from '../../providers/ToDoList'
import CalendarTemlate from '../templates/Calendar'

const CalendarPage: React.FC = () => {
    return (
        <CalendarProvider>
            <DateToDoListProvider>
                <ToDoListProvider>
                    <CalendarTemlate />
                </ToDoListProvider>
            </DateToDoListProvider>
        </CalendarProvider>
    )
}

export default CalendarPage