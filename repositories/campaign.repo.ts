import Campaign, { ICampaign, CampaignObject } from "../models/campaign.model";

export const create = (data: CampaignObject) => {
	const newData: ICampaign = new Campaign(data);
	return newData.save();
};

export const getMany = (
	filter: CampaignObject,
	offset: number,
	limit: number
) => {
	offset = offset ? offset : 0;
	limit = limit ? limit : 10;
	return Campaign.find(filter).skip(offset).limit(limit);
};

export const countList = (filter: CampaignObject) => {
	return Campaign.countDocuments(filter);
};

export const getOne = (filter: CampaignObject) => {
	return Campaign.findOne(filter);
};

export const updateOne = (_id: any, data: CampaignObject) => {
	return Campaign.updateOne({ _id }, data);
};

export const deleteOne = (_id: any) => {
	return Campaign.deleteOne({ _id });
};
