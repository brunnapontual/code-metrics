import { Request, Response } from "express";
import { AnalyzeCodeService } from "../services/AnalyzeCodeService";

export class AnalyzeController {
  async handle(req: Request, res: Response) {
    const { language, code } = req.body;

    const service = new AnalyzeCodeService();
    const result = service.execute(language, code);

    return res.json(result);
  }
}