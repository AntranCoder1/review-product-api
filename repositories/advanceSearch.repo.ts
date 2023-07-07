import AdvanceSearch, {
	IAdvanceSearch,
	AdvanceSearchObject,
} from "../models/advanceSearch.model";

export const create = (data: AdvanceSearchObject) => {
	const newData: IAdvanceSearch = new AdvanceSearch(data);
	return newData.save();
};

export const getOne = (filter: AdvanceSearchObject) => {
	return AdvanceSearch.findOne(filter);
};

export const updateOne = (_id: any, data: AdvanceSearchObject) => {
	return AdvanceSearch.updateOne({ _id }, data);
};
