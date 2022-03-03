import * as AppProvider from "@root/contexts/AppProvider"
import { cleanup, render, screen, act, fireEvent } from "@testing-library/react"
import { Layout } from ".."

describe('Layout View', () => {
    beforeEach(() => {
        cleanup()
    })

    it("should render Layout", () => {
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

        render(<Layout />)
        expect(screen).toMatchSnapshot()
    })

    it("should type on search and click enter on input", async () => {
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

        render(<Layout />)

        const input = await screen.findByLabelText("search")

        act(() => {
            fireEvent.change(input, {target: {value: 'my movie'}})
            fireEvent.keyDown(input, { key: "Enter", code: 13 } )
            fireEvent.keyDown(input, { key: "UP", code: 14 } ) // Branch coverage
        })
        expect(screen).toMatchSnapshot()
    })

    
 })