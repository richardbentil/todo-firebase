import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { TestQueryClientProvider } from "./test-utils";
import "@testing-library/jest-dom";
import LoginForm from "@/modules/LoginForm";

function renderComponent() {
  render(
    <TestQueryClientProvider>
      <LoginForm />
    </TestQueryClientProvider>
  );
  //screen.debug();

  const emailInput = screen.getByPlaceholderText(/example@gmail.com/i);
  const passwordInput = screen.getByPlaceholderText(/Enter your password/i);
  const button = screen.getByRole("button", { name: /Sign in/i });

  return { emailInput, passwordInput, button };
}

describe("should render login form", () => {
  it("should have an email and password input", () => {
    const {  emailInput, passwordInput } = renderComponent();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("should have a submit button", () => {
    const { button } = renderComponent();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/Sign in/i);
  });

  it("should disable the button and show 'Submitting...' during form submission", async () => {
    const { emailInput, passwordInput, button } = renderComponent();

    await userEvent.type(emailInput, "example@gmail.com");
    await userEvent.type(passwordInput, "password");

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
