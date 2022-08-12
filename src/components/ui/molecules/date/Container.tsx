import React, { useCallback, useContext } from 'react'

import Context from '../../../../context'
import { useStyled } from '../../../../hooks'
import TimeConverter from '../../../../utils/time-converter'
import { View } from '../../atoms'

const Container: React.FC = ({ children }) => {
    const style = useStyled("width-100%/7", "height-50px", "align-items-center", "justify-content-center")
    
    const dateContext = useContext(Context.DATE)
    const toDoListContext = useContext(Context.TO_DO_LIST)
    const dateToDoListContext = useContext(Context.DATE_TO_DO_LIST)

    const handleTouchStart = useCallback(() => {
        if (!dateContext) {
            return
        }

        const {year, month, date} = dateContext

        const milliseconds = new Date(year, month, date).getTime()
        const convertedDate = TimeConverter.convert({
            from: 'milliseconds',
            to: 'date',
            data: milliseconds
        })

        dateToDoListContext.setDate(convertedDate)
        toDoListContext.toggleVisibleToDoList()
    }, [dateContext])

    if (!dateContext) {
        return (
            <View style={style} />
        )  
    }

    return (
        <View onTouchStart={handleTouchStart} style={style}>
            {children}
        </View>
    )
}

export default Container