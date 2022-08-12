import React from 'react'

import { useAppTranslation, useStyled } from '../../../../hooks'
import Calendar from '../../../../utils/calendar'
import { View } from '../../atoms'
import DayOfTheWeek from '../../molecules/day-df-the-week'

const DaysOfTheWeek: React.FC = () => {
    const style = useStyled("flex-direction-row", "justify-content-space-between")
    const translate = useAppTranslation()

	const translatedWeeks = Calendar.weeks.map((week) => translate(`
		calendar
		days-of-the-week
		${week}
	`))

    return (
        <View style={style}>
			{
				translatedWeeks.map((week) => (
					<DayOfTheWeek key={week}>{week}</DayOfTheWeek>
				))
			}
        </View>
    )
}

export default React.memo(DaysOfTheWeek)