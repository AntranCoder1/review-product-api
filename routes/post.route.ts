import express from "express";
import * as controller from "../controllers/post.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import verifyPost from "../verifyModel/post.verify";
import verifySubDomain from "../verifyModel/subDomain.verify";
const router = express.Router();

router.post("/create", jwtMiddleware, verifySubDomain, controller.create);
router.get("/getById/:id", controller.getById);
router.post("/getList", controller.getList);
router.post("/update", jwtMiddleware, verifyPost, controller.update);
router.delete(
  "/deletePost/:id",
  jwtMiddleware,
  verifyPost,
  controller.deletePost
);
router.post("/getPostResearch", controller.getPostResearch);

router.post("/getbykeyword", controller.searchByKeyword);
router.post("/getByFeedUrl", controller.getByFeedUrl);
router.post("/parsearticlebyurl", controller.parseArticleByLink);

router.get("/updateStatus/:id", jwtMiddleware, controller.updateStatus);

router.post("/getSearch", controller.searchPost);

router.post("/getPostComment", controller.getPostComment);

router.post("/findAllPost", jwtMiddleware, controller.getAllPost);
export default router;
