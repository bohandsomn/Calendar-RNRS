import React, { useContext } from 'react'

import Context from '../../../../context'
import { useAppTranslation, useStyled } from '../../../../hooks'
import Container from '../../../../layouts/Container'
import Calendar from '../../../../utils/calendar'
import { Text, View } from '../../atoms'

const Header: React.FC = () => {
    const translate = useAppTranslation()
    const calendarContext = useContext(Context.CALENDAR)

    const yearStyle = useStyled("font-family-montserrat-bold", "margin-right-20")
    const monthStyle = useStyled("font-family-montserrat-bold")
    const headerStyles = useStyled("margin-bottom-20", "flex-direction-row")

    const month = translate(`
		calendar
		header
		${Calendar.months[calendarContext.month]}
	`)

    return (
        <Container>
            <View style={headerStyles}>
                <Text style={yearStyle}>
                    {calendarContext.year}
                </Text>
                <Text style={monthStyle}>
                    {month}
                </Text>
            </View>
        </Container>
    )
}

export default React.memo(Header)