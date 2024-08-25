import TodoDelete from "@/modules/TodoDelete";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("should render text and yes and no button", () => {
   
    screen.debug()

    it("should render a text, Do you want to delete", () => {
        render(<TodoDelete id="itemId" />)
        screen.debug()
        const text = screen.getByRole("button");
        expect(text).toBeInTheDocument()
    })
})