import { Router } from "express";

import CalculateRouter from "./calculate";
import { calculate } from "./constants";

// Init router and path
const router = Router();

// Add sub-routes
router.use(`/${calculate}`, CalculateRouter);

export default router;
