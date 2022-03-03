import { IMovie } from "./Movies.interface";

export type IMoviesParams = {
    perPage: number
}

export type IUseMovies = {
    getMovies: (params: IMoviesParams) => Promise<IMovie[]>;
}
