import { Md5 } from "ts-md5/dist/md5";

const hash = (plain: string) => {
	const md5 = new Md5();
	md5.appendStr(plain);
	return md5.end();
};

export const encryptPassword = (password: string) => {
	const time = new Date().getTime();
	const salt = hash(time.toString());
	const hashPassword = hash(password + salt);
	return { salt, hashPassword };
};

export const comparePassword = (
	hashPassword: string,
	salt: string,
	password: string
) => {
	const toCompareHashPassword = hash(password + salt);
	return hashPassword === toCompareHashPassword;
};

export const randomStr = (length: number) => {
	let result = "";
	const characters =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
};
