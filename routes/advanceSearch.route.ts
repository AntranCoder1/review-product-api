import express from "express";
import * as controller from "../controllers/advanceSearch.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
const router = express.Router();

router.post("/update", jwtMiddleware, controller.update);
router.get("/getDefault/:id", controller.getDefault);

export default router;
