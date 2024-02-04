import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { GoBackButton } from "./GoBackButton"; // Adjust the import path as necessary
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // Preserve other exports from react-router-dom
  useNavigate: jest.fn(), // Mock useNavigate
}));

describe("GoBackButton", () => {
  it("navigates back when clicked", async () => {
    const navigateMock = jest.fn(); // Create a fresh mock function for this test
    (useNavigate as jest.Mock).mockReturnValue(navigateMock); // Configure useNavigate to return the mock

    render(
      <BrowserRouter>
        <GoBackButton />
      </BrowserRouter>
    );

    // Find the button by role and click it
    const button = screen.getByRole("button", { name: /go back/i });
    await userEvent.click(button);

    // Assert that navigate was called with -1
    expect(navigateMock).toHaveBeenCalledWith(-1);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks to reset any mock counts and implementations
  });
});
