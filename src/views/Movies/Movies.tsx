import { FunctionComponent, useMemo } from "react"
import { Card } from "../../components/Card"
import { useAppContext } from "../../contexts/AppProvider"
import { StyledContainer } from "./Movies.styles"

export const Movies: FunctionComponent = () => {
    const { movies: { data } } = useAppContext()

    const renderMovies = useMemo(() => {
        return data.map((movie, key) => {
            return <Card subtitle={`Year: ${movie.year}`} title={movie.title} cover={`${movie.coverImage}/${key}`} key={movie.id}></Card>
        })
    }, [data])

    return (
        <StyledContainer>
            {
               renderMovies
            }
        </StyledContainer>
    )
}