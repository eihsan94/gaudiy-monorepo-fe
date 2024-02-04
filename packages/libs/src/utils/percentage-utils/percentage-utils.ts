export class PercentageUtils {
  public static format(percentage: number): string {
    return `${percentage < 0 ? "" : "+"}${percentage.toFixed(2)}%`;
  }
}
