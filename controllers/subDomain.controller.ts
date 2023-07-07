import { Request, Response } from "express";
import * as subDomainRepo from "../repositories/subDomain.repo";
import * as userRepo from "../repositories/user.repo";
import * as postRepo from "../repositories/post.repo";
import * as pageRepo from "../repositories/page.repo";
import * as constValue from "../utils/constValue";
import * as blockRepo from "../repositories/block.repo";

export const getDashboard = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const subDomains = await subDomainRepo.getMany({ user: _user._id });

    const data: any = [];
    for (let subDomain of subDomains) {
      const countActivePost = await postRepo.countList({
        $and: [{ subDomain: subDomain._id }, { publicStatus: true }],
      });

      const countPendingPost = await postRepo.countList({
        $and: [{ subDomain: subDomain._id }, { publicStatus: false }],
      });

      const countPage = await pageRepo.countList({
        subDomain: subDomain._id,
      });

      let itemPush = Object.assign(subDomain.toObject(), {
        countActivePost,
        countPendingPost,
        countPage,
      });

      data.push(itemPush);
    }

    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    if (!_user) {
      return res.status(400).json("Method is not alllow");
    }

    const existedUser: any = await userRepo.getOne({ _id: _user._id });
    if (!existedUser) {
      return res.status(400).json("Method is not allow");
    }

    // const canPermission_UnLimitSubDomain = await userRepo.checkPermission(
    //   existedUser._id,
    //   constValue.permission.UnlimitedSubDomains
    // );
    // if (!canPermission_UnLimitSubDomain) {
    //   const domainOfUser = await subDomainRepo.getMany({ user: _user._id });
    //   if (domainOfUser.length >= 1) {
    //     return res.status(400).json({
    //       message:
    //         "You reached the limit Sub Domain. Please upgrade your level access to have more options!",
    //     });
    //   }
    // }
    // const domainOfUser = await subDomainRepo.getMany({ user: _user._id });
    // if (domainOfUser.length >= existedUser.levelAccess.maxDomain) {
    // 	return res
    // 		.status(400)
    // 		.json({ message: "Your account has been create max domain" });
    // }

    const subDomain = await subDomainRepo.getOne({
      subDomainName: req.body.subDomainName,
    });
    if (subDomain) {
      return res
        .status(400)
        .json({ message: "Sub Domain Name already exists" });
    }

    const newSubDomain = await subDomainRepo.create({
      subDomainName: req.body.subDomainName,
      siteTitle: req.body.siteTitle,
      clickBankId: req.body.clickBankId,
      nicheSite: req.body.nicheSite,
      domainUrl: req.body.domainUrl,
      user: _user._id,
    });
    await pageRepo.createDefault(newSubDomain._id, _user._id);
    res.status(200).json({ data: "Site has been created" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const main = req.body.blockMain;
    const side = req.body.blockSide;

    const data: any = [];

    const removePostSub = await subDomainRepo.updateOne(req.body._id, {
      block: [],
    });

    const removeBlock = await blockRepo.deleteAllBlock({
      subDomain: req.body._id,
    });

    for (const i of main) {
      if (i.mainPostType === "viaPost") {
        if (i.selectedArr && i.selectedArr.length > 0) {
          const post: any = [];
          for (const j of i.selectedArr) {
            let data: any = {
              postId: j._id,
            };
            post.push(data);
          }

          const blockMain = await blockRepo.create({
            category: i.blockTitle,
            post,
            position: "main",
            type: i.mainPostType,
            status: i.statusPost,
            subDomain: req.body._id,
          });

          data.push({ blockId: blockMain._id });
        }
      } else {
        const blockMain = await blockRepo.create({
          category: i.blockTitle,
          position: "main",
          type: i.mainPostType,
          status: i.statusPost,
          subDomain: req.body._id,
        });

        data.push({ blockId: blockMain._id });
      }
    }

    for (const i of side) {
      if (i.sidePostType === "viaPost") {
        if (i.selectedArr && i.selectedArr.length > 0) {
          const post: any = [];
          for (const j of i.selectedArr) {
            let data: any = {
              postId: j._id,
            };
            post.push(data);
          }

          const blockMain = await blockRepo.create({
            category: i.blockTitle,
            post,
            position: "side",
            type: i.sidePostType,
            status: i.statusPost,
            subDomain: req.body._id,
          });

          data.push({ blockId: blockMain._id });
        }
      } else {
        const blockMain = await blockRepo.create({
          category: i.blockTitle,
          position: "side",
          type: i.sidePostType,
          status: i.statusPost,
          subDomain: req.body._id,
        });

        data.push({ blockId: blockMain._id });
      }
    }

    await subDomainRepo.updateOne(req.body._id, {
      layout: req.body.layout,

      siteBio: req.body.siteBio,
      bodyColor: req.body.bodyColor,
      headerColor: req.body.headerColor,
      showSidebar: req.body.showSidebar,
      showFooter: req.body.showFooter,
      showNavigation: req.body.showNavigation,

      facebookLink: req.body.facebookLink,
      pinterestLink: req.body.pinterestLink,
      twitterLink: req.body.twitterLink,
      linkedinLink: req.body.linkedinLink,
      instagramLink: req.body.instagramLink,
      youtubeLink: req.body.youtubeLink,
      vimeoLink: req.body.vimeoLink,

      authorName: req.body.authorName,
      authorDescription: req.body.authorDescription,

      disclaimerHeading: req.body.disclaimerHeading,
      disclaimerDescription: req.body.disclaimerDescription,

      keywords: req.body.keywords,
      description: req.body.description,
      analyticsCode: req.body.analyticsCode,

      logoUrlFull: req.body.logoUrlFull,
      faviconUrlFull: req.body.faviconUrlFull,
      authorImageFull: req.body.authorImageFull,
      buyNowImageFull: req.body.buyNowImageFull,

      block: data,
    });
    res.status(200).json({ data: "Site has been updated" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updateConfig = async (req: Request, res: Response) => {
  try {
    await subDomainRepo.updateOne(req.body._id, {
      // subDomainName: req.body.subDomainName,
      siteTitle: req.body.siteTitle,
      clickBankId: req.body.clickBankId,
      nicheSite: req.body.nicheSite,
      domainUrl: req.body.domainUrl,
    });
    res.status(200).json({ data: "Site has been updated" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    if (!_user) {
      return res.status(400).json({ message: "Method is not allow" });
    }
    const data = await subDomainRepo.getMany({ user: _user._id });
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const data = await subDomainRepo.getOne({ _id: req.params.id });
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const checkSubDomainName = async (req: Request, res: Response) => {
  try {
    const existedSubDomainName = await subDomainRepo.getOne({
      subDomainName: req.body.subDomainName,
    });

    if (existedSubDomainName) {
      return res.status(200).json({ data: -1 });
    }
    res.status(200).json({ data: 1 });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
