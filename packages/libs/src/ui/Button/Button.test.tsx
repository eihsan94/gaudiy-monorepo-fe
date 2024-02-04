import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button component", () => {
  it("renders correctly with default props", () => {
    render(<Button>Test Button</Button>);
    const button = screen.getByRole("button", { name: "Test Button" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("inline-flex items-center justify-center");
    expect(button).toHaveClass("bg-primary text-primary-foreground");
  });

  it("applies variant and size classes correctly", () => {
    render(
      <Button variant="destructive" size="sm">
        Destructive Button
      </Button>
    );
    const button = screen.getByRole("button", { name: "Destructive Button" });
    expect(button).toHaveClass("bg-destructive text-destructive-foreground");
    expect(button).toHaveClass("h-8 rounded-md px-3 text-xs");
  });

  it("renders as a child component when asChild is true", () => {
    render(
      <Button asChild>
        <span>Child Button</span>
      </Button>
    );
    const button = screen.getByText("Child Button");
    expect(button.tagName).toBe("SPAN");
  });

  it("combines custom className with default classes", () => {
    render(<Button className="custom-class">Custom Class Button</Button>);
    const button = screen.getByRole("button", { name: "Custom Class Button" });
    expect(button).toHaveClass("custom-class");
    expect(button).toHaveClass("inline-flex items-center justify-center");
  });
});
