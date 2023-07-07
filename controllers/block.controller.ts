import { Request, Response } from "express";
import * as blockRepo from "../repositories/block.repo";
import * as subDomainRepo from "../repositories/subDomain.repo";

export const getList = async (req: Request, res: Response) => {
  try {
    const subDomain = req.body.subDomain;

    const getBlocks = await blockRepo.findAll({ subDomain });

    if (getBlocks) {
      res.status(200).send({ status: "success", data: getBlocks });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getId = async (req: Request, res: Response) => {
  try {
    const blockId = req.body.blockId;

    const getBlockId = await blockRepo.getBlockId(blockId);

    if (getBlockId) {
      res.status(200).send({ status: "success", data: getBlockId });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const editBlock = async (req: Request, res: Response) => {
  try {
    const blockId = req.body.blockId;
    const category = req.body.category;
    const postArr = req.body.postArr;
    const position = req.body.position;
    const status = req.body.status;
    const type = req.body.type;

    const post: any = [];

    if (postArr && postArr.length > 0) {
      for (const i of postArr) {
        let data: any = {
          postId: i._id,
        };
        post.push(data);
      }
    }

    const updateBlock = await blockRepo.updateBlock(blockId, {
      category,
      post,
      position,
      type,
      status,
    });

    if (updateBlock) {
      res.status(200).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const deleteBlock = async (req: Request, res: Response) => {
  try {
    const blockId = req.body.blockId;
    const subDomain = req.body.subDomain;

    const removeblock = await blockRepo.deleteBlock(blockId);

    const removeBlockSub: any = await subDomainRepo.getOne({ _id: subDomain });

    const filterBlock = removeBlockSub.block.filter(
      (item) => JSON.stringify(item.blockId) !== JSON.stringify(blockId)
    );

    const updateSub = await subDomainRepo.updateOne(subDomain, {
      block: filterBlock,
    });

    if (removeblock) {
      res.status(200).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const updateStatus = async (req: Request, res: Response) => {
  try {
    const blockId = req.body.blockId;
    const status = req.body.status;

    const updateStatus = await blockRepo.updateBlock(blockId, {
      status: status,
    });

    if (updateStatus) {
      res.status(200).send({ status: "success" });
    } else {
      res.status(400).send({ status: "failed" });
    }
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};
