import { Request, Response } from "express";
import * as postRepo from "../repositories/post.repo";
import * as categoryRepo from "../repositories/Category.repo";
import * as constValue from "../utils/constValue";
const GoogleNewsRss = require("google-news-rss");
import { extract } from "article-parser";
import axios from "axios";
export const parseArticleByLink = async (req: Request, res: Response) => {
  const url = req.body.url;
  const text: any = await axios.get(url);
  let first = text.indexOf("data-n-au=");
  first += 11;
  let sec = text.indexOf("data-n-zris");
  sec -= 2;
  const link = text.substring(first, sec);
  try {
    const article = await extract(link);
    res.status(200).json(article);
  } catch (err) {
    console.trace(err);
  }
  // const url = req.body.url;
  // request('url', function (error, response, body) {
  // console.error('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // // console.log('body:', body); // Print the HTML for the Google homepage.
  // 	const text = body;
  // 	try {
  // 		const article = await extract(link);
  // 		res.status(200).json(article);
  // 	} catch (err) {
  // 		console.trace(err);
  // 	}
  // });
};
export const searchByKeyword = async (req: Request, res: Response) => {
  const keyword = req.body.keyword;
  const googleNews = new GoogleNewsRss();

  googleNews.search(keyword).then((resp: any) => {
    res.status(200).json(resp);
  });
};

export const getByFeedUrl = async (req: Request, res: Response) => {
  let Parser = require("rss-parser");
  let parser = new Parser();
  let feed = await parser.parseURL(req.body.url);

  console.log(feed.title);
  res.status(200).json({ data: feed.items });
};

export const searchByKeywordAuto = async (keyword: string) => {
  const googleNews = new GoogleNewsRss();

  googleNews.search(keyword).then((resp: any) => {
    return resp;
  });
};

export const create = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const cat = req.body.catId;

    const category: any = [];

    for (const i of cat) {
      let data: any = {
        catId: i,
      };
      category.push(data);
    }

    // const slug = req.body.title.replace(/ /g, "-") + Date.now();
    const slug = constValue.rawing2Slug(req.body.title);
    const newPost = await postRepo.create({
      title: req.body.title,
      slug,
      description: req.body.description,
      content: req.body.content,
      publicStatus: req.body.publicStatus,
      feedSource: req.body.feedSource,
      productTitle: req.body.productTitle,
      productDescription: req.body.productDescription,
      buyNowLink: req.body.buyNowLink,
      user: _user._id,
      subDomain: req.body.subDomain,
      buyNowImageLink: req.body.buyNowImageLink,
      postThumbnailLink: req.body.postThumbnailLink,
      statusPopup: req.body.status,
      titlePopup: req.body.titlePopup,
      descriptionPopup: req.body.descriptionPopup,
      linkBuyPopup: req.body.linkBuyPopup,
      timePopup: req.body.time,
      buttonTextPopup: req.body.buttonText,
      popupImage: req.body.popupImage,
      popupImageLink: req.body.popupImageLink,
      updatedAt: new Date(),
      keywords: req.body.keywords,
      category_id: category,
    });

    res.status(200).json({ data: "Post has been created", _id: newPost._id });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    // const existedPost: any = await postRepo.getOnes({
    //   $or: [{ _id: req.params.id }, { slug: req.params.id }],
    // });
    const existedPost: any = await postRepo.getOnes({
      _id: req.params.id,
      slug: req.params.id,
    });
    res.status(200).json({ data: existedPost });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const existedPost = await postRepo.getOne({ _id: req.body._id });
    if (!existedPost) {
      return res.status(400).json({ message: "Post is not exists" });
    }

    const existsSlug = await postRepo.getOne({
      $and: [{ subDomain: existedPost.subDomain }, { slug: req.body.slug }],
    });
    if (existsSlug && existsSlug._id.toString() !== req.body._id) {
      return res.status(400).json({ message: "Slug already exists" });
    }

    const cat = req.body.catId;

    const category: any = [];

    for (const i of cat) {
      let data: any = {
        catId: i,
      };
      category.push(data);
    }

    await postRepo.updateOne(req.body._id, {
      title: req.body.title,
      slug: req.body.slug,
      description: req.body.description,
      content: req.body.content,
      publicStatus: req.body.publicStatus,
      feedSource: req.body.feedSource,
      productTitle: req.body.productTitle,
      productDescription: req.body.productDescription,
      buyNowLink: req.body.buyNowLink,
      buyNowImageLink: req.body.buyNowImageLink,
      postThumbnailLink: req.body.postThumbnailLink,
      statusPopup: req.body.status,
      titlePopup: req.body.titlePopup,
      descriptionPopup: req.body.descriptionPopup,
      linkBuyPopup: req.body.linkBuyPopup,
      timePopup: req.body.time,
      buttonTextPopup: req.body.buttonText,
      popupImage: req.body.popupImage,
      popupImageLink: req.body.popupImageLink,
      updatedAt: new Date(),
      keywords: req.body.keywords,

      category_id: category,
    });

    res.status(200).json({ data: "Post has been updated" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getList = async (req: Request, res: Response) => {
  try {
    const title = req.body.title;
    const catId = req.body.catId;
    const posts = await postRepo.getMany(
      { subDomain: req.body.subDomain, title, category_id: catId },
      req.body.offset,
      req.body.limit
    );

    const totalItem = await postRepo.countList({
      subDomain: req.body.subDomain,
      title,
      category_id: catId,
    });
    res.status(200).json({ data: posts, totalItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getPostResearch = async (req: Request, res: Response) => {
  try {
    let data;
    let totalItem;
    if (req.body.checkInDescriptionOrcontent) {
      data = await postRepo.getMany(
        {
          productTitle: req.body.productTitle,
          search: req.body.keyword,
          // $and: [
          //   { productTitle: req.body.productTitle },
          //   {
          //     $or: [
          //       { title: { $regex: ".*" + req.body.keyword + ".*" } },
          //       { content: { $regex: ".*" + req.body.keyword + ".*" } },
          //       { description: { $regex: ".*" + req.body.keyword + ".*" } },
          //     ],
          //   },
          // ],
        },
        req.body.offset,
        req.body.limit
      );
      totalItem = await postRepo.countList({
        productTitle: req.body.productTitle,
        search: req.body.keyword,
        // $and: [
        //   { productTitle: req.body.productTitle },
        //   {
        //     $or: [
        //       { title: { $regex: ".*" + req.body.keyword + ".*" } },
        //       { content: { $regex: ".*" + req.body.keyword + ".*" } },
        //       { description: { $regex: ".*" + req.body.keyword + ".*" } },
        //     ],
        //   },
        // ],
      });
    } else {
      data = await postRepo.getMany(
        {
          productTitle: req.body.productTitle,
          title: req.body.keyword,
          // $and: [
          //   { productTitle: req.body.productTitle },
          //   { title: { $regex: ".*" + req.body.keyword + ".*" } },
          // ],
        },
        req.body.offset,
        req.body.limit
      );
      totalItem = await postRepo.countList({
        productTitle: req.body.productTitle,
        title: req.body.keyword,
        // $and: [
        //   { productTitle: req.body.productTitle },
        //   { title: { $regex: ".*" + req.body.keyword + ".*" } },
        // ],
      });
    }

    res.status(200).json({ data, totalItem });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const deletePost = async (req: Request, res: Response) => {
  try {
    await postRepo.deleteOne(req.params.id);
    res.status(200).json({ data: "Post has been deleted" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const existedPost = await postRepo.getOne({ _id: req.params.id });
    if (!existedPost) {
      return res.status(400).json({ message: "Post is not exists" });
    }
    console.log(existedPost.publicStatus);
    await postRepo.updateOne(req.params.id, {
      publicStatus: !existedPost.publicStatus,
    });

    res.status(200).json({ data: "Update status successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const searchPost = async (req: Request, res: Response) => {
  try {
    const title = req.body.title;
    const category = req.body.category;

    if (title === "" && category === null) {
      const posts = await postRepo.getMany(
        { subDomain: req.body.subDomain },
        req.body.offset,
        req.body.limit
      );
      const totalItem = await postRepo.countList({
        subDomain: req.body.subDomain,
      });
      res.status(200).json({ data: posts, totalItem });
    } else if (title !== "" && category === null) {
      const search = await postRepo.getSearch(title);

      if (search) {
        res.status(200).json({ data: search });
      } else {
        res.status(400).json({ status: "failed" });
      }
    } else if (title === "" && category !== null) {
      const filterPostWithCategory = await postRepo.getPostWithCategory(
        category.id,
        req.body.offset,
        req.body.limit
      );

      if (filterPostWithCategory) {
        res.status(200).json({ data: filterPostWithCategory });
      } else {
        res.status(400).json({ status: "failed" });
      }
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getPostComment = async (req: Request, res: Response) => {
  try {
    const post = await postRepo.getPostComment(
      req.body.subDomain,
      req.body.offset,
      req.body.limit
    );
    const count = await postRepo.countPostComment({
      subDomain: req.body.subDomain,
    });

    if (post) {
      res.status(200).json({ data: post, count: count });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getAllPost = async (req: Request, res: Response) => {
  try {
    const findAll = await postRepo.finAllPost(req.body.subDomain);

    if (findAll) {
      res.status(200).send({ status: "success", data: findAll });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
