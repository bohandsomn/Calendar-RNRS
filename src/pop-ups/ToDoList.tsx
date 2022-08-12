import React from 'react'

import ToDoListCancel from '../components/ui/molecules/to-do-list/Cancel'
import Content from '../components/ui/organisms/to-do-list/Content'
import Container from './Container'

const ToDoList: React.FC = () => {
    return (
        <Container>
            <Content />
            <ToDoListCancel />
        </Container>
    )
}

export default ToDoList