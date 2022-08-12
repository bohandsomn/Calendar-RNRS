import React, { useContext } from 'react'

import Context from '../../../../context'
import { useStyled } from '../../../../hooks'
import DateProvider from '../../../../providers/Date'
import { View } from '../../atoms'
import Date from '../../molecules/date'

const Dates: React.FC = () => {
    const contextCalendar = useContext(Context.CALENDAR)
    const style = useStyled("flex-wrap-wrap", "flex-direction-row", "height-300px", "margin-bottom-20")

    const first = contextCalendar.dates[0]!
    const last = contextCalendar.dates[contextCalendar.dates.length - 1]!
    
    const daysBefore = first.day
    const daysAfter = 7 - (daysBefore + last.date) % 7

    return (
        <View style={style}>
            {
                Array
                    .from({length: daysBefore})
                    .map((_, index) => (
                        <Date key={index} />
                    ))
            }
            {
                contextCalendar
                    .dates
                    .map((node, index) => (
                        <DateProvider key={index} {...node}>
                            <Date />
                        </DateProvider>
                    ))
            }
            {
                Array
                    .from({length: daysAfter})
                    .map((_, index) => (
                        <Date key={index} />
                    ))
            }
        </View>
    )
}

export default React.memo(Dates)