import React from 'react'
import { useStyled } from '../../../../hooks'
import { Image } from '../../atoms'

const Spinner: React.FC = () => {
    const style = useStyled("width-100px", "height-100px")

    return (
        <Image 
            style={style}
            source={require('../../../../assets/images/Spinner.gif')} 
        />
    )
}

export default Spinner