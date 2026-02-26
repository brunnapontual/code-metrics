import ts from "typescript";

export class TypeScriptASTAnalyzer {
  analyze(code: string) {
    const sourceFile = ts.createSourceFile(
      "file.ts",
      code,
      ts.ScriptTarget.Latest,
      true
    );

    let functionCount = 0;
    let interfaceCount = 0;
    let typeAliasCount = 0;
    let decisionPoints = 0;

    const longFunctions: { name: string; lines: number }[] = [];

    function visit(node: ts.Node) {

      if (ts.isFunctionDeclaration(node)) {
        functionCount++;

        const start = sourceFile.getLineAndCharacterOfPosition(node.getStart());
        const end = sourceFile.getLineAndCharacterOfPosition(node.getEnd());

        const lineCount = end.line - start.line + 1;

        const functionName = node.name?.text || "anonymous";

        if (lineCount > 20) {
          longFunctions.push({
            name: functionName,
            lines: lineCount
          });
        }
      }

      if (ts.isInterfaceDeclaration(node)) {
        interfaceCount++;
      }

      if (ts.isTypeAliasDeclaration(node)) {
        typeAliasCount++;
      }

      if (
        ts.isIfStatement(node) ||
        ts.isForStatement(node) ||
        ts.isWhileStatement(node) ||
        ts.isDoStatement(node) ||
        ts.isCaseClause(node) ||
        ts.isCatchClause(node) ||
        ts.isConditionalExpression(node)
      ) {
        decisionPoints++;
      }

      if (ts.isBinaryExpression(node)) {
        if (
          node.operatorToken.kind === ts.SyntaxKind.AmpersandAmpersandToken ||
          node.operatorToken.kind === ts.SyntaxKind.BarBarToken
        ) {
          decisionPoints++;
        }
      }

      ts.forEachChild(node, visit);
    }

    visit(sourceFile);

    return {
      functionCount,
      interfaceCount,
      typeAliasCount,
      decisionPoints,
      longFunctions
    };
  }
}