import NicheSite, {
	INicheSite,
	NicheSiteObject,
} from "../models/nicheSite.model";

export const create = (data: any) => {
	const newData: INicheSite = new NicheSite(data);
	return newData.save();
};

export const getMany = (data: any = null) => {
	return NicheSite.find();
};
