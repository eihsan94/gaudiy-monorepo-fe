import { RouteObject } from "react-router-dom";
import NotFound from "./NotFound";

const NotFoundRouter: RouteObject[] = [
  {
    path: "*",
    element: <NotFound />,
  },
];

export default NotFoundRouter;
