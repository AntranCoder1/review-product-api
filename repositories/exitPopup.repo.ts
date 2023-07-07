import ExitPopup, {
	IExitPopup,
	ExitPopupObject,
	ExitPopupFilterObject,
} from "../models/exitPopup.model";

export const create = (data: ExitPopupObject) => {
	const newData: IExitPopup = new ExitPopup(data);
	return newData.save();
};

export const getMany = (filter: ExitPopupFilterObject) => {
	return ExitPopup.find(filter).populate("user");
};

export const countList = (filter: ExitPopupObject) => {
	return ExitPopup.countDocuments(filter);
};

export const getOne = (filter: ExitPopupObject) => {
	return ExitPopup.findOne(filter);
};

export const updateOne = (_id: any, data: ExitPopupObject) => {
	return ExitPopup.updateOne({ _id }, data);
};

export const deleteOne = (_id: any) => {
	return ExitPopup.deleteOne({ _id });
};
