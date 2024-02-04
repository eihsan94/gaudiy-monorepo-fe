import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { RatioBar } from "./RatioBar"; // Adjust the import path as necessary

describe("RatioBar Component", () => {
  const primary = { title: "Primary", volume: 60 };
  const secondary = { title: "Secondary", volume: 40 };

  it("renders the component with given titles", () => {
    render(<RatioBar primary={primary} secondary={secondary} />);

    expect(screen.getByText(primary.title)).toBeInTheDocument();
    expect(screen.getByText(secondary.title)).toBeInTheDocument();
  });

  it("applies the correct volume percentages to the bars", () => {
    const { container } = render(
      <RatioBar primary={primary} secondary={secondary} />
    );
    const primaryBar = container.querySelector(".bg-primary");
    const secondaryBar = container.querySelector(".bg-secondary");

    expect(primaryBar).toHaveStyle(`width: ${primary.volume}%`);
    expect(secondaryBar).toHaveStyle(`width: ${secondary.volume}%`);
  });

  it("contains a dividing white bar", () => {
    const { container } = render(
      <RatioBar primary={primary} secondary={secondary} />
    );
    const dividingBar = container.querySelector(".bg-white");

    expect(dividingBar).toBeInTheDocument();
    expect(dividingBar).toHaveClass("-skew-x-12");
  });
});
