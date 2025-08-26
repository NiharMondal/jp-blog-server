import express, { Application } from "express";
import cors from "cors";
import notFoundRoute from "./middleware/notFoundRoute";
import globalErrorHandler from "./middleware/globalError";
import { rootRoute } from "./routes/root-route";
const app: Application = express();

app.use(express.json());

app.use(cors({ origin: ["http://localhost:3000"] }));

app.use("/api", rootRoute);

app.use(notFoundRoute);
app.use(globalErrorHandler);

export default app;
