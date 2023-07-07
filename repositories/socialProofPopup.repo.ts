import SocialProofPopup, {
  ISocialProofPopup,
  SocialProofPopupObject,
  SocialProofPopupFilterObject,
} from "../models/socialProofPopup.model";

export const create = (data: SocialProofPopupObject) => {
  const newData: ISocialProofPopup = new SocialProofPopup(data);
  return newData.save();
};

export const getMany = (filter: SocialProofPopupFilterObject) => {
  return SocialProofPopup.find(filter).populate("user");
};

export const countList = (filter: SocialProofPopupObject) => {
  return SocialProofPopup.countDocuments(filter);
};

export const getOne = (filter: SocialProofPopupObject) => {
  return SocialProofPopup.findOne(filter);
};

export const updateOne = (_id: any, data: SocialProofPopupObject) => {
  return SocialProofPopup.updateOne({ _id }, data);
};

export const deleteOne = (_id: any) => {
  return SocialProofPopup.deleteOne({ _id });
};
