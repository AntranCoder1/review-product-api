import mongoose, { Document, Schema, Types } from "mongoose";
import Post, {
  IPost,
  PostObject,
  PostFilterObject,
} from "../models/post.model";
import * as userRepo from "./user.repo";
import * as constValue from "../utils/constValue";

export const getOne = (data: PostObject) => {
  return Post.findOne(data);
};

export const getSlug = (data: any) => {
  return Post.aggregate([
    {
      $match: { category_id: { $elemMatch: { catId: data.categoryId } } },
    },
    {
      $lookup: {
        from: "categories",
        localField: "category_id.catId",
        foreignField: "_id",
        as: "category_detail",
      },
    },
    {
      $project: {
        _id: 1,
        title: 1,
        slug: 1,
        description: 1,
        publicStatus: 1,
        postThumbnailLink: 1,
        subDomain: 1,
        createdAt: 1,
        updatedAt: 1,
        category_detail: 1,
        like: 1,
      },
    },
    { $skip: data.offset },
    { $limit: data.limit },
  ]);
};

export const getOnes = (data: PostObject) => {
  let aggregateQuerry: any = [];

  aggregateQuerry.push({
    $match: {
      $or: [{ _id: mongoose.Types.ObjectId(data._id) }, { slug: data.slug }],
    },
  });

  aggregateQuerry.push({
    $lookup: {
      from: "categories",
      localField: "category_id.catId",
      foreignField: "_id",
      as: "category_detail",
    },
  });
  return Post.aggregate(aggregateQuerry);
};

export const getMany = (data, offset: number, limit: number) => {
  console.log(data);

  if (!offset) {
    offset = 0;
  }
  if (!limit) {
    limit = 10;
  }
  let opAnd: any = [];

  opAnd.push(
    { $eq: ["$subDomain", mongoose.Types.ObjectId(data.subDomain)] },
    { $eq: ["$publicStatus", true] }
  );

  if (!!data.endDate && !!data.startDate) {
    opAnd.push({ createdAt: { $lte: new Date(data.endDate) } });
    opAnd.push({ createdAt: { $lte: new Date(data.startDate) } });
  }
  let aggregateQuerry: any = [];
  aggregateQuerry = [
    {
      $match: {
        $expr: { $and: opAnd },
      },
    },
  ];
  if (!!data.title) {
    aggregateQuerry.push({
      $match: {
        $or: [
          {
            title: { $regex: data.title, $options: "i" },
          },
          {
            content: { $regex: data.title, $options: "i" },
          },
          {
            description: { $regex: data.title, $options: "i" },
          },
        ],
      },
    });
  }
  if (!!data.category_id) {
    aggregateQuerry.push({
      $addFields: {
        hasCat: {
          $reduce: {
            input: {
              $filter: {
                input: "$category_id",
                as: "cat",
                cond: {
                  $and: [
                    {
                      $eq: [
                        "$$cat.catId",
                        mongoose.Types.ObjectId(data.category_id),
                      ],
                    },
                  ],
                },
              },
            },
            initialValue: 0,
            in: { $add: ["$$value", 1] },
          },
        },
      },
    });
    aggregateQuerry.push({ $match: { $expr: { $eq: ["$hasCat", 1] } } });
  }

  aggregateQuerry.push(
    { $skip: offset },
    { $limit: limit },
    { $sort: { createdAt: -1 } }
  );

  aggregateQuerry.push(
    {
      $lookup: {
        from: "categories",
        localField: "category_id.catId",
        foreignField: "_id",
        as: "category_detail",
      },
    },
    {
      $lookup: {
        from: "comment_posts",
        localField: "_id",
        foreignField: "postId",
        as: "comment",
      },
    },
    {
      $project: {
        _id: 1,
        title: 1,
        slug: 1,
        description: 1,
        publicStatus: 1,
        postThumbnailLink: 1,
        subDomain: 1,
        createdAt: 1,
        updatedAt: 1,
        category_detail: 1,
        view: 1,
        comment: 1,
        like: 1,
      },
    }
  );
  return Post.aggregate(aggregateQuerry);

  // return Post.find({ $and: opAnd }, [
  //   "_id",
  //   "title",
  //   "slug",
  //   "description",
  //   "publicStatus",
  //   "postThumbnailLink",
  //   "subDomain",
  //   "createdAt",
  //   "category_id",
  // ])
  //   .populate({
  //     path: "category_id",
  //     populate: {
  //       path: "catId",
  //       model: "category",
  //     },
  //   })
  //   .skip(offset)
  //   .limit(limit)
  //   .sort([["updatedAt", "desc"]]);
};

export const countList = (data) => {
  let opAnd: any = [];

  opAnd.push(
    { subDomain: mongoose.Types.ObjectId(data.subDomain) },
    { publicStatus: true }
  );
  if (!!data.title) {
    opAnd.push({
      $or: [
        {
          title: {
            $regex: ".*" + (data.title ? data.title : "") + ".*",
          },
        },
        {
          content: {
            $regex: ".*" + (data.title ? data.title : "") + ".*",
          },
        },
        {
          description: {
            $regex: ".*" + (data.title ? data.title : "") + ".*",
          },
        },
      ],
    });
  }
  if (!!data.category_id) {
    // opAnd.push({ category_id: data.category_id });
    opAnd.push({ category_id: { $elemMatch: { catId: data.category_id } } });
  }
  if (!!data.endDate && !!data.startDate) {
    opAnd.push({ createdAt: { $lte: new Date(data.endDate) } });
    opAnd.push({ createdAt: { $lte: new Date(data.startDate) } });
  }
  return Post.countDocuments({ $and: opAnd });
};

export const countPostBySlugCat = (data) => {
  return Post.countDocuments({
    category_id: { $elemMatch: { catId: data.category_id } },
  });
};

export const countPostComment = (data) => {
  return Post.countDocuments({
    subDomain: data.subDomain,
  });
};

export const create = async (data: PostObject) => {
  // var date = new Date();
  // var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  // var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  // const canPermission_UnlimitPost = await userRepo.checkPermission(
  // 	data.user,
  // 	constValue.permission.PromoteUnlimitedProductsPerMonth
  // );

  // if (!canPermission_UnlimitPost) {
  // 	const existedPosts = await Post.countDocuments({
  // 		$and: [
  // 			{ createdAt: { $gte: firstDay } },
  // 			{ createdAt: { $lte: lastDay } },
  // 			{ subDomain: data.subDomain },
  // 		],
  // 	});

  // 	if (existedPosts >= 10) {
  // 		throw {
  // 			message:
  // 				"You reached the limit posts of the month. Please upgrade your level access to have more options!",
  // 		};
  // 	}
  // }

  const newData: IPost = new Post(data);
  return newData.save();
};

export const updateOne = (_id: any, data: PostObject) => {
  return Post.updateOne({ _id }, data);
};

export const updateMany = (condition: any, data: PostObject) => {
  return Post.updateMany(condition, data);
};

export const deleteOne = (_id: any) => {
  return Post.deleteOne({ _id });
};

export const deleteMany = (data: PostObject) => {
  return Post.deleteMany(data);
};

export const insertMany = async (data: any) => {
  var date = new Date();
  var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

  const canPermission_UnlimitPost = await userRepo.checkPermission(
    data[0]?.user,
    constValue.permission.PromoteUnlimitedProductsPerMonth
  );

  if (!canPermission_UnlimitPost) {
    const existedPosts = await Post.countDocuments({
      $and: [
        { createdAt: { $gte: firstDay } },
        { createdAt: { $lte: lastDay } },
        { subDomain: data[0]?.subDomain },
      ],
    });
    console.log(existedPosts);

    if (existedPosts >= 10) {
      return false;
    }
  }
  return Post.insertMany(data);
};

export const getNextPost = (subDomain: any, _id: any) => {
  return Post.find(
    {
      $and: [{ _id: { $gt: _id } }, { publicStatus: true }, { subDomain }],
    },
    ["_id", "title", "slug"]
  )
    .sort({ _id: 1 })
    .limit(1);
};

export const getPreviousPost = (subDomain: any, _id: any) => {
  return Post.find(
    {
      $and: [{ _id: { $lt: _id } }, { publicStatus: true }, { subDomain }],
    },
    ["_id", "title", "slug"]
  )
    .sort({ _id: -1 })
    .limit(1);
};

export const getSearch = (title: string) => {
  return Post.find(
    {
      title: { $regex: title, $options: "i" },
    },
    [
      "_id",
      "title",
      "slug",
      "description",
      "publicStatus",
      "postThumbnailLink",
      "subDomain",
      "createdAt",
      "updatedAt",
    ]
  ).sort({ updatedAt: -1 });
};

export const updateCategory = (postId: any, categoryId: any) => {
  return Post.updateOne({ _id: postId }, { category_id: categoryId });
};

export const getPostWithCategory = (
  category: any,
  offset: number,
  limit: number
) => {
  if (!offset) {
    offset = 0;
  }
  if (!limit) {
    limit = 10;
  }
  return Post.find(
    {
      category_id: category,
    },
    [
      "_id",
      "title",
      "slug",
      "description",
      "publicStatus",
      "postThumbnailLink",
      "subDomain",
      "createdAt",
    ]
  )
    .skip(offset)
    .limit(limit)
    .sort([["updatedAt", "desc"]]);
};

export const findCatInPost = (catId: string) => {
  return Post.aggregate([
    {
      $match: { $expr: {} },
    },
    {
      $addFields: {
        hasCat: {
          $reduce: {
            input: {
              $filter: {
                input: "$category_id",
                as: "cat",
                cond: {
                  $and: [
                    {
                      $eq: ["$$cat.catId", mongoose.Types.ObjectId(catId)],
                    },
                  ],
                },
              },
            },
            initialValue: 0,
            in: { $add: ["$$value", 1] },
          },
        },
      },
    },
    {
      $match: { $expr: { $eq: ["$hasCat", 1] } },
    },
  ]);
};

export const getPostComment = (
  subDomain: string,
  offset: number,
  limit: number
) => {
  return Post.aggregate([
    {
      $match: {
        subDomain: mongoose.Types.ObjectId(subDomain),
      },
    },
    {
      $lookup: {
        from: "comment_posts",
        localField: "_id",
        foreignField: "postId",
        let: { show: "$show" },
        pipeline: [
          {
            $match: {
              show: true,
            },
          },
        ],
        as: "comment",
      },
    },
    {
      $project: {
        _id: 1,
        title: 1,
        slug: 1,
        description: 1,
        publicStatus: 1,
        postThumbnailLink: 1,
        subDomain: 1,
        createdAt: 1,
        updatedAt: 1,
        comment: 1,
      },
    },
    { $skip: offset },
    { $limit: limit },
  ]);
};

export const finAllPost = (subDomain: string) => {
  return Post.aggregate([
    {
      $match: {
        subDomain: mongoose.Types.ObjectId(subDomain),
      },
    },
    {
      $project: {
        _id: 1,
        title: 1,
      },
    },
  ]);
};
