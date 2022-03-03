import { FunctionComponent, useState } from "react"
import { IPagination } from "./Pagination.interface"
import { StyledContainer, StyledPageNumber } from "./Pagination.styles"

export const Pagination: FunctionComponent<IPagination> = ({ size, onChange }) => {
    const [current, setCurrent] = useState(0)

    const handleOnClick = (key: number) => {
        setCurrent(key)
        onChange && onChange()
    }

    return (
        <StyledContainer>
            { new Array(size).fill(0).map((pag,key) => (
                <StyledPageNumber onClick={() => handleOnClick(key)} active={current === key} key={key}> { key + 1 } </StyledPageNumber>
            ))}
        </StyledContainer>
    )
}