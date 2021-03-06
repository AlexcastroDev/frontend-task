import { IUseMovies, IMoviesParams } from './../../interfaces/useMovies.interface';
import { api } from '../api';

const useMovies = (): IUseMovies => {
    return {
        getMovies: async (params: IMoviesParams) => {
            const request = await api.get("/movies", { params })
            return await request.data
        }
    }
}

export default useMovies