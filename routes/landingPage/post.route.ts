import express from "express";
import * as controller from "../../controllers/landingPage/post.controller";

const router = express.Router();

router.post("/getList", controller.getList);
router.get("/getById/:id", controller.getById);
router.post("/getBySlug", controller.getBySlug);
router.post("/getListByDate", controller.getListByDate);
router.post("/getTop10", controller.getTop10);
router.post("/getNextPost", controller.getNextPost);
router.post("/getPreviousPost", controller.getPreviousPost);
router.post("/getBySlugCategory", controller.getBySlugCategory);
router.post("/getPostComment", controller.getPostComment);

export default router;
