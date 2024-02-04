import { CurrencyUtils } from "./currency-utils";

describe("CurrencyUtils", () => {
  describe("format method", () => {
    it("correctly formats positive numbers", () => {
      const result = CurrencyUtils.format(1234.56);
      expect(result).toBe("$1,234.56");
    });

    it("correctly formats negative numbers", () => {
      const result = CurrencyUtils.format(-1234.56);
      expect(result).toBe("-$1,234.56");
    });

    it("correctly formats zero", () => {
      const result = CurrencyUtils.format(0);
      expect(result).toBe("$0.00");
    });
  });
});
