import { IMovie } from "./Movies.interface";

export type IMoviesParams = {
    perPage: number
    search: string
}

export type IUseMovies = {
    getMovies: (params: IMoviesParams) => Promise<IgetMoviesResponse>;
}

export interface IPagination {
    perPage: number
    size: number
}

export type IgetMoviesResponse = {
    movies: IMovie[];
    pagination: IPagination;
}
