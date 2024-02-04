import { renderHook, act } from "@testing-library/react-hooks";
import { useBinancePairCurrentPrice } from "./useBinancePairCurrentPrice"; // Adjust the import path as necessary
import { TradingPair } from "../../enums";
import { waitFor } from "@testing-library/react";

// Define a mock class that mimics both the instance methods and static properties of WebSocket
class MockWebSocket {
  // Instance methods
  onopen = jest.fn();
  onmessage = jest.fn();
  close = jest.fn();

  // Static properties
  static CONNECTING = 0;
  static OPEN = 1;
  static CLOSING = 2;
  static CLOSED = 3;
  static lastInstance: MockWebSocket | null = null;

  // Constructor mock
  constructor(url: string) {
    MockWebSocket.lastInstance = this;
    console.log(`WebSocket connection to '${url}'`);
  }
}

// Assign the mock class to global.WebSocket
global.WebSocket = MockWebSocket as unknown as typeof WebSocket;

describe("useBinancePairCurrentPrice", () => {
  it("updates price and loading state correctly", async () => {
    const { result } = renderHook(() =>
      useBinancePairCurrentPrice(TradingPair.BTCUSDT)
    );

    // Manually trigger an onmessage event on the last created WebSocket instance
    act(() => {
      const messageEvent = new MessageEvent("message", {
        data: JSON.stringify({ p: 50000 }),
      });
      if (MockWebSocket.lastInstance) {
        MockWebSocket.lastInstance.onmessage(messageEvent);
      }
    });

    await waitFor(() => expect(result.current.isLoading).toBe(false), {
      timeout: 5000,
    });

    expect(result.current.isLoading).toBe(false);
    expect(result.current.currPrice).toBe(50000);
    // Ensure your formatting logic matches the expected output
    expect(result.current.formattedPrice).toBe("$50,000.00");
  });
});
