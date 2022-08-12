import React, { useContext, useEffect } from 'react'

import Context from '../../../../../context'
import { useAppDispatch, useAppSelector } from '../../../../../hooks'
import ToDoProvider from '../../../../../providers/ToDo'
import { profileSelector, toDoListSelector } from '../../../../../store/selector'
import actions from '../../../../../store/to-do-list'
import { IToDo } from '../../../../../store/to-do-list/dto'
import { FlatList, Text, View } from '../../../atoms'
import ErrorBoundary from '../../general/ErrorBoundary'
import Spinner from '../../general/Spinner'
import ToDo from './to-do'

const List: React.FC = () => {
    const toDoList = useAppSelector(toDoListSelector)
    const profile = useAppSelector(profileSelector)

    const dispatch = useAppDispatch()
    const dateToDoListContext = useContext(Context.DATE_TO_DO_LIST)

    useEffect(() => {
        const date = dateToDoListContext.date
        const userId = profile.data?.id
        if (date === null || userId === undefined) {
            return
        }
        
        dispatch(actions.getOne.pending({
            date,
            userId
        }) as any)
    }, [])

    if (toDoList.isLoading) {
        return (
            <Spinner />
        )
    }

    if (dateToDoListContext.date === null) {
        return (
            <ErrorBoundary />
        )
    }

    const list = toDoList.data?.[dateToDoListContext.date]

    return (
        <FlatList 
            data={list}
            renderItem={({ item }) => (
                <ToDoProvider key={(item as IToDo).id} {...item as IToDo}>
                    <ToDo />
                </ToDoProvider>
            )}
        />
    )
}

export default List