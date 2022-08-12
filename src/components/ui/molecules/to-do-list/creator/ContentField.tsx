import React, { useContext } from 'react'
import Context from '../../../../../context'
import { useAppTranslation } from '../../../../../hooks'
import TextArea from '../../general/TextArea'

const ContentField: React.FC = () => {
    const {content, setContent} = useContext(Context.TO_DO_CREATOR)
    const translate = useAppTranslation()

    const creatoContent = translate(`
		to-do-list
		creator
		content
	`)

    return (
        <TextArea 
            placeholder={creatoContent} 
            value={content}
            onChangeText={setContent}
        />
    )
}

export default ContentField