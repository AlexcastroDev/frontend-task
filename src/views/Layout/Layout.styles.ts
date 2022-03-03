import styled from "styled-components";

export const StyledContainer = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary };
    padding: 3.2rem 1.6rem;
`

export const StyledSearchContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
