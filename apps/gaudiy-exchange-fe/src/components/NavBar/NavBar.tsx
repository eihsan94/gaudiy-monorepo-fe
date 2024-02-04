import classNames from "classnames";
import {
  AiOutlineHome,
  AiOutlineLineChart,
  AiOutlineAppstore,
  AiOutlineBarChart,
} from "react-icons/ai";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { LuCopy } from "react-icons/lu";
import { Link, useLocation } from "react-router-dom";

export function NavBar() {
  const location = useLocation();
  const navItems = [
    { href: "/home", icon: AiOutlineHome, label: "Home" },
    { href: "/markets", icon: AiOutlineLineChart, label: "Markets" },
    { href: "/trade", icon: AiOutlineBarChart, label: "Trade" },
    { href: "/promotions", icon: HiOutlineSpeakerphone, label: "Promotions" },
    { href: "/futures", icon: AiOutlineAppstore, label: "Futures" },
    { href: "/assets", icon: LuCopy, label: "Assets" },
  ];

  return (
    <div className="fixed bottom-0 lg:relative left-0 w-full bg-white shadow-md lg:shadow-none">
      <nav className="flex justify-around lg:justify-start items-center gap-0 lg:gap-4 px-0 lg:px-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.href}
            className={classNames(
              "flex flex-col lg:flex-row items-center justify-center p-2 lg:p-4 lg:gap-2",
              {
                "text-black": location.pathname.includes(item.href),
                "text-muted-foreground": !location.pathname.includes(item.href),
              }
            )}>
            <item.icon size={24} />
            <span className="text-xs mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
