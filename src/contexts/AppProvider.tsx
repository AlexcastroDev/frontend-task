import React, { FunctionComponent } from 'react'
import { useQuery } from 'react-query'
import { createContext, useContextSelector } from 'use-context-selector'
import useMovies from '../hooks/useMovies'
import { IAppContext } from '../interfaces/AppProvider.interface'

export const AppContext = createContext<IAppContext>({} as IAppContext)

export const AppProvider: FunctionComponent = ({ children }) => {
   const movies = useMovies()
    const { isLoading: moviesIsLoading, data: moviesData } = useQuery('movies', () => {
      return movies.getMovies({ perPage: 8 })
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
          isLoading: moviesIsLoading, 
        }
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = (): IAppContext => {
  const movies = useContextSelector(AppContext, (state) => state.movies)

  return { movies }
}
