export class MetricsCalculator {

  static calculateCyclomaticComplexity(decisionPoints: number): number {
    return 1 + decisionPoints;
  }

  static calculateMaintainabilityIndex(complexity: number): string {
    if (complexity <= 5) return "High";
    if (complexity <= 10) return "Moderate";
    return "Low";
  }
}