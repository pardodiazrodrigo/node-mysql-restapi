import { Router } from "express";
import { home, pong } from "../controllers/index.controller.js";

const router = Router();

router.get("/ping", pong);

router.get('/', home)

export default router;
