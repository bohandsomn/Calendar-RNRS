import React, { useCallback, useContext } from 'react'

import Context from '../../../../context'
import { useStyled } from '../../../../hooks'
import { View } from '../../atoms'
import { Cancel } from '../icons'

const ToDoListCancel: React.FC = () => {
    const style = useStyled("background-color-white")
    const toDoListContext = useContext(Context.TO_DO_LIST)
    const dateToDoListContext = useContext(Context.DATE_TO_DO_LIST)

    const handleTouchStart = useCallback(() => {
        dateToDoListContext.setDate(null)
        toDoListContext.toggleVisibleToDoList()
    }, [toDoListContext.isVisibleToDoList, dateToDoListContext.date])

    return (
        <View style={style} onTouchStart={handleTouchStart}>
            <Cancel />
        </View>
    )
}

export default ToDoListCancel