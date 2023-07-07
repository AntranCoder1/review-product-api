import express from "express";
import * as controller from "../controllers/user.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
const router = express.Router();

router.post("/login", controller.login);
router.post("/create", controller.create);
router.post("/update", jwtMiddleware, controller.update);
router.post("/updatePassword", jwtMiddleware, controller.updatePassword);
router.post("/confirm", controller.confirm);
router.get("/profile", jwtMiddleware, controller.profile);
router.post("/updateAweber", jwtMiddleware, controller.updateAWeber);
router.post("/updateGetResponse", jwtMiddleware, controller.updateGetResponse);
router.post("/updateMailchimp", jwtMiddleware, controller.updateMailchimp);
router.get("/getFacebookTool", jwtMiddleware, controller.getFacebookTool);
router.post("/upgradeAccount", controller.upgradeAccount);
router.post(
  "/updateFacebookTool",
  jwtMiddleware,
  controller.updateFacebookTool
);
router.post("/forgotPassword", controller.forgotPassword);
router.post("/resetPassword", controller.resetPassword);

export default router;
