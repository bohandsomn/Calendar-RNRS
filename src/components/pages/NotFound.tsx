import React from 'react'
import { useAppTranslation } from '../../hooks'
import { Text, View } from '../ui/atoms'

const NotFound: React.FC = () => {
    const translate = useAppTranslation()
    const notFound = translate(`
		not-found
		header
	`)

    return (
        <View>
            <Text>{notFound}</Text>
        </View>
    )
}

export default React.memo(NotFound)
