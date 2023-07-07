import express from "express";
import * as uploadsController from "../controllers/uploads.controller";
import jwtMiddleware from "../middlewares/jwt.middleware";
import * as multer from "../utils/multer";
import * as multerAds from "../utils/multerAds";
const router = express.Router();

router.post(
  "/subDomain",
  jwtMiddleware,
  multer.upload.single("file"),
  uploadsController.uploadFileDomain
);

router.post(
  "/post",
  jwtMiddleware,
  multer.upload.single("file"),
  uploadsController.uploadFilePost
);

router.post(
  "/newCampaign",
  multer.upload.single("file"),
  uploadsController.uploadFileNewCampaign
);

router.post(
  "/uploadFileExitPopup",
  multer.upload.single("file"),
  uploadsController.uploadFileExitPopup
);

router.post(
  "uploadFileSocialProofPopup",
  multer.upload.single("file"),
  uploadsController.uploadFileSocialProofPopup
);

router.post(
  "/uploadAsds",
  multerAds.upload.single("file"),
  uploadsController.uploadImageAds
);

router.get("/:type/:name", uploadsController.getFile);

export default router;
