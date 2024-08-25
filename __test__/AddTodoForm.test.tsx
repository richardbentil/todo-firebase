import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTodoForm from "@/modules/AddTodoForm";
import { TestQueryClientProvider } from "./test-utils";
import "@testing-library/jest-dom";

function renderComponent() {
  render(
    <TestQueryClientProvider>
      <AddTodoForm />
    </TestQueryClientProvider>
  );
  //screen.debug();

  const taskInput = screen.getByPlaceholderText(/Enter todo/i);
  const prioritySelect = screen.getByPlaceholderText(/Select priority/i);
  const button = screen.getByRole("button", { name: /Add Todo/i });

  return { taskInput, prioritySelect, button };
}

describe("should render todo form", () => {
  it("should have a task and priority input", () => {
    const { taskInput, prioritySelect } = renderComponent();
    expect(taskInput).toBeInTheDocument();
    expect(prioritySelect).toBeInTheDocument();
  });

  it("should have a submit button", () => {
    const { button } = renderComponent();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Add Todo/i);
  });

  it("should disable the button and show 'Submitting...' during form submission", async () => {
    const { taskInput, prioritySelect, button } = renderComponent();

    await userEvent.type(taskInput, "My task");
    await userEvent.selectOptions(prioritySelect, "High");

    // Check that the button is not disabled initially
    expect(button).not.toBeDisabled();

    // Simulate a click on the button
    userEvent.click(button);

    // Check that the button is disabled after the click
    await waitFor(() => {
      expect(button).toBeDisabled();
      expect(button).toHaveTextContent("Submitting...");
    });
  });
});
