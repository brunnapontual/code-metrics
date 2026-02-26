export interface AnalyzeResponseDTO {
  language: string;
  metrics: {
    functionCount: number;
    interfaceCount?: number;
    typeAliasCount?: number;
    forCount: number;
    ifCount: number;
    cyclomaticComplexity: number;
    maintainability: string;
  };
}