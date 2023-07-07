import AdsManagement, {
  IAdsManagement,
  AdsManagementObject,
} from "../models/adsManagement.model";
import mongoose, { Schema, Document } from "mongoose";

export const create = (data: any[], userId: string, subDomain: string) => {
  const arrCallData: {
    image: string;
    link: string;
    status: string;
    position: string;
    user: string;
    subDomain: string;
  }[] = [];
  for (const i of data) {
    const callData = {
      image: i.imageURL,
      link: i.link,
      status: i.status,
      position: i.position,
      user: userId,
      subDomain: subDomain,
    };
    arrCallData.push(callData);
  }

  return AdsManagement.insertMany(arrCallData);
};

export const updateAds = (adsId: string, data: any) => {
  return AdsManagement.updateOne({ _id: adsId }, data);
};

export const updateStatusAds = (adsId: string, status: any) => {
  return AdsManagement.updateOne({ _id: adsId }, { status: status });
};

export const findAll = (subDomain: string, offset: number, limit: number) => {
  return AdsManagement.aggregate([
    {
      $match: {
        subDomain: mongoose.Types.ObjectId(subDomain),
      },
    },
    {
      $lookup: {
        from: "users",
        localField: "user",
        foreignField: "_id",
        as: "user",
      },
    },
    { $skip: offset },
    { $limit: limit },
  ]);
};

export const findAlllanding = (subDomain: string) => {
  return AdsManagement.aggregate([
    {
      $match: {
        subDomain: mongoose.Types.ObjectId(subDomain),
        status: true,
      },
    },
  ]);
};

export const countDocument = (data: any) => {
  let opAnd: any = [];

  if (!!data.subDomain) {
    opAnd.push({ subDomain: mongoose.Types.ObjectId(data.subDomain) });
  }

  return AdsManagement.countDocuments({ $and: opAnd });
};

export const findAdsId = (adsId: string) => {
  return AdsManagement.findOne({ _id: adsId });
};

export const deleteAds = (adsId: string) => {
  return AdsManagement.deleteOne({ _id: adsId });
};
