import { ICard } from './Card.interface';
import styled from "styled-components";

type ISection = Pick<ICard, "cover">

export const StyledCard = styled.section<ISection>`
    background: white;
    background: url(${({ cover }) => cover}) center;
    width: 20%;
    height: 40.3rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`

export const Title = styled.h1`
    background: white;
    font-size: 1.8rem;
    padding: 0.2rem 1.2rem;
    margin: 0;
`


export const Subtitle = styled.h3`
    background: white;
    font-size: 1.2rem;
    padding: 0.2rem 1.2rem;
`