import express from "express";
import * as controller from "../controllers/levelAccess.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
const router = express.Router();

router.get("/getList", controller.getList);
router.get("/getOne/:id", controller.getOne);

export default router;
