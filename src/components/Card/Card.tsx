import { FunctionComponent } from "react"
import { ICard } from "./Card.interface"
import { StyledCard, Subtitle, Title } from "./Card.styles"


export const Card: FunctionComponent<ICard> = ({ cover, subtitle, title }) => {
    return (
        <StyledCard cover={cover} >
            <Title>{ title }</Title>
            <Subtitle>{ subtitle }</Subtitle>
        </StyledCard>
    )
}