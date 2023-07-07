import express from "express";
import * as controller from "../controllers/tutorial.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
const router = express.Router();

router.get("/getList", controller.getList);

export default router;
