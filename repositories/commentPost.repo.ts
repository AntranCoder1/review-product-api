import CommentPost, {
  ICommentPost,
  CommentPostObject,
} from "../models/commentPost.model";
import mongoose, { Document, Schema, Types } from "mongoose";

export const create = async (data: CommentPostObject) => {
  const newData: ICommentPost = new CommentPost(data);
  return newData.save();
};

export const findAll = (id: any, offset: number, limit: number) => {
  return CommentPost.aggregate([
    {
      $match: {
        postId: mongoose.Types.ObjectId(id),
      },
    },

    { $skip: offset },
    { $limit: limit },
  ]);
};

export const checkCountReply = (id) => {
  return CommentPost.aggregate([
    {
      $match: {
        postId: mongoose.Types.ObjectId(id),
      },
    },
    {
      $group: {
        _id: "$parentComment",
        count: { $sum: 1 },
      },
    },
  ]);
};

export const totalReply = (id: any, offset: number, limit: number) => {
  return CommentPost.aggregate([
    {
      $match: {
        postId: mongoose.Types.ObjectId(id),
      },
    },
    { $skip: offset },
    { $limit: limit },
  ]);
};

export const findAllLanding = (id: any, offset: number, limit: number) => {
  return CommentPost.aggregate([
    {
      $match: {
        postId: mongoose.Types.ObjectId(id),
        show: true,
        parentComment: null,
      },
    },
    { $skip: offset },
    { $limit: limit },
  ]);
};

export const findOne = (id: any) => {
  return CommentPost.findOne({ _id: id });
};

export const like = (commentId: any, like) => {
  return CommentPost.updateOne(
    {
      _id: commentId,
    },
    { like }
  );
};

export const dislike = (commentId: any, dislike) => {
  return CommentPost.updateOne(
    {
      _id: commentId,
    },
    { dislike }
  );
};

export const findPostComment = (data: any) => {
  let isShow = {};
  if (!!data.isShow) {
    isShow = { show: true };
  }

  return CommentPost.aggregate([
    {
      $match: isShow,
    },
    {
      $lookup: {
        from: "posts",
        localField: "postId",
        foreignField: "_id",
        let: { subDomain: "$subDomain" },
        pipeline: [
          {
            $match: { subDomain: mongoose.Types.ObjectId(data.subDomain) },
          },
        ],
        as: "post",
      },
    },
    {
      $unwind: "$post",
    },
    {
      $project: {
        _id: 1,
        message: 1,
        like: 1,
        dislike: 1,
        firstname: 1,
        lastname: 1,
        email: 1,
        show: 1,
        postId: 1,
        post: {
          _id: "$post._id",
          title: "$post.title",
          description: "$post.description",
        },
      },
    },
    { $skip: data.offset },
    { $limit: data.limit },
  ]);
};

export const editShow = (commentId: string, isShow: boolean) => {
  return CommentPost.updateOne({ _id: commentId }, { show: isShow });
};

export const countList = () => {
  return CommentPost.countDocuments({ show: true });
};

export const countComment = (data: any) => {
  let opAnd: any = [];

  if (!!data.search) {
    opAnd.push({
      $or: [
        {
          firstname: { $regex: data.search, $options: "i" },
        },
        {
          lastname: { $regex: data.search, $options: "i" },
        },
        {
          message: { $regex: data.search, $options: "i" },
        },
        {
          fullname: { $regex: data.search, $options: "i" },
        },
      ],
    });
  }

  if (!!data.commentId) {
    opAnd.push({ parentComment: mongoose.Types.ObjectId(data.commentId) });
  }

  if (!!data.postId) {
    opAnd.push({ postId: mongoose.Types.ObjectId(data.postId) });
  }

  return CommentPost.countDocuments({ $and: opAnd });
};

export const countCommentLanding = (data: any) => {
  let opAnd: any = [];

  if (!!data.commentId) {
    opAnd.push({ parentComment: mongoose.Types.ObjectId(data.commentId) });
  }

  opAnd.push({ show: true });

  return CommentPost.countDocuments({ $and: opAnd });
};

export const searchComment = (
  postId: string,
  search: string,
  offset: number,
  limit: number
) => {
  return CommentPost.aggregate([
    {
      $match: {
        postId: mongoose.Types.ObjectId(postId),
        $or: [
          {
            firstname: { $regex: search, $options: "i" },
          },
          {
            lastname: { $regex: search, $options: "i" },
          },
          {
            message: { $regex: search, $options: "i" },
          },
          {
            fullname: { $regex: search, $options: "i" },
          },
        ],
      },
    },
    { $sort: { updatedAt: -1 } },
    { $skip: offset },
    { $limit: limit },
  ]);
};

export const findReplyCommentLanding = (
  commentId: string,
  offset: number,
  limit: number
) => {
  return CommentPost.aggregate([
    {
      $match: {
        parentComment: mongoose.Types.ObjectId(commentId),
        show: true,
      },
    },
    { $skip: offset },
    { $limit: limit },
  ]);
};

export const findReplyComment = (
  commentId: string,
  offset: number,
  limit: number
) => {
  return CommentPost.aggregate([
    {
      $match: {
        parentComment: mongoose.Types.ObjectId(commentId),
      },
    },
    { $skip: offset },
    { $limit: limit },
  ]);
};

export const replyCommentSearch = (
  commentId: string,
  search: string,
  offset: number,
  limit: number
) => {
  return CommentPost.aggregate([
    {
      $match: {
        parentComment: mongoose.Types.ObjectId(commentId),
        $or: [
          {
            firstname: { $regex: search, $options: "i" },
          },
          {
            lastname: { $regex: search, $options: "i" },
          },
          {
            message: { $regex: search, $options: "i" },
          },
          {
            fullname: { $regex: search, $options: "i" },
          },
        ],
      },
    },
    { $sort: { updatedAt: -1 } },
    { $skip: offset },
    { $limit: limit },
  ]);
};
