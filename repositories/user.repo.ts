import User, { IUser, UserObject } from "../models/user.model";
import * as common from "../utils/common.util";

export const getOne = (data: any) => {
	return User.findOne(data, { password: 0, salt: 0 }).populate("levelAccess");
};

export const getFacbookTool = (user: any) => {
	console.log(user);
	return User.findOne({ _id: user }, [
		"_id",
		"facebookPixelCode",
		"facebookCommentsSdkCode",
		"facebookCommentsCodeSnippet",
		"facebookChatWidgetCode",
	]);
};

export const getLoginInfo = (email: string) => {
	return User.findOne({ email }).populate("levelAccess", [
		"_id",
		"name",
		"description",
		"permission",
	]);
};

export const getMany = (data: any) => {
	return User.find(data);
};

export const create = (data: any) => {
	const password = common.encryptPassword(data.password);

	data.password = password.hashPassword.toString();
	data.salt = password.salt.toString();

	let newData: IUser = new User(data);
	return newData.save();
};

export const updatePassword = (id: any, password: string) => {
	const passwordEncrypt = common.encryptPassword(password);

	return User.updateOne(
		{ _id: id },
		{
			password: passwordEncrypt.hashPassword.toString(),
			salt: passwordEncrypt.salt.toString(),
		}
	);
};

export const updateOne = (_id: any, data: UserObject) => {
	return User.updateOne({ _id }, data);
};

export const updateMany = (condition: any, data: UserObject) => {
	return User.updateMany(condition, data);
};

export const deleteOne = (_id: any) => {
	return User.deleteOne({ _id });
};

export const deleteMany = (data: any) => {
	return User.deleteMany(data);
};

export const getAllPermission = async (user: any) => {
	const existedUser = await User.findOne({ _id: user }, [
		"levelAccess",
	]).populate("levelAccess");

	if (!existedUser) {
		return [];
	}

	let data: any = [];
	for (let item of existedUser.levelAccess) {
		const newItem: any = item;
		data = [...data, ...newItem.permission];
	}
	return data;
};

export const checkPermission = async (user: any, permission: string) => {
	console.log(permission);
	const existedUser = await User.findOne({ _id: user }, [
		"levelAccess",
	]).populate("levelAccess");

	if (!existedUser) {
		return [];
	}

	let data: any = [];
	for (let item of existedUser.levelAccess) {
		const newItem: any = item;
		data = [...data, ...newItem.permission];
	}

	const canPermission = data.find((x: any) => x == permission);
	return canPermission ? true : false;
};
