import { Request, Response } from "express";
import * as newCampaignTemplateRepo from "../repositories/newCampaignTemplate.repo";
import * as newCampaignTemplate from "../seedDataNewCampaign";
import * as newCampaignRepo from "../repositories/newCampaign.repo";
import * as newCampaignColtroller from "../controllers/uploads.controller";
import * as path from "path";

var request = require("request");
const fs = require("fs");

export const getListFromApi = async (req: Request, res: Response) => {
  try {
    request(
      {
        method: "get",
        url: req.body.url,
        headers: {
          "content-type": "application/json",
          "X-Auth-Token": `api-key ${req.body.apiKey}`,
          Authorization: `Bearer ${req.body.apiKey}`,
        },
        json: true,
      },
      function (error: any, response: any, body: any) {
        if (error) {
          return res.status(400).json({ error });
        }
        if (response) {
          return res.status(200).send({ data: response });
        }
      }
    );
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getTemplates = async (req: Request, res: Response) => {
  try {
    const data = await newCampaignTemplateRepo.getList();
    res.status(200).json({ data: data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const newCampaign = await newCampaignRepo.create({
      pageTitle: req.body.pageTitle,
      optIn: req.body.optIn,
      webinar: req.body.webinar,
      download: req.body.download,

      affiliateLinkUrl: req.body.affiliateLinkUrl,
      downloadButtonText: req.body.downloadButtonText,
      buttonTimer: req.body.buttonTimer,
      autoresponder: req.body.autoresponder,
      listTags: req.body.listTags,
      listTagsObject: req.body.listTagsObject,
      autoresponderFormCode: req.body.autoresponderFormCode,
      webinarPageUrl: req.body.webinarPageUrl,
      optInButtonText: req.body.optInButtonText,
      socialSharingText: req.body.socialSharingText,
      poster: req.body.poster,
      pinterestPoster: req.body.pinterestPoster,
      privacyPolicyLink: req.body.privacyPolicyLink,
      earningsDisclaimerLink: req.body.earningsDisclaimerLink,
      termsandConditionsLink: req.body.termsandConditionsLink,
      commissionBuilderProduct: req.body.commissionBuilderProduct,
      exitPopSettings: req.body.exitPopSettings,
      socialProofPopupSettings: req.body.socialProofPopupSettings,
      facebookPixelCode: req.body.facebookPixelCode,
      isDefaultFacebookPixelCode: req.body.isDefaultFacebookPixelCode,
      facebookCommentsSdkcode: req.body.facebookCommentsSdkcode,
      isDefaultFacebookCommentsSdkCode:
        req.body.isDefaultFacebookCommentsSdkCode,
      facebookCommentsCodeSnippet: req.body.facebookCommentsCodeSnippet,
      facebookChatWidgetCode: req.body.facebookChatWidgetCode,
      isDefaultFacebookChatWidgetCode: req.body.isDefaultFacebookChatWidgetCode,

      videoLinkUrl: req.body.videoLinkUrl,

      user: _user._id,
    });
    res.status(200).json({ data: "Create successful", _id: newCampaign._id });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    await newCampaignRepo.updateOne(req.body._id, {
      pageTitle: req.body.pageTitle,
      optIn: req.body.optIn,
      webinar: req.body.webinar,
      download: req.body.download,

      affiliateLinkUrl: req.body.affiliateLinkUrl,
      downloadButtonText: req.body.downloadButtonText,
      buttonTimer: req.body.buttonTimer,
      autoresponder: req.body.autoresponder,
      listTags: req.body.listTags,
      listTagsObject: req.body.listTagsObject,
      autoresponderFormCode: req.body.autoresponderFormCode,
      webinarPageUrl: req.body.webinarPageUrl,
      optInButtonText: req.body.optInButtonText,
      socialSharingText: req.body.socialSharingText,
      poster: req.body.poster,
      pinterestPoster: req.body.pinterestPoster,
      privacyPolicyLink: req.body.privacyPolicyLink,
      earningsDisclaimerLink: req.body.earningsDisclaimerLink,
      termsandConditionsLink: req.body.termsandConditionsLink,
      commissionBuilderProduct: req.body.commissionBuilderProduct,
      exitPopSettings: req.body.exitPopSettings,
      socialProofPopupSettings: req.body.socialProofPopupSettings,
      facebookPixelCode: req.body.facebookPixelCode,
      isDefaultFacebookPixelCode: req.body.isDefaultFacebookPixelCode,
      facebookCommentsSdkcode: req.body.facebookCommentsSdkcode,
      isDefaultFacebookCommentsSdkCode:
        req.body.isDefaultFacebookCommentsSdkCode,
      facebookCommentsCodeSnippet: req.body.facebookCommentsCodeSnippet,
      facebookChatWidgetCode: req.body.facebookChatWidgetCode,
      isDefaultFacebookChatWidgetCode: req.body.isDefaultFacebookChatWidgetCode,

      videoLinkUrl: req.body.videoLinkUrl,
    });
    res.status(200).json({ data: "Update successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const data = await newCampaignRepo.getOne({ _id: req.params.id });
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getlist = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const data = await newCampaignRepo.getMany(
      { user: _user._id },
      req.body.offset,
      req.body.limit
    );
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const existedNewCampaign = await newCampaignRepo.getOne({
      _id: req.params.id,
    });

    await newCampaignRepo.deleteOne({ _id: req.params.id });
    if (
      existedNewCampaign &&
      existedNewCampaign.poster &&
      existedNewCampaign?.poster != ""
    ) {
      newCampaignColtroller.remove(existedNewCampaign.poster.split("/"));
    }

    if (
      existedNewCampaign &&
      existedNewCampaign.pinterestPoster &&
      existedNewCampaign.pinterestPoster != ""
    ) {
      newCampaignColtroller.remove(existedNewCampaign.pinterestPoster);
    }

    res.status(200).json({ data: "Delete successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const viewPage = async (req: Request, res: Response) => {
  try {
    if (req.body.type == "optIn") {
      await newCampaignRepo.updateOne(req.body._id, { $inc: { OPV: 1 } });
    }
    if (req.body.type == "webinar") {
      await newCampaignRepo.updateOne(req.body._id, { $inc: { WPV: 1 } });
    }
    if (req.body.type == "download") {
      await newCampaignRepo.updateOne(req.body._id, { $inc: { DPV: 1 } });
    }
    res.status(200).json({ data: `Update ${req.body.type} view successful` });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getAffiliateInfo = async (req: Request, res: Response) => {
  try {
    const jsonFileData = path.join(__dirname, "..", "campaign_affiliate.json");

    let rawdata = fs.readFileSync(jsonFileData);
    let affiliate = JSON.parse(rawdata);
    res.status(200).json({ data: affiliate });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
