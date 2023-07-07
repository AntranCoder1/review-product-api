import { Request, Response } from "express";
import { isConstructorDeclaration } from "typescript";
import * as subDomainRepo from "../../repositories/subDomain.repo";

export const getById = async (req: Request, res: Response) => {
  try {
    const subDomain = await subDomainRepo.getOne({ _id: req.params.id });
    res.status(200).json({ data: subDomain });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getBySubDomain = async (req: Request, res: Response) => {
  try {
    console.log("DOMAINNAME: ", req.params.name);
    const subDomain = await subDomainRepo.getOneBySubDomainName({
      $or: [{ domainUrl: req.params.name }, { subDomainName: req.params.name }],
    });
    res.status(200).json({ data: subDomain });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
