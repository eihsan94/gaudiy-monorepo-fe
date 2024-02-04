// useYesterdayClose.test.js
import { renderHook } from "@testing-library/react-hooks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useYesterdayClose } from "./useYesterdayClose"; // Adjust the import path as needed
import { TradingPair } from "../../enums";

// Setup a query client provider wrapper for the hooks
const createWrapper = () => {
  const queryClient = new QueryClient();
  return ({ children }: { children?: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe("useYesterdayClose", () => {
  beforeEach(() => {
    // Reset fetch mock before each test
    jest.restoreAllMocks();
  });

  it("should call the API with the correct URL and process the response", async () => {
    const pair = TradingPair.BTCUSDT;
    const mockResponse = { prevClosePrice: "50000" };

    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    const wrapper = createWrapper();
    const { result, waitFor } = renderHook(() => useYesterdayClose(pair), {
      wrapper,
    });

    await waitFor(() => result.current.isLoading === false);

    // Verifies the hook processed the response correctly
    expect(result.current.yesterdayClose).toEqual(mockResponse.prevClosePrice);
    const expectedUrl = `https://api.binance.com/api/v3/ticker/24hr?symbol=${pair.toUpperCase()}`;
    expect(global.fetch).toHaveBeenCalledWith(expectedUrl);
  });
});
