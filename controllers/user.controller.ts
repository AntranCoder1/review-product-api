import { Request, Response } from "express";
import * as userRepo from "../repositories/user.repo";
import * as levelAccessRepo from "../repositories/levelAccess.repo";

import * as constValue from "../utils/constValue";

import * as common from "../utils/common.util";
import * as jwtUtil from "../utils/jwt.util";

import { v4 as uuidv4 } from "uuid";

import MailUlti from "../utils/email";
import { resolveSoa } from "dns";

export const login = async (req: Request, res: Response) => {
  try {
    const existedUser = await userRepo.getLoginInfo(req.body.email);
    if (!existedUser) {
      return res
        .status(400)
        .json({ message: "Username or password is incorrect" });
    }
    if (
      !common.comparePassword(
        existedUser.password,
        existedUser.salt,
        req.body.password
      )
    ) {
      return res
        .status(400)
        .json({ message: "Username or password is incorrect" });
    }
    const token = jwtUtil.sign({
      _id: existedUser._id,
      firstname: existedUser.firstname,
      lastname: existedUser.lastname,
      email: existedUser.email,
      picture: existedUser.picture,
      phoneNumber: existedUser.phoneNumber,
      levelAccess: existedUser.levelAccess,
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const create = async (req: Request, res: Response) => {
  try {
    let existedEmail = await userRepo.getOne({
      email: req.body.email.toLowerCase(),
    });
    if (existedEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // const existedLevelAccess = await levelAccessRepo.getOne({
    // 	_id: req.body.levelAccess,
    // });
    // if (!existedLevelAccess) {
    // 	return res.status(400).json({ message: "Level Access is not exist" });
    // }

    let existedLevelAccess: any;
    let id = req.body.levelAccess;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      existedLevelAccess = await levelAccessRepo.getOne({
        $or: [{ _id: id }, { _idCustom: id }],
      });
    } else {
      existedLevelAccess = await levelAccessRepo.getOne({ _idCustom: id });
    }
    if (!existedLevelAccess) {
      return res.status(400).json({ message: "Level Access is not exist" });
    }

    let levelAccess = [existedLevelAccess?.id];

    let confirmCode = uuidv4();

    let firstPassword = common.randomStr(8);

    await userRepo.create({
      email: req.body.email.toLowerCase(),
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password,
      levelAccess,
      confirmCode,
      firstPassword,
    });

    MailUlti.sent_confirmations(
      req.body.firstname,
      req.body.lastname,
      req.body.email,
      firstPassword
    );

    res.status(200).json({ data: "User has been created" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const upgradeAccount = async (req: Request, res: Response) => {
  try {
    const existedUser = await userRepo.getLoginInfo(req.body.email);
    if (!existedUser) {
      return res
        .status(400)
        .json({ message: "Email or password is incorrect" });
    }
    if (
      !common.comparePassword(
        existedUser.password,
        existedUser.salt,
        req.body.password
      )
    ) {
      return res
        .status(400)
        .json({ message: "Email or password is incorrect" });
    }

    // const existedLevelAccess = await levelAccessRepo.getOne({
    // 	_id: req.body.levelAccess,
    // });
    // if (!existedLevelAccess) {
    // 	return res.status(400).json({ message: "Level Access is not exist" });
    // }

    let existedLevelAccess: any = null;
    const id = req.body.levelAccess;
    if (id.match(/^[0-9a-fA-F]{24}$/)) {
      existedLevelAccess = await levelAccessRepo.getOne({
        $or: [{ _id: id }, { _idCustom: id }],
      });
    } else {
      existedLevelAccess = await levelAccessRepo.getOne({ _idCustom: id });
    }
    if (!existedLevelAccess) {
      return res.status(400).json({ message: "Level Access is not exist" });
    }

    const existedInUserLevelAccess = existedUser.levelAccess.find(
      (x: any) => x._id.toString() == existedLevelAccess._id.toString()
    );
    if (existedInUserLevelAccess) {
      return res
        .status(400)
        .json({ message: "Level Access already existed in user" });
    }

    const newArrLevelAccess = [
      ...existedUser.levelAccess.map((x: any) => {
        return x._id.toString();
      }),
      // req.body.levelAccess,
      existedLevelAccess._id.toString(),
    ];

    await userRepo.updateOne(existedUser._id, {
      levelAccess: newArrLevelAccess,
    });

    const newUser = await userRepo.getOne({ _id: existedUser._id });
    const token = jwtUtil.sign({
      _id: newUser?._id,
      firstname: newUser?.firstname,
      lastname: newUser?.lastname,
      email: newUser?.email,
      picture: newUser?.picture,
      phoneNumber: newUser?.phoneNumber,
      levelAccess: newUser?.levelAccess,
    });

    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const existedUser = await userRepo.getOne({ _id: req.body.user._id });
    if (!existedUser) {
      return res.status(400).json({ message: "User isn't exists" });
    }

    await userRepo.updateOne(req.body._id, {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      phoneNumber: req.body.phoneNumber,
    });

    const newExistedUser = await userRepo.getOne({ _id: req.body.user._id });
    const token = jwtUtil.sign({
      _id: newExistedUser?._id,
      firstname: newExistedUser?.firstname,
      lastname: newExistedUser?.lastname,
      email: newExistedUser?.email,
      picture: newExistedUser?.picture,
      phoneNumber: newExistedUser?.phoneNumber,
      levelAccess: newExistedUser?.levelAccess,
    });
    res.status(200).json({ data: "User has been updated", token });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updatePassword = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    if (!_user) {
      res.status(200).json({ message: "Method is not allow" });
      return 0;
    }

    const existedUser = await userRepo.getOne({ _id: _user._id });
    if (!existedUser) {
      return res.status(400).json({ message: "User isn't exists" });
    }

    await userRepo.updatePassword(_user._id, req.body.password);
    res.status(200).json({ data: "Update password successfull" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const confirm = async (req: Request, res: Response) => {
  try {
    const existedUser = await userRepo.getOne({ confirmCode: req.body.code });
    if (!existedUser) {
      return res.status(400).json({ message: "Wrong confirm code" });
    }

    await userRepo.updateOne(existedUser._id, {
      active: true,
      confirmCode: "",
    });
    res.status(200).json({ message: "Account has been actived" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const profile = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const existedUser = await userRepo.getOne({ _id: _user._id });
    res.status(200).json({ data: existedUser });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updateAWeber = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    await userRepo.updateOne(_user._id, { aWeber: req.body.aWeber });
    res.status(200).json({ data: "Update Aweber successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updateGetResponse = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    await userRepo.updateOne(_user._id, {
      getResponse: req.body.getResponse,
    });

    res.status(200).json({ data: "Update GetMailchip successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updateMailchimp = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    await userRepo.updateOne(_user._id, { mailchimp: req.body.mailchimp });
    res.status(200).json({ data: "Update Mailchimp successful" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const getFacebookTool = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;
    const data = await userRepo.getFacbookTool(_user._id);
    res.status(200).json({ data });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const updateFacebookTool = async (req: Request, res: Response) => {
  try {
    const _user = req.body.user;

    switch (req.body.type) {
      case constValue.userFacebookTool.FacebookPixel:
        await userRepo.updateOne(_user._id, {
          facebookPixelCode: req.body.facebookPixelCode,
        });
        break;

      case constValue.userFacebookTool.FacebookCommentsPlugin:
        await userRepo.updateOne(_user._id, {
          facebookCommentsSdkCode: req.body.facebookCommentsSdkCode,
          facebookCommentsCodeSnippet: req.body.facebookCommentsCodeSnippet,
        });
        break;

      case constValue.userFacebookTool.FacebookChatWidget:
        await userRepo.updateOne(_user._id, {
          facebookChatWidgetCode: req.body.facebookChatWidgetCode,
        });
        break;
      default:
        return res.status(400).json({ message: "Type is not exists" });
    }

    res.status(200).json({ data: `Update ${req.body.type} successful` });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};

export const forgotPassword = async (req: Request, res: Response) => {
  try {
    const emailExist = await userRepo.getOne({ email: req.body.email });
    if (!emailExist) {
      return res.status(400).json({ message: "Email is not exist" });
    }

    const resetPasswordCode = uuidv4();
    await userRepo.updateOne(emailExist._id, { resetPasswordCode });

    MailUlti.resetpassword(req.body.email, resetPasswordCode);
    res.status(200).json("Send to your email");
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err });
  }
};

export const resetPassword = async (req: Request, res: Response) => {
  try {
    const emailExist = await userRepo.getOne({
      resetPasswordCode: req.body.resetPasswordCode,
    });
    if (!emailExist) {
      return res.status(400).json({ message: "Email or code is not exist" });
    }

    if (emailExist.resetPasswordCode != req.body.resetPasswordCode) {
      return res.status(400).json({ message: "Invalid password reset code" });
    }

    await userRepo.updateOne(emailExist._id, { resetPasswordCode: "" });

    await userRepo.updatePassword(emailExist._id, req.body.password);

    res
      .status(200)
      .json({ status: "OK", message: "Successfully update your password" });
  } catch (err) {
    res.status(400).json({ message: (err as Error).message });
  }
};
