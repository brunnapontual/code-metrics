export class MetricsCalculator {
  static calculateCyclomaticComplexity(
    functionCount: number,
    ifCount: number,
    forCount: number
  ): number {
    return functionCount + ifCount + forCount;
  }

  static calculateMaintainabilityIndex(
    complexity: number
  ): string {
    if (complexity <= 5) return "High";
    if (complexity <= 10) return "Moderate";
    return "Low";
  }
}