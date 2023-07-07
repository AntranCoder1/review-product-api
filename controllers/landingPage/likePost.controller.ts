import { Request, Response } from "express";
import * as likePostRepo from "../../repositories/likePost.repo";

export const create = async (req: Request, res: Response) => {
  try {
    const uuId = req.body.uuId;
    const postId = req.body.postId;

    const finduuId = await likePostRepo.findUuId(postId, uuId);

    if (finduuId) {
      return res.status(201).send({ status: "success", liked: true });
    }
    const data = {
      uuId,
      postId,
    };
    const newLike = await likePostRepo.create(data);
    const post: any = await likePostRepo.getPost(postId);
    const updateLike = await likePostRepo.updateLike(
      postId,
      Number(post.like) + 1
    );
    console.log("updateLike", updateLike);
    console.log("newLike", newLike);
    if (updateLike) {
      res.status(201).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
