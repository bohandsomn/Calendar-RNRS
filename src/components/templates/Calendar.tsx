import React, { useContext } from 'react'

import Context from '../../context'
import ToDoList from '../../pop-ups/ToDoList'
import { View } from '../ui/atoms'
import Dates from '../ui/organisms/calendar/Dates'
import DaysOfTheWeek from '../ui/organisms/calendar/DaysOfTheWeek'
import Header from '../ui/organisms/calendar/Header'
import Navigation from '../ui/organisms/calendar/Navigation'

const CalendarTemlate: React.FC = () => {
    const toDoListContext = useContext(Context.TO_DO_LIST)

    return (
        <View>
            <Header />
            <DaysOfTheWeek />
            <Dates />
            <Navigation />
            {toDoListContext.isVisibleToDoList && <ToDoList />}
        </View>
    )
}

export default CalendarTemlate