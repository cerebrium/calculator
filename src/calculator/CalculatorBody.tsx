import React from "react"
import { TopSection } from "./components"
import * as S from './styledComponents.styled'

const CalculatorBody: React.FC = () => {
    return (
        <S.Container>
            <S.Header>
                Calculator
            </S.Header>
            <TopSection />
        </S.Container>
    )
}

export default CalculatorBody