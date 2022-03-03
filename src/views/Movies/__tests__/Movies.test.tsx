import * as AppProvider from "@root/contexts/AppProvider"
import { cleanup, render, screen } from "@testing-library/react"
import { Movies } from ".."
import MovieMock from "@root/tests/mocks/movies.json"

describe('Movies View', () => {
    beforeEach(() => {
        cleanup()
    })

    it("should render Alert", () => {
        const useAppContext = jest.spyOn(AppProvider, "useAppContext");
        useAppContext.mockImplementation(() => ({
            movies: {
                data: [],
                isLoading: false,
                fetchMovies: jest.fn,
                pagination: {
                    perPage: 8,
                    size: 5
                }
            },
            searchBox: {
                search: "",
                setSearch: jest.fn
            }
        }))

        render(<Movies />)
        expect(screen).toMatchSnapshot()
    })

    it("should render items", async () => {
        const useAppContext = jest.spyOn(AppProvider, "useAppContext");
        useAppContext.mockImplementation(() => ({
            movies: {
                data: [ MovieMock ],
                isLoading: false,
                fetchMovies: jest.fn,
                pagination: {
                    perPage: 8,
                    size: 5
                }
            },
            searchBox: {
                search: "",
                setSearch: jest.fn
            }
        }))

        render(<Movies />)
        const movies = await screen.findAllByTestId("card-movie")
        expect(movies).toHaveLength(1)
    })

    it("should render alert", async () => {
        const useAppContext = jest.spyOn(AppProvider, "useAppContext");
        useAppContext.mockImplementation(() => ({
            movies: {
                data: [ MovieMock ],
                isLoading: true,
                fetchMovies: jest.fn,
                pagination: {
                    perPage: 8,
                    size: 5
                }
            },
            searchBox: {
                search: "",
                setSearch: jest.fn
            }
        }))

        render(<Movies />)
        const movies = await screen.findAllByTestId("lazy-loader")
        expect(movies).toHaveLength(6)
    })
 })