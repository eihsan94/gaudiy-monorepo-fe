import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom"; // Use MemoryRouter for testing
import { NavBar } from "./NavBar"; // Adjust the import path as necessary

describe("NavBar Component", () => {
  // Test rendering of all nav items and their active state
  const navItems = [
    { href: "/home", label: "Home" },
    { href: "/markets", label: "Markets" },
    { href: "/trade", label: "Trade" },
    { href: "/promotions", label: "Promotions" },
    { href: "/futures", label: "Futures" },
    { href: "/assets", label: "Assets" },
  ];

  navItems.forEach(({ href, label }) => {
    it(`renders the ${label} nav item and checks active state`, () => {
      render(
        <MemoryRouter initialEntries={[href]}>
          <NavBar />
        </MemoryRouter>
      );

      const navLink = screen.getByRole("link", { name: label });
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveClass("text-black"); // Assuming this class indicates an active link
      expect(navLink).toContainHTML("span"); // Check if the label is rendered within a span
    });
  });

  // Example to test one of the items being inactive
  it("renders the Home nav item as inactive when on a different route", () => {
    render(
      <MemoryRouter initialEntries={["/not-home"]}>
        <NavBar />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole("link", { name: "Home" });
    expect(homeLink).toHaveClass("text-muted-foreground"); // Assuming this class indicates an inactive link
  });
});
