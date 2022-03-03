import { FunctionComponent } from "react"
import { Textfield } from "../../components/Textfield"
import { StyledContainer, StyledSearchContainer } from "./Layout.styles"

export const Layout: FunctionComponent = ({ children }) => {
    return (
        <StyledContainer>
            <StyledSearchContainer>
                <Textfield></Textfield>
            </StyledSearchContainer>
            { children }
        </StyledContainer>
    )
}