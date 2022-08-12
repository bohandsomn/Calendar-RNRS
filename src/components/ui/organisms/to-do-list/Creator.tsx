import React from 'react'
import { useStyled } from '../../../../hooks'
import ToDoCreatorProvider from '../../../../providers/ToDoCreator'

import { View } from '../../atoms'
import ButtonSubmit from '../../molecules/to-do-list/creator/ButtonSubmit'
import ContentField from '../../molecules/to-do-list/creator/ContentField'
import Header from '../../molecules/to-do-list/creator/Header'

const Creator: React.FC = () => {
    const style = useStyled("background-color-white")

    return (
        <View style={style}>
            <ToDoCreatorProvider>
                <Header />
                <ContentField />
                <ButtonSubmit />
            </ToDoCreatorProvider>
        </View>
    )
}

export default Creator