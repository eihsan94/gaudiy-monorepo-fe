import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MarketSummaryCard } from "./MarketSummaryCard"; // Adjust the import path as needed

describe("MarketSummaryCard", () => {
  it("renders the title and percentage value", () => {
    const title = "Test Percentage";
    const value = 50;
    const change = 5;

    render(
      <MarketSummaryCard
        title={title}
        value={value}
        change={change}
        type="PERCENTAGE"
      />
    );

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(`${value}%`)).toBeInTheDocument();
    expect(screen.getByText(`+${change.toFixed(2)}%`)).toHaveClass(
      "text-primary"
    );
  });

  it("renders the title and number value correctly formatted in millions", () => {
    const title = "Test Number";
    const value = 2000000; // 2 million

    render(<MarketSummaryCard title={title} value={value} type="NUMBER" />);

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText("2.00M")).toBeInTheDocument(); // Check if value is formatted
  });

  it("applies correct class based on positive or negative change", () => {
    const title = "Change Test";
    const value = 100;
    const positiveChange = 10;
    const negativeChange = -10;

    const { rerender } = render(
      <MarketSummaryCard
        title={title}
        value={value}
        change={positiveChange}
        type="PERCENTAGE"
      />
    );
    expect(screen.getByText(`+${positiveChange.toFixed(2)}%`)).toHaveClass(
      "text-primary"
    );

    rerender(
      <MarketSummaryCard
        title={title}
        value={value}
        change={negativeChange}
        type="PERCENTAGE"
      />
    );
    expect(screen.getByText(`${negativeChange.toFixed(2)}%`)).toHaveClass(
      "text-secondary"
    );
  });
});
