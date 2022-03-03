import { FunctionComponent } from "react"
import { ICard } from "./Card.interface"
import { StyledCard, Subtitle, Title } from "./Card.styles"


export const Card: FunctionComponent<ICard> = ({ cover, subtitle, title, testID = "card" }) => {
    return (
        <StyledCard data-testid={testID} cover={cover} >
            <Title>{ title }</Title>
            <Subtitle>{ subtitle }</Subtitle>
        </StyledCard>
    )
}