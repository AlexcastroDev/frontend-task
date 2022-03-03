import React, { FunctionComponent, useState } from 'react'
import { useQuery } from 'react-query'
import { createContext, useContextSelector } from 'use-context-selector'
import useMovies from '../hooks/useMovies'
import { IAppContext } from '../interfaces/AppProvider.interface'
import { IgetMoviesResponse, IPagination } from '../interfaces/useMovies.interface'

export const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppProvider: FunctionComponent = ({ children }) => {
  const [searchController, setSearchController] = useState("")
  const [pagination, setPagination] = useState({} as IPagination)
   const movies = useMovies()

    const { isRefetching: moviesIsRefetching, isLoading: moviesIsLoading, data: moviesData, refetch: fetchMovies } = useQuery('movies', async () => {
      const response: IgetMoviesResponse = await movies.getMovies({ perPage: 8, search: searchController })
      setPagination(response.pagination)
      return response.movies
    },
    {
      refetchOnWindowFocus: false
    }
  )

  return (
    <AppContext.Provider
      value={{
        movies: {
          data: moviesData || [],
          isLoading: moviesIsLoading || moviesIsRefetching,
          fetchMovies,
          pagination
        },
        searchBox: {
          search: searchController,
          setSearch: setSearchController
        }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): IAppContext => {
  const movies = useContextSelector(AppContext, (state) => state.movies)
  const searchBox = useContextSelector(AppContext, (state) => state.searchBox)

  return { movies, searchBox }
}
