import React, { useContext } from 'react'
import Context from '../../../../../../context'
import { useStyled } from '../../../../../../hooks'
import { Text, View } from '../../../../atoms'

const ToDoView: React.FC = () => {
    const viewStyle = useStyled("background-color-white")
    const headerStyle = useStyled("color-black", "text-decoration-line-underline", "font-family-montserrat-bold")
    const textStyle = useStyled("color-black")
    const toDoContext = useContext(Context.TO_DO)

    return (
        <View style={viewStyle} onTouchStart={toDoContext.toggleFull}>
            <Text style={headerStyle}>{toDoContext.header}</Text>
            {toDoContext.isFull && <Text style={textStyle}>{toDoContext.content}</Text>}
        </View>
    )
}

export default ToDoView