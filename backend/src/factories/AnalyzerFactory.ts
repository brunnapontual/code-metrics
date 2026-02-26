import { ICodeAnalysisStrategy } from "../strategies/ICodeAnalysisStrategy";
import { JavaScriptStrategy } from "../strategies/JavaScriptStrategy";
import { TypeScriptStrategy } from "../strategies/TypeScriptStrategy";
import { AppError } from "../errors/AppError";

export class AnalyzerFactory {
  static create(language: string): ICodeAnalysisStrategy {
    switch (language.toLowerCase()) {
      case "javascript":
        return new JavaScriptStrategy();

      case "typescript":
        return new TypeScriptStrategy();

      default:
        throw new AppError("Language not supported", 400);
    }
  }
}