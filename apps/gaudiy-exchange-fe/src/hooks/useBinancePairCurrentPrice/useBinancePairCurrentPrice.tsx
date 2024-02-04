import { useState, useEffect, useRef } from "react";
import { TradingPair } from "../../enums";
import { CurrencyUtils } from "@repo/libs/utils";

export const useBinancePairCurrentPrice = (pair: TradingPair) => {
  const [currPrice, setCurrPrice] = useState(0);
  const [formattedPrice, setFormattedPrice] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const binanceSocket = useRef<WebSocket | null>(null);
  useEffect(() => {
    setIsLoading(true);
    const ws = new WebSocket(
      `wss://stream.binance.com:9443/ws/${pair.toLowerCase()}@trade`
    );
    binanceSocket.current = ws;

    ws.onopen = () => setIsLoading(true);
    ws.onmessage = (event) => {
      const { p: newPrice } = JSON.parse(event.data);
      setCurrPrice(newPrice);
      setFormattedPrice(CurrencyUtils.format(newPrice));
      setIsLoading(false);
    };

    return () => {
      setTimeout(() => {
        ws.close();
      }, 1000);
    };
  }, [pair]);

  return { currPrice, isLoading, formattedPrice };
};
