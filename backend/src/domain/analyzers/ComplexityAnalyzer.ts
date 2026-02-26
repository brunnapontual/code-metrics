import { ICodeAnalyzer } from "./ICodeAnalyzer";

export class ComplexityAnalyzer implements ICodeAnalyzer {
  analyze(code: string) {
    const functionCount = (code.match(/function/g) || []).length;
    const ifCount = (code.match(/if/g) || []).length;
    const forCount = (code.match(/for/g) || []).length;

    const complexityScore = functionCount + ifCount + forCount;

    return {
      functionCount,
      ifCount,
      forCount,
      complexityScore
    };
  }
}