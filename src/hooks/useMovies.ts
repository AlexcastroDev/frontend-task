import { api } from '../services/api';
import { IUseMovies, IMoviesParams } from './../interfaces/useMovies.interface';

const useMovies = (): IUseMovies => {
    return {
        getMovies: async (params: IMoviesParams) => {
            const request = await api.get("/movies", { params })
            return await request.data.movies
        }
    }
}

export default useMovies