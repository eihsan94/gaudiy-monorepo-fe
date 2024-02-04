import { RouteObject } from "react-router-dom";
import Trade from "./Trade";

const TradeRouter: RouteObject[] = [
  {
    path: "/trade/:pair",
    element: <Trade />,
  },
];

export default TradeRouter;
