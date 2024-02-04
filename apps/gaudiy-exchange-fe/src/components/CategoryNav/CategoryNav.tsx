import classNames from "classnames";
import { FaChevronRight } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

type CategoryNavProps = {
  title: string;
  to: string;
  suffix?: JSX.Element;
  className?: string;
};

export function CategoryNav({
  title,
  to,
  className,
  suffix,
}: CategoryNavProps) {
  return (
    <div className={classNames("py-4", className)}>
      <RouterLink to={to} className="flex items-center justify-between">
        <div className="capitalize text-sm font-normal lg:text-lg">{title}</div>
        <div className="flex gap-2 items-center">
          {suffix}
          <FaChevronRight className="text-sm" id="FaChevronRight" />
        </div>
      </RouterLink>
    </div>
  );
}
