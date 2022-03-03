import { IMovie } from "./Movies.interface";

export type IAppContext = {
    movies: {
        data: IMovie[]
        isLoading: boolean
    }
}