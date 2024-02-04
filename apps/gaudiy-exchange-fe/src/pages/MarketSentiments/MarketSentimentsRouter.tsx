import { RouteObject } from "react-router-dom";
import MarketSentiments from "./MarketSentiments";

const MarketSentimentsRouter: RouteObject[] = [
  {
    path: "/market-sentiments",
    element: <MarketSentiments />,
  },
];

export default MarketSentimentsRouter;
