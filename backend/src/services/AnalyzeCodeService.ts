import { AnalyzerFactory } from "../factories/AnalyzerFactory";
import { MetricsCalculator } from "../utils/metrics";
import { AnalyzeResponseDTO } from "../dtos/AnalyzeResponseDTO";

export class AnalyzeCodeService {
  execute(language: string, code: string): AnalyzeResponseDTO {
    const strategy = AnalyzerFactory.create(language);
    const rawMetrics = strategy.analyze(code);

    const cyclomaticComplexity =
      MetricsCalculator.calculateCyclomaticComplexity(
        rawMetrics.functionCount,
        rawMetrics.ifCount,
        rawMetrics.forCount
      );

    const maintainability =
      MetricsCalculator.calculateMaintainabilityIndex(
        cyclomaticComplexity
      );

    return {
      language,
      metrics: {
        ...rawMetrics,
        cyclomaticComplexity,
        maintainability
      }
    };
  }
}