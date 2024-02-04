import { TradingPair, TradingPairLabel, TradingPairSymbol } from "@/enums";
import { useBinancePairCurrentPrice, useYesterdayClose } from "@/hooks";
import {
  Button,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/libs/ui";
import { CurrencyUtils, PercentageUtils } from "@repo/libs/utils";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { BiChevronLeft } from "react-icons/bi";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { RiRobotLine } from "react-icons/ri";
import { useNavigate, useParams } from "react-router-dom";
import TradingViewWidget, { IntervalTypes } from "react-tradingview-widget";

export default function Trade() {
  const { pair } = useParams<{ pair: keyof typeof TradingPairLabel }>();
  const navigate = useNavigate();
  const { currPrice, formattedPrice, isLoading } = useBinancePairCurrentPrice(
    pair as TradingPair
  );
  const { yesterdayClose, isLoading: isLoadingYesterdayClose } =
    useYesterdayClose(pair as TradingPair);
  const [intervalTypes, setIntervalTypes] = useState(IntervalTypes.D);
  const [isMinusChange, setIsMinusChange] = useState(false);
  const [percentage, setPercentage] = useState("");
  const [formattedPriceChange, setFormattedPriceChange] = useState("");

  useEffect(() => {
    if (yesterdayClose !== null && !isLoading) {
      const priceChange = currPrice - yesterdayClose;
      const change = (priceChange / yesterdayClose) * 100;
      setFormattedPriceChange(CurrencyUtils.format(priceChange));
      setIsMinusChange(change < 0);
      setPercentage(PercentageUtils.format(change));
    }
  }, [currPrice, isLoading, yesterdayClose]);

  const handleGoBack = () => {
    navigate(-1);
  };

  const label = pair ? TradingPairLabel[pair] : null;
  const handleTabChange = (newValue: string) => {
    setIntervalTypes(newValue);
  };

  return (
    <div className="p-4 lg:p-8">
      <div className="pb-4 flex gap-10 text-lg">
        <BiChevronLeft
          className="text-2xl cursor-pointer"
          onClick={handleGoBack}
        />
        {label}
      </div>
      <div className="">
        <div className="flex flex-col gap-4">
          {isLoading || isLoadingYesterdayClose ? (
            <div className="flex items-center text-3xl">Loading...</div>
          ) : (
            <div
              className={classNames("flex flex-col gap-2", {
                "text-secondary": isMinusChange,
                "text-primary": !isMinusChange,
              })}>
              <div className="flex gap-2 text-2xl leading-none items-center">
                {formattedPrice}
                <div className="text-lg">
                  {isMinusChange ? <BsArrowDown /> : <BsArrowUp />}
                </div>
              </div>
              <div className="text-sm flex gap-2">
                <div className="text-gray-500">= {formattedPriceChange}</div>
                <div>{percentage}</div>
              </div>
            </div>
          )}
          <div className="flex fixed bottom-4 lg:w-fit w-full left-0 gap-4 px-4 lg:p-0 lg:relative lg:mt-4 mt-0 justify-start  ">
            <div
              className="flex flex-col items-center justify-center h-fit shadow-md px-2 rounded-md"
              onClick={() => alert("Trading Bot Clicked")}>
              <RiRobotLine />
              <div className="text-xs cursor-pointer">Trading Bot</div>
            </div>
            <Button className="flex-1" onClick={() => alert("Buy Clicked")}>
              Buy
            </Button>
            <Button
              className="flex-1"
              onClick={() => alert("Sell Clicked")}
              variant={"secondary"}>
              Sell
            </Button>
          </div>
          <div className="h-[45vh]">
            <Tabs
              value={intervalTypes}
              className="w-full h-full"
              onValueChange={handleTabChange}>
              <TabsList className="w-fit border-none flex">
                <TabsTrigger value={IntervalTypes.D}>1d</TabsTrigger>
                <TabsTrigger value={IntervalTypes.W}>1w</TabsTrigger>
              </TabsList>
              <TabsContent value={IntervalTypes.D} className="h-full">
                <TradingViewWidget
                  hide_top_toolbar
                  interval={IntervalTypes.D}
                  symbol={
                    TradingPairSymbol[pair as keyof typeof TradingPairSymbol]
                  }
                  autosize
                  allow_symbol_change={false}
                  hide_legend
                  fullscreen
                />
              </TabsContent>
              <TabsContent value={IntervalTypes.W} className="h-full">
                <TradingViewWidget
                  hide_top_toolbar
                  interval={IntervalTypes.W}
                  symbol={
                    TradingPairSymbol[pair as keyof typeof TradingPairSymbol]
                  }
                  autosize
                  allow_symbol_change={false}
                  hide_legend
                  fullscreen
                />
              </TabsContent>
            </Tabs>
          </div>

          {/* <div className="flex fixed bottom-4 lg:w-fit w-full left-0 gap-4 px-4 lg:top-32 lg:mt-2 lg:left-20 mt-0">
            <div
              className="flex flex-col items-center justify-center h-fit"
              onClick={() => alert("Trading Bot Clicked")}>
              <RiRobotLine />
              <div className="text-xs cursor-pointer">Trading Bot</div>
            </div>
            <Button className="flex-1" onClick={() => alert("Buy Clicked")}>
              Buy
            </Button>
            <Button
              className="flex-1"
              onClick={() => alert("Sell Clicked")}
              variant={"secondary"}>
              Sell
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
