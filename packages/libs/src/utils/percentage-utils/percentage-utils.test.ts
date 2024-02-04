import { PercentageUtils } from "./percentage-utils";

describe("PercentageUtils", () => {
  describe("format method", () => {
    it("formats positive percentages correctly", () => {
      expect(PercentageUtils.format(10)).toBe("+10.00%");
      expect(PercentageUtils.format(1.234)).toBe("+1.23%");
    });

    it("formats negative percentages correctly", () => {
      expect(PercentageUtils.format(-10)).toBe("-10.00%");
      expect(PercentageUtils.format(-1.234)).toBe("-1.23%");
    });

    it("formats zero correctly", () => {
      expect(PercentageUtils.format(0)).toBe("+0.00%");
    });

    it("handles small percentages correctly", () => {
      expect(PercentageUtils.format(0.001)).toBe("+0.00%");
      expect(PercentageUtils.format(-0.001)).toBe("-0.00%");
    });
  });
});
