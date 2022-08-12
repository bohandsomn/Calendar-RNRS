import React from 'react'
import { Text, View } from '../../atoms'

const ErrorBoundary: React.FC<Props> = ({ message }) => {
    return (
        <View>
            <Text>{message}</Text>
        </View>
    )
}

type Props = {
    message?: string
}

export default ErrorBoundary