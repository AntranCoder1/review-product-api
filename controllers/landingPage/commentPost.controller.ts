import { Request, Response } from "express";
import * as commentPostRepo from "../../repositories/commentPost.repo";

export const findCommentByPost = async (req: Request, res: Response) => {
  try {
    const postId = req.body.postId;
    const offset = req.body.offset;
    const limit = req.body.limit;
    const comment = await commentPostRepo.findAllLanding(postId, offset, limit);

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

    res.status(200).send({ status: "success", comment, count });

    // const count = await commentPostRepo.countComment({ postId });

    // res.status(200).send({ status: "success", comment, count });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    const {
      firstname,
      lastname,
      email,
      message,
      postId,
      isReply,
      parentComment,
    } = req.body;

    console.log("req.body", req.body);

    const data = {
      firstname,
      lastname,
      email,
      message,
      postId,
      isReply,
      parentComment: parentComment !== "" ? parentComment : null,
      fullname: firstname + " " + lastname,
    };
    const newComment = await commentPostRepo.create(data);
    if (newComment) {
      res.status(201).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const likeComment = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const comment: any = await commentPostRepo.findOne(id);
    const updateLike = await commentPostRepo.like(id, Number(comment.like) + 1);
    if (updateLike) {
      res.status(201).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const dislikeComment = async (req: Request, res: Response) => {
  try {
    const id = req.body.id;
    const comment: any = await commentPostRepo.findOne(id);
    const updateDislike = await commentPostRepo.dislike(
      id,
      Number(comment.dislike) + 1
    );
    if (updateDislike) {
      res.status(201).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const findPostComment = async (req: Request, res: Response) => {
  try {
    const findAll = await commentPostRepo.findPostComment({
      subDomain: req.body.subDomain,
      isShow: true,
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

export const findReplyComment = async (req: Request, res: Response) => {
  try {
    const commentId = req.body.commentId;
    const offset = req.body.offset;
    const limit = req.body.limit;

    const findReply = await commentPostRepo.findReplyCommentLanding(
      commentId,
      offset,
      limit
    );

    const count = await commentPostRepo.countCommentLanding({ commentId });

    if (findReply) {
      res.status(200).send({ status: "success", data: findReply, count });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
