import { Navigate, createBrowserRouter } from "react-router-dom";
import MarketsRouter from "./pages/Markets/MarketsRouter";
import PricesRouter from "./pages/Prices/PricesRouter";
import NotFoundRouter from "./pages/NotFound/NotFoundRouter";
import MarketSentimentsRouter from "./pages/MarketSentiments/MarketSentimentsRouter";
import HotSectorsDiscussions from "./pages/HotSectorsDiscussions/HotSectorsDiscussionsRouter";
import HotListRouter from "./pages/HotList/HotListRouter";
import TradeRouter from "./pages/Trade/TradeRouter";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/markets" replace /> },
  ...MarketsRouter,
  ...PricesRouter,
  ...MarketSentimentsRouter,
  ...HotSectorsDiscussions,
  ...HotListRouter,
  ...TradeRouter,
  ...NotFoundRouter,
]);
