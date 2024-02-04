declare module "react-tradingview-widget" {
  export enum BarStyles {
    BARS = "0",
    CANDLES = "1",
    HOLLOW_CANDLES = "9",
    HEIKIN_ASHI = "8",
    LINE = "2",
    AREA = "3",
    RENKO = "4",
    LINE_BREAK = "7",
    KAGI = "5",
    POINT_AND_FIGURE = "6",
  }

  export enum IntervalTypes {
    D = "D",
    W = "W",
  }

  export enum RangeTypes {
    YTD = "ytd",
    ALL = "all",
  }

  export enum Themes {
    LIGHT = "Light",
    DARK = "Dark",
  }

  interface TradingViewWidgetProps {
    allow_symbol_change?: boolean;
    autosize?: boolean;
    calendar?: boolean;
    details?: boolean;
    enable_publishing?: boolean;
    height?: number;
    hideideas?: boolean;
    hide_legend?: boolean;
    hide_side_toolbar?: boolean;
    hide_top_toolbar?: boolean;
    hotlist?: boolean;
    interval?:
      | IntervalTypes
      | "1"
      | "3"
      | "5"
      | "15"
      | "30"
      | "60"
      | "120"
      | "180";
    locale?: string;
    news?: string[];
    no_referral_id?: boolean;
    popup_height?: number | string;
    popup_width?: number | string;
    range?: RangeTypes | "1d" | "5d" | "1m" | "3m" | "6m" | "12m" | "60m";
    referral_id?: string;
    save_image?: boolean;
    show_popup_button?: boolean;
    studies?: string[];
    style?: BarStyles;
    symbol: string;
    theme?: Themes;
    timezone?: string;
    toolbar_bg?: string;
    watchlist?: string[];
    widgetType?: string;
    width?: number;
    withdateranges?: boolean;
    allow_symbol_change?: boolean;
    autosize?: boolean;
    enable_publishing?: boolean;
    height?: number;
    hideideas?: boolean;
    hide_legend?: boolean;
    hide_side_toolbar?: boolean;
    hide_top_toolbar?: boolean;
    interval?: IntervalTypesType;
    locale?: string;
    save_image?: boolean;
    show_popup_button?: boolean;
    style?: BarStylesType;
    theme?: ThemesType;
    timezone?: string;
    toolbar_bg?: string;
    widgetType?: string;
    width?: number;
    withdateranges?: boolean;
  }
  const TradingViewWidget: FC<TradingViewWidgetProps>;
  export default TradingViewWidget;
}
