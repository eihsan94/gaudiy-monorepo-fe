import { RouteObject } from "react-router-dom";
import HotList from "./HotList";

const HotListRouter: RouteObject[] = [
  {
    path: "/hot-list",
    element: <HotList />,
  },
];

export default HotListRouter;
