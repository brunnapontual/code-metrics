export interface ICodeAnalysisStrategy {
  analyze(code: string): any;
}