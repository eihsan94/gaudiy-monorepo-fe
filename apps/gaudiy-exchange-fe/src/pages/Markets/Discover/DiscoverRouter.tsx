import { RouteObject } from "react-router-dom";
import Discover from "./Discover";

const DiscoverRouter: RouteObject[] = [
  {
    path: "discover",
    element: <Discover />,
  },
];

export default DiscoverRouter;
