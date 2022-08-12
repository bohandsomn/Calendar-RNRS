import React, { useContext } from 'react'

import Context from '../../../../context'
import { Text } from '../../atoms'
import Container from './Container'

const Date: React.FC = () => {
    const dateContext = useContext(Context.DATE)

    return (
        <Container>
            <Text>
                {dateContext?.date}
            </Text>
        </Container>
    )
}

export default React.memo(Date)