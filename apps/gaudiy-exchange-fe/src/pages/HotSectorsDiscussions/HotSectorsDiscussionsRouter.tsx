import { RouteObject } from "react-router-dom";
import Discussions from "./HotSectorsDiscussions";

const DiscussionsRouter: RouteObject[] = [
  {
    path: "/hot-sector-discussions",
    element: <Discussions />,
  },
];

export default DiscussionsRouter;
