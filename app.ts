import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import path from "path";
import config from "./config/config";
import * as cronAuto from "./utils/cronAuto";
import * as seedNewCampaignTemplate from "./seedDataNewCampaign";

var CronJobManager = require("cron-job-manager");

const port = config.PORT;
// connect DB
mongoose.connect(config.DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const server = express();
// configure middlewares
server.use(bodyParser.json({ limit: "50mb" }));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());

import userRoute from "./routes/user.route";
server.use("/user", userRoute);

import levelAccessRoute from "./routes/levelAccess.route";
server.use("/levelAccess", levelAccessRoute);

import nicheSiteRoute from "./routes/nicheSite.route";
server.use("/nicheSite", nicheSiteRoute);

import subDomainRoute from "./routes/subDomain.route";
server.use("/subDomain", subDomainRoute);

import uploadsRoute from "./routes/uploads.route";
server.use("/uploads", uploadsRoute);

import postRoute from "./routes/post.route";
server.use("/post", postRoute);

import pageRoute from "./routes/page.route";
server.use("/page", pageRoute);

import marketingToolRoute from "./routes/marketingTool.route";
server.use("/marketingTool", marketingToolRoute);

import feedUrlRoute from "./routes/feedUrl.route";
server.use("/feedUrl", feedUrlRoute);

import apiClickBankRoute from "./routes/apiClickBannk.route";
server.use("/apiClickBank", apiClickBankRoute);

import tutorialRoute from "./routes/tutorial.route";
server.use("/tutorial", tutorialRoute);

import automationRoute from "./routes/automation.route";
server.use("/automation", automationRoute);

import advanceSearchRoute from "./routes/advanceSearch.route";
server.use("/advanceSearch", advanceSearchRoute);

import campaignRoute from "./routes/campaign.route";
server.use("/campaign", campaignRoute);

import newCampaignRoute from "./routes/newCampaign.route";
server.use("/newCampaign", newCampaignRoute);

import exitPopupRoute from "./routes/exitPopup.route";
server.use("/exitPopup", exitPopupRoute);

import socialProofPopupRoute from "./routes/socialProofPopup.route";
server.use("/socialProofPopup", socialProofPopupRoute);

import parentCategory from "./routes/parentCategory.route";
server.use("/parentCategory", parentCategory);

import category from "./routes/category.route";
server.use("/category", category);

import Adminconversation from "./routes/commentPost.route";
server.use("/conversation", Adminconversation);

import adsManagementRoute from "./routes/adsManagement.route";
server.use("/asdsManagement", adsManagementRoute);

import blockRoute from "./routes/block.route";
server.use("/block", blockRoute);

//////////////////
/**landing page */
import landingSubdomain from "./routes/landingPage/subDomain.route";
server.use("/landingPage/subDomain", landingSubdomain);

import landingPost from "./routes/landingPage/post.route";
server.use("/landingPage/post", landingPost);

import landingCampaign from "./routes/landingPage/campaign.route";
server.use("/landingPage/campaign", landingCampaign);

import landingPage from "./routes/landingPage/page.route";
server.use("/landingPage/page", landingPage);

import landingMarketing from "./routes/landingPage/marketing.route";
server.use("/landingPage/marketing", landingMarketing);

import landingNewCampaign from "./routes/landingPage/newCampaign.route";
server.use("/landingPage/newCampaign", landingNewCampaign);

import landingCategory from "./routes/landingPage/categories.route";
server.use("/landingPage/category", landingCategory);

import conversation from "./routes/landingPage/commentPost.route";
server.use("/landingPage/conversation", conversation);

import landingLike from "./routes/landingPage/likePost.route";
server.use("/landingPage/likePost", landingLike);

import landingAdsManagement from "./routes/landingPage/adsManagement.route";
server.use("/landing/asdsManagement", landingAdsManagement);

import LandingBlockRoute from "./routes/landingPage/block.route";
server.use("/landing/block", LandingBlockRoute);
//////////////////

// config for angular server
server.use(express.static("fe"));

server.get("/*", (req, res) => res.sendFile(path.resolve("./fe/index.html")));
// server start

server.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Example app listening on port ${port}!`);

  cronAuto.createAllAuto();
  // seedNewCampaignTemplate.seedNewCampaignTemplate();
});
