import {
  MarketSummaryCardProps,
  CategoryNav,
  MarketSummaryCard,
  RatioBar,
  BinanceDataCard,
} from "@/components";
import { TradingPair } from "@/enums";
import classNames from "classnames";

export default function Discover() {
  const marketSummaryCards: MarketSummaryCardProps[] = [
    {
      title: "Gaudiy 30 Index",
      value: 9422.13,
      change: -1.01,
      type: "NUMBER",
    },
    {
      title: "24h Volume",
      value: 2548350000,
      change: -1.01,
      type: "NUMBER",
    },
    {
      title: "USDT Lending Rate",
      value: 2.56,
      change: 16.67,
      type: "PERCENTAGE",
    },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 lg:gap-8">
      <div className="col-span-12 lg:col-span-6">
        {/* Market Sentiments */}
        <CategoryNav title="Market Sentiments" to="/market-sentiments" />
        <div className="flex">
          {marketSummaryCards.map((card, i) => (
            <div className="relative w-full" key={i}>
              <MarketSummaryCard {...card} />
              <div
                className={classNames(
                  "absolute right-0 top-1/2 transform -translate-y-1/2 h-10 w-px bg-gray-200",
                  i === marketSummaryCards.length - 1 ? "hidden" : ""
                )}
              />
            </div>
          ))}
        </div>
        <RatioBar
          primary={{ title: "BTC buy takers 3.17 BTC", volume: 30 }}
          secondary={{ title: "BTC sell takers 3.58 BTC", volume: 70 }}
          className="mt-5"
        />
      </div>
      <div className="col-span-12 lg:col-span-6">
        {/* Hot Sectors */}
        <CategoryNav
          title={"Hot Sectors"}
          to={"/hot-sector-discussions"}
          suffix={
            <div className="w-fit text-xs text-blue-300">Discussions</div>
          }
        />
        <div className="w-full flex justify-center items-center flex-col lg:flex-row gap-2 lg:gap-4">
          <BinanceDataCard
            className="w-full h-fit lg:h-[250px]"
            title="BTC"
            pair={TradingPair.BTCUSDT}
            to="/trade/btcusdt"
          />
          <BinanceDataCard
            title="ETH"
            pair={TradingPair.ETHUSDT}
            className="!gap-2 lg:!gap-3 w-full h-fit lg:h-[250px]"
            titleClassName="!text-6xl lg:!text-8xl"
            priceClassName="!text-3xl lg:!text-4xl"
            percentageChangeClassName="!text-3xl"
            to="/trade/ethusdt"
          />
        </div>
      </div>

      <div className="col-span-12 lg:col-span-6">
        {/* Hot List */}
        <CategoryNav title="Hot List" to="/hot-list" />
        <RatioBar
          primary={{ title: "Up 3", volume: 30 }}
          secondary={{ title: "Down 17", volume: 70 }}
        />
      </div>
    </div>
  );
}
