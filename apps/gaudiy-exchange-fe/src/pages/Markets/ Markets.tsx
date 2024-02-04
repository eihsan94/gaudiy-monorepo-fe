import { TiArrowMaximise } from "react-icons/ti";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import MarketsRouter, { MarketsRouterBasePath } from "./MarketsRouter";
import { NavBar, RoutedTabs } from "@/components";

export default function Markets() {
  const navItems = MarketsRouter[0].children || [];
  const basePath = MarketsRouterBasePath;

  return (
    <div className="w-full overflow-auto h-screen pb-24">
      <NavBar />
      <RoutedTabs
        navItems={navItems}
        basePath={basePath}
        suffix={
          <div className="flex text-xl text-gray-400 gap-2">
            <TiArrowMaximise
              cursor={"pointer"}
              onClick={() => alert("going fullscreen")}
            />
            <HiMiniMagnifyingGlass
              cursor={"pointer"}
              onClick={() => alert("search")}
            />
          </div>
        }
      />
    </div>
  );
}
