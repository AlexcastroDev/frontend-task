import { FunctionComponent, useMemo } from "react"
import { Card } from "../../components/Card"
import { useAppContext } from "@root/contexts/AppProvider"
import { StyledContainer } from "./Movies.styles"
import Skeleton from '@mui/material/Skeleton';
import Alert from '@mui/material/Alert';
import { IMovie } from "@root/interfaces/Movies.interface";

export const Movies: FunctionComponent = () => {
    const { movies: { data, isLoading } } = useAppContext()

    const renderMovies = useMemo(() => {
        if(isLoading) {
            return new Array(6).fill(0).map((c, key) => (
                <div data-testid="lazy-loader" key={key}><Skeleton variant="rectangular"  width={300} height={430} /></div>
            ))
        }

        return data.map((movie: IMovie, key: number) => <Card testID="card-movie" subtitle={`Year: ${movie.year}`} title={movie.title} cover={`${movie.coverImage}/${key}`} key={movie.id}></Card>)
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