import React, { useCallback, useContext } from 'react'
import Context from '../../../../../context'
import { useAppDispatch, useAppSelector, useAppTranslation } from '../../../../../hooks'
import { profileSelector } from '../../../../../store/selector'
import actions from '../../../../../store/to-do-list'
import Button from '../../general/Button'

const ButtonSubmit: React.FC = () => {
    const dispatch = useAppDispatch()
    const profile = useAppSelector(profileSelector)
    const toDoCreatorContext = useContext(Context.TO_DO_CREATOR)
    const dateToDoListContext = useContext(Context.DATE_TO_DO_LIST)
    const translate = useAppTranslation()

    const creatoButton = translate(`
		to-do-list
		creator
		button
	`)

    const handleSubmit = useCallback(() => {
        if (profile.data === null) {
            return
        }

        const id = (new Date()).getTime()
        const userId = profile.data.id
        const date = dateToDoListContext.date!
        const {content, header} = toDoCreatorContext
        
        dispatch(actions.create.pending({
            id,
            userId,
            date,
            content,
            header,
        }))
        
        toDoCreatorContext.setHeader('')
        toDoCreatorContext.setContent('')

    }, [toDoCreatorContext.content, toDoCreatorContext.header])

    return (
        <Button onPress={handleSubmit}>{creatoButton}</Button> 
    )
}

export default ButtonSubmit