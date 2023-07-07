import { Request, Response } from "express";
import * as constValue from "../utils/constValue";
import * as subDomainRepo from "../repositories/subDomain.repo";
import * as postRepo from "../repositories/post.repo";
import * as newCampaignRepo from "../repositories/newCampaign.repo";
import * as exitPopupRepo from "../repositories/exitPopup.repo";
import * as socialProofPopupRepo from "../repositories/socialProofPopup.repo";
import * as adsManagementRepo from "../repositories/adsManagement.repo";
import * as userRepo from "../repositories/user.repo";
import * as path from "path";
import { rename, unlink, stat } from "fs";
import fs from "fs";

export const uploadFileDomain = async (req: any, res: Response) => {
  try {
    const filename = req.file.filename;
    const baseUrl = req.body.baseUrl;

    const folderUploads = constValue.fileFolder.uploads;
    const folderTmp = constValue.fileFolder.tmp;
    const folderSubDomains = constValue.fileFolder.subDomains;

    const existedSubDomain = await subDomainRepo.getOne({ _id: req.body._id });
    if (!existedSubDomain) {
      remove([folderUploads, folderTmp, filename]);
      res.status(400).json({ message: "Domain is not exists" });
      return 0;
    }

    const oldPath = constValue.getPath([
      folderUploads,
      folderTmp,
      req.file.filename,
    ]);
    const newPath = constValue.getPath([
      folderUploads,
      folderSubDomains,
      req.file.filename,
    ]);

    await rename(oldPath, newPath, async (cb) => {
      if (cb) {
        remove([folderUploads, folderTmp, filename]);

        res.status(400).json({ message: "Error when uploading" });
        return 0;
      }

      switch (req.body.type) {
        case constValue.fileSubDomainType.logoUrl:
          await subDomainRepo.updateOne(existedSubDomain._id, {
            logoUrl: `/${folderUploads}/${folderSubDomains}/${filename}`,
            logoUrlFull: `${baseUrl}${folderUploads}/${folderSubDomains}/${filename}`,
          });
          if (existedSubDomain.logoUrl) {
            const nameArr = existedSubDomain.logoUrl.split("/");
            remove(nameArr);
          }
          break;
        case constValue.fileSubDomainType.faviconUrl:
          await subDomainRepo.updateOne(existedSubDomain._id, {
            faviconUrl: `/${folderUploads}/${folderSubDomains}/${filename}`,
            faviconUrlFull: `${baseUrl}${folderUploads}/${folderSubDomains}/${filename}`,
          });
          if (existedSubDomain.faviconUrl) {
            const nameArr = existedSubDomain.faviconUrl.split("/");
            remove(nameArr);
          }
          break;
        case constValue.fileSubDomainType.authorImage:
          await subDomainRepo.updateOne(existedSubDomain._id, {
            authorImage: `/${folderUploads}/${folderSubDomains}/${filename}`,
            authorImageFull: `${baseUrl}${folderUploads}/${folderSubDomains}/${filename}`,
          });
          if (existedSubDomain.authorImage) {
            const nameArr = existedSubDomain.authorImage.split("/");
            remove(nameArr);
          }
          break;
        case constValue.fileSubDomainType.buyNowImage:
          await subDomainRepo.updateOne(existedSubDomain._id, {
            buyNowImage: `/${folderUploads}/${folderSubDomains}/${filename}`,
            buyNowImageFull: `${baseUrl}${folderUploads}/${folderSubDomains}/${filename}`,
          });
          if (existedSubDomain.buyNowImage) {
            const nameArr = existedSubDomain.buyNowImage.split("/");
            remove(nameArr);
          }
          break;
        default:
          remove([folderUploads, folderSubDomains, filename]);
          res.status(400).json({ message: "Type image is not existed" });
          return 0;
      }

      res.status(200).json({ data: req.body.type + " image has been upload" });
    });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const uploadFilePost = async (req: any, res: Response) => {
  try {
    const filename = req.file.filename;
    const baseUrl = req.body.baseUrl;

    const folderUploads = constValue.fileFolder.uploads;
    const folderTmp = constValue.fileFolder.tmp;
    const folderPosts = constValue.fileFolder.posts;

    const existedPost = await postRepo.getOne({ _id: req.body._id });
    if (!existedPost) {
      remove([folderUploads, folderTmp, filename]);
      res.status(400).json({ message: "Domain is not exists" });
      return 0;
    }

    const oldPath = constValue.getPath([
      folderUploads,
      folderTmp,
      req.file.filename,
    ]);
    const newPath = constValue.getPath([
      folderUploads,
      folderPosts,
      req.file.filename,
    ]);

    await rename(oldPath, newPath, async (cb) => {
      if (cb) {
        remove([folderUploads, folderTmp, filename]);
        res.status(400).json({ message: "Error when uploading" });
        return 0;
      }

      switch (req.body.type) {
        case constValue.filePostType.postThumbnail:
          await postRepo.updateOne(existedPost._id, {
            postThumbnail: `/${folderUploads}/${folderPosts}/${filename}`,
            postThumbnailLink: `${baseUrl}${folderUploads}/${folderPosts}/${filename}`,
          });
          if (existedPost.postThumbnail) {
            const nameArr = existedPost.postThumbnail.split("/");
            remove(nameArr);
          }
          break;
        case constValue.filePostType.buyNowImage:
          await postRepo.updateOne(existedPost._id, {
            buyNowImage: `/${folderUploads}/${folderPosts}/${filename}`,
            buyNowImageLink: `${baseUrl}${folderUploads}/${folderPosts}/${filename}`,
          });
          if (existedPost.buyNowImage) {
            const nameArr = existedPost.buyNowImage.split("/");
            remove(nameArr);
          }
          break;
        case constValue.filePostType.popupImage:
          await postRepo.updateOne(existedPost._id, {
            popupImage: `/${folderUploads}/${folderPosts}/${filename}`,
            popupImageLink: `${baseUrl}${folderUploads}/${folderPosts}/${filename}`,
          });
          if (existedPost.popupImage) {
            const nameArr = existedPost.popupImage.split("/");
            remove(nameArr);
          }
          break;
        default:
          remove([folderUploads, folderPosts, filename]);
          res.status(400).json({ message: "Type image is not existed" });
          return 0;
      }

      res.status(200).json({ data: req.body.type + " image has been upload" });
    });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const uploadFileNewCampaign = async (req: any, res: Response) => {
  try {
    const filename = req.file.filename;
    const baseUrl = req.body.baseUrl;

    const folderUploads = constValue.fileFolder.uploads;
    const folderTmp = constValue.fileFolder.tmp;
    const folderCampaigns = constValue.fileFolder.newCampaigns;

    const existedNewCampaign = await newCampaignRepo.getOne({
      _id: req.body._id,
    });

    if (!existedNewCampaign) {
      remove([folderUploads, folderTmp, filename]);
      res.status(400).json({ message: "New Campaign is not exists" });
      return 0;
    }

    const oldPath = constValue.getPath([
      folderUploads,
      folderTmp,
      req.file.filename,
    ]);
    const newPath = constValue.getPath([
      folderUploads,
      folderCampaigns,
      req.file.filename,
    ]);

    await rename(oldPath, newPath, async (cb) => {
      if (cb) {
        remove([folderUploads, folderTmp, filename]);
        res.status(400).json({ message: "Error when uploading" });
        return 0;
      }

      switch (req.body.type) {
        case constValue.fileNewCampaignType.poster:
          await newCampaignRepo.updateOne(existedNewCampaign._id, {
            poster: `/${folderUploads}/${folderCampaigns}/${filename}`,
            posterFull: `${baseUrl}${folderUploads}/${folderCampaigns}/${filename}`,
          });
          if (existedNewCampaign.poster) {
            const nameArr = existedNewCampaign.poster.split("/");
            remove(nameArr);
          }
          break;
        case constValue.fileNewCampaignType.pinterestPoster:
          await newCampaignRepo.updateOne(existedNewCampaign._id, {
            pinterestPoster: `/${folderUploads}/${folderCampaigns}/${filename}`,
            pinterestPosterFull: `${baseUrl}${folderUploads}/${folderCampaigns}/${filename}`,
          });
          if (existedNewCampaign.pinterestPoster) {
            const nameArr = existedNewCampaign.pinterestPoster.split("/");
            remove(nameArr);
          }
          break;
        default:
          remove([folderUploads, folderCampaigns, filename]);
          res.status(400).json({ message: "Type image is not existed" });
          return 0;
      }

      res.status(200).json({ data: req.body.type + " image has been upload" });
    });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const uploadFileExitPopup = async (req: any, res: Response) => {
  try {
    const filename = req.file.filename;
    const baseUrl = req.body.baseUrl;

    const folderUploads = constValue.fileFolder.uploads;
    const folderTmp = constValue.fileFolder.tmp;
    const autoProfitBoosts = constValue.fileFolder.autoProfitBoosts;

    const existedExitPopup = await exitPopupRepo.getOne({
      _id: req.body._id,
    });

    if (!existedExitPopup) {
      remove([folderUploads, folderTmp, filename]);
      res.status(400).json({ message: "Exit Popup is not exists" });
      return 0;
    }

    const oldPath = constValue.getPath([
      folderUploads,
      folderTmp,
      req.file.filename,
    ]);
    const newPath = constValue.getPath([
      folderUploads,
      autoProfitBoosts,
      req.file.filename,
    ]);

    await rename(oldPath, newPath, async (cb) => {
      if (cb) {
        remove([folderUploads, folderTmp, filename]);
        res.status(400).json({ message: "Error when uploading" });
        return 0;
      }

      await exitPopupRepo.updateOne(existedExitPopup._id, {
        image: `/${folderUploads}/${autoProfitBoosts}/${filename}`,
        imageUrl: `${baseUrl}${folderUploads}/${autoProfitBoosts}/${filename}`,
      });
      if (existedExitPopup.image) {
        const nameArr = existedExitPopup.image.split("/");
        remove(nameArr);
      }

      res.status(200).json({ data: req.body.type + " image has been upload" });
    });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const uploadFileSocialProofPopup = async (req: any, res: Response) => {
  try {
    const filename = req.file.filename;
    const baseUrl = req.body.baseUrl;

    const folderUploads = constValue.fileFolder.uploads;
    const folderTmp = constValue.fileFolder.tmp;
    const autoProfitBoosts = constValue.fileFolder.autoProfitBoosts;

    const existedSocialProofPopup = await socialProofPopupRepo.getOne({
      _id: req.body._id,
    });

    if (!existedSocialProofPopup) {
      remove([folderUploads, folderTmp, filename]);
      res.status(400).json({ message: "Exit Popup is not exists" });
      return 0;
    }

    const oldPath = constValue.getPath([
      folderUploads,
      folderTmp,
      req.file.filename,
    ]);
    const newPath = constValue.getPath([
      folderUploads,
      autoProfitBoosts,
      req.file.filename,
    ]);

    await rename(oldPath, newPath, async (cb) => {
      if (cb) {
        remove([folderUploads, folderTmp, filename]);
        res.status(400).json({ message: "Error when uploading" });
        return 0;
      }

      await exitPopupRepo.updateOne(existedSocialProofPopup._id, {
        image: `/${folderUploads}/${autoProfitBoosts}/${filename}`,
        imageUrl: `${baseUrl}${folderUploads}/${autoProfitBoosts}/${filename}`,
      });
      if (existedSocialProofPopup.image) {
        const nameArr = existedSocialProofPopup.image.split("/");
        remove(nameArr);
      }

      res.status(200).json({ data: req.body.type + " image has been upload" });
    });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export let uploadImageAds = async (req: any, res: Response) => {
  try {
    const filename = req.file.filename;

    const folderUploads = constValue.fileFolder.uploads;
    const folderAdsManagement = constValue.fileFolder.adsManagement;

    const filePath = path.join(
      __dirname,
      `../../${folderUploads}/${folderAdsManagement}/` + filename
    );

    if (fs.existsSync(filePath)) {
      res.status(200).send({ file: folderAdsManagement + "/" + filename });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getFile = async (req: Request, res: Response) => {
  try {
    const pathFile = constValue.getPath([
      constValue.fileFolder.uploads,
      req.params.type,
      req.params.name,
    ]);
    res.sendFile(pathFile);
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const remove = (data: any) => {
  const pathRemove = constValue.getPath(data);
  unlink(pathRemove, (err) => {
    if (err) {
      console.log(err);
    }
  });
  return 1;
};
