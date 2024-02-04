import { RouteObject } from "react-router-dom";
import Futures from "./Futures";

const FuturesRouter: RouteObject[] = [
  {
    path: "futures",
    element: <Futures />,
  },
];

export default FuturesRouter;
