import React from 'react'
import Context from '../context'
import { IDate } from '../context/date'

const DateProvider: React.FC<Props> = ({ children, ...props }) => {
    return (
        <Context.DATE.Provider value={props}>
            {children}
        </Context.DATE.Provider>
    )
}

type Props = IDate

export default DateProvider