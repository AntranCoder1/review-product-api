import { Request, Response } from "express";
import * as automationRepo from "../repositories/automation.repo";
import * as apiClickBankController from "./apiClickBank.controller";
import * as postController from "./post.controller";
import * as constValue from "../utils/constValue";
import * as subDomainRepo from "../repositories/subDomain.repo";
import * as postRepo from "../repositories/post.repo";
import * as cronAuto from "../utils/cronAuto";
import * as userRepo from "../repositories/user.repo";

const GoogleNewsRss = require("google-news-rss");
import config from "../config/config";
var request = require("request");
import { extract } from "article-parser";

export const create = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    if (!_user) {
      return res.status(400).json({ message: "Method not allow" });
    }
    const newAutomation = await automationRepo.create({
      keyword: req.body.keyword,
      noOfPosts: req.body.noOfPosts,
      timeRange: req.body.timeRange,
      checkInDescriptionOrContent: req.body.checkInDescriptionOrContent,
      user: _user._id,
      subDomain: req.body.subDomain,
    });

    cronAuto.createAuto(newAutomation._id);
    res.status(200).json({ data: "Create successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const automations = await automationRepo.getMany(
      {
        subDomain: req.body.subDomain,
      },
      req.body.offset,
      req.body.limit
    );
    const totalItem = await automationRepo.countList({
      subDomain: req.body.subDomain,
    });

    res.status(200).json({ data: automations, totalItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    await automationRepo.deleteOne(req.body._id);

    cronAuto.deleteAuto(req.body._id);
    res.status(200).json({ data: "Delete successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const existedAutomation = await automationRepo.getOne({
      _id: req.body._id,
    });
    if (!existedAutomation) {
      return res.status(400).json({ message: "Automation is not exists" });
    }

    await automationRepo.updateOne(req.body._id, {
      status: !existedAutomation.status,
    });

    cronAuto.deleteAuto(req.body._id);
    cronAuto.createAuto(req.body._id);

    res.status(200).json({ data: "Update status successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const startCron = async (req: Request, res: Response) => {
  try {
    const automations = await automationRepo.getAll();
    for (let item of automations) {
      const existedSubDomain = await subDomainRepo.getOne({
        _id: item.subDomain,
      });
      const addTimes = item.noOfPosts ? item.noOfPosts : 1;
      createPostAuto(
        item.keyword,
        item.noOfPosts,
        existedSubDomain,
        item._id,
        addTimes
      );
    }
    res.status(200).json({ data: "res" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const createPostAuto = async (
  keyword: string,
  quantity: number,
  subDomain: any,
  idAutomation: any,
  addTimes: number
) => {
  keyword = keyword ? keyword : "";
  quantity = quantity ? quantity : 1;
  subDomain = subDomain ? subDomain : {};
  request(
    {
      method: "get",
      url: `${config.apiClickBankUrl}/marketplace?c_token=${config.apiClickBankToken}&advanced=true&mainCategoryId=&subCategoryId=&gravityEnabled=false&gravityType=HIGHER&gravityV1=&gravityV2=&futureEarningsEnabled=false&futureEarningsType=HIGHER&futureEarningsV1=&futureEarningsV2=&initialEarningsPerSaleEnabled=false&initialEarningsPerSaleType=HIGHER&initialEarningsPerSaleV1=&initialEarningsPerSaleV2=&averageEarningsPerSaleEnabled=false&averageEarningsPerSaleType=HIGHER&averageEarningsPerSaleV1=&averageEarningsPerSaleV2=&activatedEnabled=false&activatedType=BEFORE&activatedV1=&activatedV2=&productLanguages=&productAttributes=&productTypes=&requireAffiUrl=false&requireSpotlight=false&mobileEnabled=false&whitelistVendor=false&includeKeywords=${keyword}&requireAnalyticsStats=false&resultsPerPage=50&sortField=&_sort=on&sortReverse=true`,
      headers: {
        "content-type": "application/json",
      },
      json: true,
    },
    function (error: any, response: any, body: any) {
      if (error) {
        console.log({ error });
        throw error;
      }
      if (response) {
        const productSearched =
          response.body && response.body.result && response.body.result.details
            ? response.body.result.details
            : [];

        const googleNews = new GoogleNewsRss();
        googleNews.search(keyword).then(async (resp: any) => {
          const postSearched = resp ? resp : [];

          const data: any = [];
          let quantityTmp = quantity;
          while (quantityTmp > 0) {
            let productTmp =
              productSearched[
                Math.floor(Math.random() * productSearched.length)
              ];
            productTmp = productTmp ? productTmp : {};

            let postTmp =
              postSearched[Math.floor(Math.random() * postSearched.length)];
            let postTmpLink = postTmp?.link ? postTmp.link : "";
            let postDetailTmp = await extract(postTmpLink);

            let countTmp = 20;
            while (!postDetailTmp && countTmp > 0) {
              postTmpLink = postTmp?.link ? postTmp.link : "";
              postTmp =
                postSearched[Math.floor(Math.random() * postSearched.length)];
              postDetailTmp = await extract(postTmpLink);

              countTmp--;
            }

            const buyNowLink = `http://${subDomain.clickBankId}.${productTmp.site}.hop.clickbank.net`;
            const itemPush = {
              title: postDetailTmp.title,
              slug: constValue.rawing2Slug(postDetailTmp.title!),
              description: postDetailTmp.description,
              content: postDetailTmp.content,
              publicStatus: true,
              feedSource: postDetailTmp.url,
              postThumbnailLink: postDetailTmp.image,
              productTitle: productTmp.title,
              productDescription: productTmp.description,
              buyNowLink: buyNowLink,
              buyNowImageLink: subDomain.buyNowImageFull,
              subDomain: subDomain._id,
              user: subDomain.user,
            };
            data.push(itemPush);
            quantityTmp--;
          }
          const insertRes = await postRepo.insertMany(data);
          if (insertRes) {
            console.log("+++++++++++++");
            automationRepo
              .updateOne(idAutomation, {
                lastAdded: new Date(),
                $inc: { times: addTimes },
              })
              .then((res) => {});
          } else {
            console.log("--------------");
          }
        });
      }
    }
  );
};
