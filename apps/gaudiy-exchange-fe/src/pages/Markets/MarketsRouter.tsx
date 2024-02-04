import { Navigate, RouteObject } from "react-router-dom";
import Markets from "./ Markets";
import SpotRouter from "./Spot/SpotRouter";
import DiscoverRouter from "./Discover/DiscoverRouter";
import FuturesRouter from "./Futures/FuturesRouter";

export const MarketsRouterBasePath = "/markets";

const MarketsRouter: RouteObject[] = [
  {
    path: `${MarketsRouterBasePath}/:tab`,
    element: <Markets />,
    children: [...SpotRouter, ...FuturesRouter, ...DiscoverRouter],
  },
  // Redirect to discover if no tab is provided as that is the only page provided in design
  {
    path: MarketsRouterBasePath,
    element: <Navigate to="/markets/discover" replace />,
  },
];

export default MarketsRouter;
