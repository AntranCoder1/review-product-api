import express from "express";
import * as controller from "../controllers/exitPopup.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifyExitPopup from "../verifyModel/exitPopup.verify";
const router = express.Router();

router.post("/create", jwtMiddleware, controller.create);
router.post("/update", jwtMiddleware, verifyExitPopup, controller.update);
router.get("/getById/:id", jwtMiddleware, verifyExitPopup, controller.getById);
router.post("/getList", jwtMiddleware, controller.getList);
router.delete(
	"/deleteOne/:id",
	jwtMiddleware,
	verifyExitPopup,
	controller.deleteOne
);

export default router;
