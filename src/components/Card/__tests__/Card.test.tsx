import { render, screen } from "@testing-library/react"
import { Card } from ".."

describe('Card', () => { 
    it("should render card", () => {
        render(<Card title="title" subtitle="card subtitle" cover="http://placeimg.com/640/480/business" />)
        expect(screen).toMatchSnapshot()
    })
 })
