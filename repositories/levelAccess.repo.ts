import LevelAccess, {
	ILevelAccess,
	LevelAccessObject,
} from "../models/levelAccess.model";
import * as common from "../utils/common.util";

export const getOne = (data: LevelAccessObject) => {
	return LevelAccess.findOne(data, [
		"_id",
		"name",
		"description",
		"permission",
	]);
};

export const getMany = (data: any = null) => {
	return LevelAccess.find(data);
};

export const create = (data: LevelAccessObject) => {
	const newData: ILevelAccess = new LevelAccess(data);
	return newData.save();
};

export const updateOne = (_id: any, data: LevelAccessObject) => {
	return LevelAccess.updateOne({ _id }, data);
};

export const updateMany = (condition: any, data: LevelAccessObject) => {
	return LevelAccess.updateMany(condition, data);
};

export const deleteOne = (_id: any) => {
	return LevelAccess.deleteOne({ _id });
};

export const deleteMany = (data: any) => {
	return LevelAccess.deleteMany(data);
};

export const getAllPermission = async () => {
	const existedUser = await LevelAccess.find();

	let data: any = [];
	for (let item of existedUser) {
		const newItem: any = item;
		data = [...data, ...newItem.permission];
	}

	return false;
};
