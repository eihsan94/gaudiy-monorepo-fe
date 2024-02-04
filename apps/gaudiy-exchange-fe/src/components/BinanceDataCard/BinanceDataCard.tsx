import { TradingPair } from "../../enums";
import { useBinancePairCurrentPrice, useYesterdayClose } from "../../hooks";
import { PercentageUtils } from "@repo/libs/utils";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { Link, LinkProps } from "react-router-dom";

interface BinanceDataCardProps extends LinkProps {
  title: string;
  pair: TradingPair;
  className?: string;
  titleClassName?: string;
  priceClassName?: string;
  percentageChangeClassName?: string;
}

export function BinanceDataCard({
  title,
  pair,
  className,
  titleClassName,
  priceClassName,
  percentageChangeClassName,
  ...rest
}: BinanceDataCardProps) {
  const { yesterdayClose, isLoading: isLoadingYesterdayClose } =
    useYesterdayClose(pair);
  const {
    currPrice,
    formattedPrice,
    isLoading: isLoadingCurrPrice,
  } = useBinancePairCurrentPrice(pair);
  const [isMinusChange, setIsMinusChange] = useState(false);
  const [percentage, setPercentage] = useState("");

  useEffect(() => {
    if (yesterdayClose !== null && !isLoadingCurrPrice) {
      const change = ((currPrice - yesterdayClose) / yesterdayClose) * 100;
      setIsMinusChange(change < 0);
      setPercentage(PercentageUtils.format(change));
    }
  }, [currPrice, yesterdayClose, isLoadingCurrPrice]);

  return (
    <Link
      className={classNames(
        "flex flex-col items-center justify-center text-secondary-foreground pt-4 pb-6 gap-4",
        className,
        {
          "bg-secondary": isMinusChange,
          "bg-primary": !isMinusChange,
        }
      )}
      {...rest}>
      <div className={classNames("text-8xl leading-none", titleClassName)}>
        {title}
      </div>
      {isLoadingCurrPrice || isLoadingYesterdayClose ? (
        <div className="flex items-center text-3xl">Loading...</div>
      ) : (
        <>
          <div className={classNames("text-4xl leading-none", priceClassName)}>
            {formattedPrice}
          </div>
          <div
            className={classNames(
              "text-3xl leading-none",
              percentageChangeClassName
            )}>
            {percentage}
          </div>
        </>
      )}
    </Link>
  );
}
