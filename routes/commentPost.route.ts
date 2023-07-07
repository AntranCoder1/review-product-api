import express from "express";
import * as controller from "../controllers/commentPost.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifyExitPopup from "../verifyModel/exitPopup.verify";
const router = express.Router();

router.post("/updateShow", jwtMiddleware, controller.updateStatus);

router.post("/findComentPost", jwtMiddleware, controller.findPostComment);

router.post("/findPostCommentId", jwtMiddleware, controller.findCommentByPost);

router.post("/searchComment", jwtMiddleware, controller.searchComment);

router.post(
  "/getReplyWithCommentId",
  jwtMiddleware,
  controller.findReplyComment
);

router.post(
  "/searchReplyComment",
  jwtMiddleware,
  controller.searchReplyComment
);

export default router;
