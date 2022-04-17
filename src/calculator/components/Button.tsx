import React from 'react'
import * as S from './styledComponents.styled'

type Props = {
    handleClick: () => void
}

const Button: React.FC<Props> = ({handleClick}) => {
    return (
        <S.Button onClick={handleClick}>
            Visualize
        </S.Button>
    )
}

export default Button