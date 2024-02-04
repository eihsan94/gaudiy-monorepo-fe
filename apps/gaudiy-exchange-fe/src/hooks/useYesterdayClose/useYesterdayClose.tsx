import { TradingPair } from "@/enums";
import { useQuery } from "@tanstack/react-query";

export const useYesterdayClose = (pair: TradingPair) => {
  const { isLoading, data } = useQuery<{ prevClosePrice: number }>({
    queryKey: ["yesterdayClose", pair],
    queryFn: () =>
      fetch(
        `https://api.binance.com/api/v3/ticker/24hr?symbol=${pair.toUpperCase()}`
      ).then((res) => res.json()),
  });

  return { yesterdayClose: data?.prevClosePrice || 0, isLoading };
};
