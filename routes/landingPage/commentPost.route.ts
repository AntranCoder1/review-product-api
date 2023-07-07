import express from "express";
import * as commentPostController from "../../controllers/landingPage/commentPost.controller";

const router = express.Router();

router.post("/", commentPostController.findCommentByPost);

router.post("/create", commentPostController.create);

router.post("/findComentPost", commentPostController.findPostComment);

router.post("/getReplyWithCommentId", commentPostController.findReplyComment);

export default router;
