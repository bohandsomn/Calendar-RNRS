import React, { useContext } from 'react'

import Context from '../../../../context'
import { useAppTranslation, useStyled } from '../../../../hooks'
import Container from '../../../../layouts/Container'
import { View } from '../../atoms'
import Button from '../../molecules/general/Button'

const Navigation: React.FC = () => {
    const calendarContext = useContext(Context.CALENDAR)
    const style = useStyled("flex-direction-row", "justify-content-space-between")
    
    const translate = useAppTranslation()
    const previous = translate(`
		calendar
		navigation
		previous
	`)
    const next = translate(`
		calendar
		navigation
		next
	`)

    return (
        <Container>
            <View style={style}>
                <Button onPress={calendarContext.decrement}>{previous}</Button>
                <Button onPress={calendarContext.increment}>{next}</Button>
            </View>
        </Container>
    )
}

export default React.memo(Navigation)