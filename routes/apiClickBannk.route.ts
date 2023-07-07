import express from "express";
import * as controller from "../controllers/apiClickBank.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
const router = express.Router();

router.post("/search", controller.search);

export default router;
