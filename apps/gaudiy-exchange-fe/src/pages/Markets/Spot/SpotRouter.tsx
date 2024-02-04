import { RouteObject } from "react-router-dom";
import Spot from "./Spot";

const SpotRouter: RouteObject[] = [
  {
    path: "spot",
    element: <Spot />,
  },
];

export default SpotRouter;
