import { RouteObject } from "react-router-dom";
import Prices from "./Prices";

const PricesRouter: RouteObject[] = [
  {
    path: "/prices/:pair",
    element: <Prices />,
  },
];

export default PricesRouter;
