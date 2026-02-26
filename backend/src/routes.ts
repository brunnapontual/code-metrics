import { Router } from "express";
import { AnalyzeController } from "./controllers/AnalyzeController";

const router = Router();
const controller = new AnalyzeController();

router.post("/analyze", controller.handle);

export default router;