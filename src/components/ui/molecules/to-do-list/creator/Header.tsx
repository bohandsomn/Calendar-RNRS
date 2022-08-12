import React, { useContext } from 'react'
import Context from '../../../../../context'
import { useAppTranslation, useStyled } from '../../../../../hooks'
import Field from '../../general/Field'

const Header: React.FC = () => {
    const style = useStyled("font-family-montserrat-bold")
    const {header, setHeader} = useContext(Context.TO_DO_CREATOR)
    const translate = useAppTranslation()

    const creatorHeader = translate(`
		to-do-list
		creator
		header
	`)

    return (
        <Field 
            style={style}
            placeholder={creatorHeader} 
            value={header}
            onChangeText={setHeader}
        />
    )
}

export default Header