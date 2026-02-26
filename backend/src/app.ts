import express from "express";
import router from "./routes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(3000, () => {
  console.log("🚀 DevScope running on port 3000");
});