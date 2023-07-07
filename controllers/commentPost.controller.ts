import { Request, Response } from "express";
import * as commentPostRepo from "../repositories/commentPost.repo";

export const findPostComment = async (req: Request, res: Response) => {
  try {
    const findAll = await commentPostRepo.findPostComment({
      subDomain: req.body.subDomain,
      offset: req.body.offset,
      limit: req.body.limit,
    });

    const count = await commentPostRepo.countList();

    if (findAll) {
      res.status(200).json({ data: findAll, count: count });
    } else {
      res.status(400).json({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const commentId = req.body.commentId;
    const isShow = req.body.isShow;

    const editShow = await commentPostRepo.editShow(commentId, isShow);

    if (editShow) {
      res.status(200).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const findCommentByPost = async (req: Request, res: Response) => {
  try {
    const postId = req.body.postId;
    const offset = req.body.offset;
    const limit = req.body.limit;
    const comment = await commentPostRepo.findAll(postId, offset, limit);
    const countReply = await commentPostRepo.checkCountReply(postId);
    comment.forEach((ele) => {
      ele.countReply = 0;
      const eleId = ele._id;
      countReply.forEach((eles) => {
        const elesId = eles._id;
        if (JSON.stringify(eleId) === JSON.stringify(elesId)) {
          ele.countReply = eles.count;
        }
      });
    });
    const count = await commentPostRepo.countComment({ postId: postId });

    res.status(200).send({ status: "success", comment, count, countReply });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const searchComment = async (req: Request, res: Response) => {
  try {
    const postId = req.body.postId;
    const search = req.body.search;
    const offset = req.body.offset;
    const limit = req.body.limit;

    const searchComment = await commentPostRepo.searchComment(
      postId,
      search,
      offset,
      limit
    );

    const count = await commentPostRepo.countComment({
      postId: postId,
      search,
    });

    if (searchComment) {
      res.status(200).send({ status: "success", data: searchComment, count });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const findReplyComment = async (req: Request, res: Response) => {
  try {
    const commentId = req.body.commentId;
    const offset = req.body.offset;
    const limit = req.body.limit;

    const findReply = await commentPostRepo.findReplyComment(
      commentId,
      offset,
      limit
    );

    const count = await commentPostRepo.countComment({ commentId });

    if (findReply) {
      res.status(200).send({ status: "success", data: findReply, count });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const searchReplyComment = async (req: Request, res: Response) => {
  try {
    const commentId = req.body.commentId;
    const search = req.body.search;
    const offset = req.body.offset;
    const limit = req.body.limit;

    const searchComment = await commentPostRepo.replyCommentSearch(
      commentId,
      search,
      offset,
      limit
    );

    const count = await commentPostRepo.countComment({
      commentId: commentId,
      search,
    });

    if (searchComment) {
      res.status(200).send({ status: "success", data: searchComment, count });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
