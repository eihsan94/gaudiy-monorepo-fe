import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { RoutedTabs } from "./RoutedTabs"; // Adjust the import path as necessary

// Extend jest with navigation mock
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(() => jest.fn()), // Mock useNavigate to return a jest mock function
}));

describe("RoutedTabs Component - Navigation Functionality", () => {
  beforeEach(() => {
    (useNavigate as jest.Mock).mockReturnValue(jest.fn());
  });

  const navItems = [
    { path: "tab1", element: <div>Tab 1 Content</div> },
    { path: "tab2", element: <div>Tab 2 Content</div> },
  ];

  it("navigates to a different tab when clicked", async () => {
    // Setup the component within the MemoryRouter
    render(
      <MemoryRouter initialEntries={["/base/tab1"]}>
        <RoutedTabs navItems={navItems} basePath="/base" />
      </MemoryRouter>
    );

    // Directly retrieve the mock function after component setup
    const navigateMock = useNavigate();

    // Simulate user interaction
    await userEvent.click(screen.getByText("tab2"));

    // Assert the mock function was called as expected
    expect(navigateMock).toHaveBeenCalledWith("/base/tab2");
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks to reset any mock counts and implementations
  });
});
