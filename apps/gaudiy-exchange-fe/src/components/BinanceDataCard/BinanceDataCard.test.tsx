// BinanceDataCard.test.tsx
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom"; // Import MemoryRouter for Link component
import { BinanceDataCard } from "./BinanceDataCard";
import { TradingPair } from "../../enums";

// Mocking the custom hooks before importing them
jest.mock("../../hooks", () => ({
  __esModule: true, // This property makes sure we can use named export in the mock
  useBinancePairCurrentPrice: jest.fn(() => ({
    currPrice: 50000,
    formattedPrice: "$50,000",
    isLoading: false,
  })),
  useYesterdayClose: jest.fn(() => ({
    yesterdayClose: 49000,
    isLoading: false,
  })),
}));

describe("BinanceDataCard Tests", () => {
  it("renders BinanceDataCard with mock data", async () => {
    render(
      <MemoryRouter>
        <BinanceDataCard
          title="BTC/USDT"
          pair={TradingPair.BTCUSDT}
          to="/trade/btcusdt"
        />
      </MemoryRouter>
    );

    // Assert that the mock data is displayed
    expect(await screen.findByText("$50,000")).toBeInTheDocument();

    // Correct the expected text to include the "+" sign
    const expectedPercentageChange = "+2.04%";
    expect(
      await screen.findByText(expectedPercentageChange)
    ).toBeInTheDocument();
  });
});
