import { RouteObject, useNavigate, useParams } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@repo/libs/ui";
import classNames from "classnames";

type RoutedTabsProps = {
  navItems: RouteObject[];
  basePath: string;
  suffix?: JSX.Element;
  className?: string;
};

export function RoutedTabs({
  navItems,
  basePath,
  className,
  suffix,
}: RoutedTabsProps) {
  const { tab } = useParams();
  const navigate = useNavigate();

  // Determine the default tab value based on the URL parameter or fallback
  const defaultTabValue = tab ? tab : navItems[0].path;

  const handleTabChange = (newValue: string) => {
    navigate(`${basePath}/${newValue}`);
  };

  return (
    <Tabs
      defaultValue={defaultTabValue}
      className={classNames("w-full", className)}
      onValueChange={handleTabChange}>
      <div className="flex items-center border-b border border-gray-100 px-4 lg:px-8">
        <TabsList className="w-fit border-none flex">
          {navItems.map((tab) => (
            <TabsTrigger
              key={tab.path}
              value={tab.path!}
              className="capitalize">
              {tab.path}
            </TabsTrigger>
          ))}
        </TabsList>

        <div className="flex-1 justify-end flex">{suffix}</div>
      </div>
      {navItems.map((tab) => (
        <TabsContent key={tab.path} value={tab.path!} className="px-4 lg:px-8">
          {tab.element}
        </TabsContent>
      ))}
    </Tabs>
  );
}
