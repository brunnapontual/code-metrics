import { ICodeAnalysisStrategy } from "./ICodeAnalysisStrategy";
import { TypeScriptASTAnalyzer } from "../domain/analyzers/TypeScriptASTAnalyzer";

export class TypeScriptStrategy implements ICodeAnalysisStrategy {
  analyze(code: string) {
    const analyzer = new TypeScriptASTAnalyzer();
    return analyzer.analyze(code);
  }
}