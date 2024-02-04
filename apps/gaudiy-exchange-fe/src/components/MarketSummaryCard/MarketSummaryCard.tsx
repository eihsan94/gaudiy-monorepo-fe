import { PercentageUtils } from "@repo/libs/utils";
import classNames from "classnames";

export type MarketSummaryCardProps = {
  title: string;
  value: number;
  change?: number;
  type: "PERCENTAGE" | "NUMBER";
};

export function MarketSummaryCard({
  title,
  value,
  change,
  type,
}: MarketSummaryCardProps) {
  // Format the change percentage, if present
  const formattedChange =
    change !== undefined ? PercentageUtils.format(change) : "";

  const formatNumberInMillions = (v: number) => {
    return v > 1000000 ? `${(v / 1000000).toFixed(2)}M` : v;
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xs text-gray-500">{title}</p>
      <p className="text-sm font-light">
        {type === "PERCENTAGE" ? `${value}%` : formatNumberInMillions(value)}
      </p>
      {change !== undefined && (
        <p
          className={classNames("text-xs", {
            "text-primary": change >= 0,
            "text-secondary": change < 0,
          })}>
          {formattedChange}
        </p>
      )}
    </div>
  );
}
