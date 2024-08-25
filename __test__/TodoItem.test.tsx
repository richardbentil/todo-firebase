import TodoItem from "@/modules/TodoItem";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

function renderTodoItem() {
    const item: any = {task: "My task", priority: "high"}
    render(<TodoItem item={item} />)

    return item
}

describe("should render todo item", () => {
  
   
    it("should render todo item", () => {
        const {item} = renderTodoItem()
        const heading = screen.getByRole("heading", {name: item?.task})
        const priority = screen.getByTestId("priority")

        expect(heading).toBeInTheDocument()
        expect(priority).toBeInTheDocument()
    })
})