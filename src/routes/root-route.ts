import { Router } from "express";
import { allRoute } from "./all-route";

const router = Router();

allRoute.forEach((el) => router.use(el.path, el.element));

export const rootRoute = router;
