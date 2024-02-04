import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom"; // Necessary for using RouterLink
import { FaBeer } from "react-icons/fa"; // Example icon for suffix prop
import { CategoryNav } from "./CategoryNav"; // Adjust the import path as necessary

describe("CategoryNav Component", () => {
  const title = "Test Category";
  const to = "/test-category";
  const className = "custom-class";
  const suffix = <FaBeer id="FaBeer" />; // Example suffix element

  it("renders the component with required props", () => {
    render(
      <MemoryRouter>
        <CategoryNav title={title} to={to} />
      </MemoryRouter>
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", to);
    expect(screen.getByRole("link")).toContainElement(screen.getByText(title));
    const svgElement = document.querySelector('svg[id="FaChevronRight"]');
    expect(svgElement).toBeInTheDocument();
  });

  it("applies custom className and includes suffix when provided", () => {
    render(
      <MemoryRouter>
        <CategoryNav
          title={title}
          to={to}
          className={className}
          suffix={suffix}
        />
      </MemoryRouter>
    );

    // Check for custom className application
    expect(screen.getByRole("link").parentNode).toHaveClass(className);

    // Check for suffix presence
    const svgElement = document.querySelector(
      'svg[id="FaBeer"]'
    ) as SVGElement | null;
    expect(screen.getByRole("link")).toContainElement(svgElement);
  });
});
