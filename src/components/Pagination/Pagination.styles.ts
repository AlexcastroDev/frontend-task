import { IStyledPageNumber } from './Pagination.interface';
import styled from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

export const StyledPageNumber = styled.span<IStyledPageNumber>`
    display: flex;
    border-radius: 50%;
    border: 1px solid white;
    padding: .6rem .9rem;
    margin-left: .8rem;
    cursor: pointer;
    background: ${({active}) => active ? "white" : "transparent"};
    color: ${({active}) => active ? "black" : "white"};

`