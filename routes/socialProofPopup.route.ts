import express from "express";
import * as controller from "../controllers/socialProofPopup.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifySocialProofPopup from "../verifyModel/socialProofPopup.verify";
const router = express.Router();

router.post("/create", jwtMiddleware, controller.create);
router.post(
	"/update",
	jwtMiddleware,
	verifySocialProofPopup,
	controller.update
);
router.get(
	"/getById/:id",
	jwtMiddleware,
	verifySocialProofPopup,
	controller.getById
);
router.post("/getList", jwtMiddleware, controller.getList);
router.delete(
	"/deleteOne/:id",
	jwtMiddleware,
	verifySocialProofPopup,
	controller.deleteOne
);
router.get("/getByUser", jwtMiddleware, controller.getByUser);

export default router;
