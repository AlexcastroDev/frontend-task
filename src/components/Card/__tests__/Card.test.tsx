import { render, screen } from "@testing-library/react"
import { Card } from ".."

describe('Card', () => { 
    it("should render card", () => {
        render(<Card title="title" subtitle="card subtitle" cover="http://placeimg.com/640/480/business" />)
        expect(screen).toMatchSnapshot()
    })
    it("should shows title and subtitle", async () => {
        render(<Card title="title" subtitle="card subtitle" cover="http://placeimg.com/640/480/business" />)
        const title = await screen.findAllByText("title")
        const subtitle = await screen.findAllByText("card subtitle")
        expect(title).toHaveLength(1)
        expect(subtitle).toHaveLength(1)
    })
 })
