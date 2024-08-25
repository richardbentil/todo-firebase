import TodoDelete from "@/modules/TodoDelete";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("should render text and yes and no button", () => {
   
    screen.debug()

    it("should render a text, Do you want to delete", () => {
        render(<TodoDelete />)
        screen.debug()
        const text = screen.getByText(/Do you want to delete/i);
        expect(text).toBeInTheDocument()
    })

    it("should render a yes and no button", () => { 
        render(<TodoDelete />)    
        const noButton = screen.getByRole("button", {name: /No/i});
        expect(noButton).toBeInTheDocument()

        const yesButton = screen.getByRole("button", {name: /Yes/i});
        expect(yesButton).toBeInTheDocument()
      
    })
})