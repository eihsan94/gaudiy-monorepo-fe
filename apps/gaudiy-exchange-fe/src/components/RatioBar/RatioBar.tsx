import classNames from "classnames";

type RatioBarProps = {
  primary: {
    title: string;
    volume: number;
  };
  secondary: {
    title: string;
    volume: number;
  };
  className?: string;
};

export function RatioBar({ primary, secondary, className }: RatioBarProps) {
  return (
    <div className={classNames("flex flex-col", className)}>
      <div className="flex justify-between text-xs mb-1">
        <span className="text-primary">{primary.title}</span>
        <span className="text-secondary">{secondary.title}</span>
      </div>
      <div className="w-full rounded overflow-hidden">
        <div className="flex h-2">
          <div
            style={{ width: `${primary.volume}%` }}
            className="bg-primary transition-width duration-300 ease-in-out"
          />
          <div className="bg-white -mx-[1px] w-1 h-2 -skew-x-12" />
          <div
            style={{ width: `${secondary.volume}%` }}
            className="bg-secondary transition-width duration-300 ease-in-out"
          />
        </div>
      </div>
    </div>
  );
}
