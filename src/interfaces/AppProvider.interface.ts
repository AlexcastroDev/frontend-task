import { IMovie } from "./Movies.interface";
import { IPagination } from "./useMovies.interface";

export type IAppContext = {
    movies: {
        data: IMovie[]
        isLoading: boolean
        fetchMovies: () => void
        pagination: IPagination
    },
    searchBox: {
        search: string
        setSearch: React.Dispatch<React.SetStateAction<string>>
    }
}