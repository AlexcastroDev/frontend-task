import { FunctionComponent, useMemo } from "react"
import { Card } from "../../components/Card"
import { useAppContext } from "../../contexts/AppProvider"
import { StyledContainer } from "./Movies.styles"
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';

export const Movies: FunctionComponent = () => {
    const { movies: { data, isLoading } } = useAppContext()

    const renderMovies = useMemo(() => {
        if(isLoading) {
            return new Array(6).fill(0).map((c, key) => (
                <Skeleton variant="rectangular" key={key} width={300} height={430} />
            ))
        }

        return data.map((movie, key) => <Card subtitle={`Year: ${movie.year}`} title={movie.title} cover={`${movie.coverImage}/${key}`} key={movie.id}></Card>)
    }, [data, isLoading])

    return (
        <StyledContainer>
            { !data.length && !isLoading && <Alert severity="info">No results, try changing search term!</Alert> }
            

            {
               renderMovies
            }
        </StyledContainer>
    )
}