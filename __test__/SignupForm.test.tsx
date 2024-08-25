import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestQueryClientProvider } from "./test-utils";
import "@testing-library/jest-dom";
import SignupForm from "@/modules/SignupForm";

function renderComponent() {
  render(
    <TestQueryClientProvider>
      <SignupForm />
    </TestQueryClientProvider>
  );
  //screen.debug();

  const nameInput = screen.getByPlaceholderText(/John Doe/i);
  const emailInput = screen.getByPlaceholderText(/example@gmail.com/i);
  const passwordInput = screen.getByPlaceholderText(/At least 8 characters/i);
  const confirmPasswordInput = screen.getByLabelText(/Confirm password/i);
  const button = screen.getByRole("button", { name: /Sign up/i });

  return { nameInput, emailInput, passwordInput, confirmPasswordInput, button };
}

describe("should render signup form", () => {
  it("should have an name, email and password input", () => {
    const { nameInput, emailInput, passwordInput, confirmPasswordInput } = renderComponent();
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(confirmPasswordInput).toBeInTheDocument();
  });

  it("should have a submit button", () => {
    const { button } = renderComponent();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Sign up/i);
  });

  it("should disable the button and show 'Submitting...' during form submission", async () => {
    const { nameInput, emailInput, passwordInput, confirmPasswordInput, button } = renderComponent();

    await userEvent.type(nameInput, "John Doe");
    await userEvent.type(emailInput, "example@gmail.com");
    await userEvent.type(passwordInput, "password");
    await userEvent.type(confirmPasswordInput, "password");

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
