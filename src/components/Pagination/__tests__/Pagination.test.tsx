import { render, screen, act, fireEvent } from "@testing-library/react"
import { Pagination } from ".."

describe('pagination', () => { 
    it("should render pagination", () => {
        render(<Pagination size={5} onChange={jest.fn} />)
        expect(screen).toMatchSnapshot()
    })
    it("should click on pagination button", async () => {
        render(<Pagination size={5} onChange={jest.fn} />)
        const button = await screen.findByText("2")

        act(() => {
            fireEvent.click(button)
        })
    })
 })
