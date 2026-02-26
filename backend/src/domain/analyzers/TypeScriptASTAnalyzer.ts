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
    let forCount = 0;
    let ifCount = 0;

    function visit(node: ts.Node) {
      if (ts.isFunctionDeclaration(node)) {
        functionCount++;
      }

      if (ts.isInterfaceDeclaration(node)) {
        interfaceCount++;
      }

      if (ts.isTypeAliasDeclaration(node)) {
        typeAliasCount++;
      }

      if (ts.isForStatement(node)) {
        forCount++;
      }

      if (ts.isIfStatement(node)) {
        ifCount++;
      }

      ts.forEachChild(node, visit);
    }

    visit(sourceFile);

    const complexityScore =
      functionCount + forCount + ifCount;
  }
}