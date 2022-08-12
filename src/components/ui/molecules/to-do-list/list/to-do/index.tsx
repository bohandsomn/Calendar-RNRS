import React, { useCallback, useContext } from 'react'
import Context from '../../../../../../context'
import { useAppDispatch, useStyled } from '../../../../../../hooks'
import actions from '../../../../../../store/to-do-list'
import { View } from '../../../../atoms'
import { Bucket } from '../../../icons'
import ToDoView from './ToDoView'

const ToDo: React.FC = () => {
    const dispatch = useAppDispatch()
    const style = useStyled("flex-direction-row", "justify-content-space-between", "background-color-white", "padding-top-10", "padding-bottom-10")
    const toDoContext = useContext(Context.TO_DO)

    const handlePress = useCallback(() => {
        const {id, date} = toDoContext
        dispatch(actions.delete.pending({id, date}) as any)
    }, [toDoContext.id, toDoContext.date])

    return (
        <View style={style}>
            <ToDoView />
            <Bucket onPress={handlePress} />
        </View>
    )
}

export default ToDo