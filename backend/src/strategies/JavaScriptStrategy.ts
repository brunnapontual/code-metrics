import { ICodeAnalysisStrategy } from "./ICodeAnalysisStrategy";
import { ComplexityAnalyzer } from "../domain/analyzers/ComplexityAnalyzer";

export class JavaScriptStrategy implements ICodeAnalysisStrategy {
  analyze(code: string) {
    const complexityAnalyzer = new ComplexityAnalyzer();

    const complexity = complexityAnalyzer.analyze(code);

    return {
      language: "javascript",
      complexity
    };
  }
}