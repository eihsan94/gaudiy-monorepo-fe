export class CurrencyUtils {
  public static format(value: number): string {
    return value !== null
      ? Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(value)
      : "N/A";
  }
}
