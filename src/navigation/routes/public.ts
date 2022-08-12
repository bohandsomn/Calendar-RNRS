import CalendarPage from '../../components/pages/Calendar'
import NotFound from '../../components/pages/NotFound'
import ToDoList from '../../pop-ups/ToDoList'
import PATH from '../path'
import type Route from './route.interface'

const publicRoutes: Route[] = [
    {
        path: PATH.NOT_FOUND,
        Element: NotFound
    },
    {
        path: PATH.CALENDAR,
        Element: CalendarPage
    },
]

export default publicRoutes
