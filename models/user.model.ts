import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
	firstname: string;
	lastname: string;
	email: string;
	password: string;
	salt: string;
	phoneNumber: string;
	picture: string;
	resetPasswordCode: string;
	confirmCode: string;
	active: boolean;
	customerId: string;
	firstTimeLogin: boolean;
	firstPassword: string;
	aWeber: any;
	getResponse: string;
	mailchimp: string;

	facebookPixelCode: string;
	facebookCommentsSdkCode: string;
	facebookCommentsCodeSnippet: string;
	facebookChatWidgetCode: string;

	levelAccess: [{ type: Schema.Types.ObjectId; ref: "level_access" }];
}

export type UserObject = {
	_id?: any | undefined;
	firstname?: string | undefined;
	lastname?: string | undefined;
	email?: string | undefined;
	password?: string | undefined;
	salt?: string | undefined;
	phoneNumber?: string | undefined;
	picture?: string | undefined;
	resetPasswordCode?: string | undefined;
	confirmCode?: string | undefined;
	active?: boolean | undefined;
	customerId?: string | undefined;
	firstTimeLogin?: boolean | undefined;
	firstPassword?: string | undefined;
	aWeber?: any | undefined;
	getResponse?: string | undefined;
	mailchimp?: string | undefined;
	levelAccess?: any[] | undefined;

	facebookPixelCode?: string | undefined;
	facebookCommentsSdkCode?: string | undefined;
	facebookCommentsCodeSnippet?: string | undefined;
	facebookChatWidgetCode?: string | undefined;

	$and?: UserObject[] | undefined;
	$or?: UserObject[] | undefined;
};

const UserSchema: Schema = new Schema(
	{
		firstname: { type: String },
		lastname: { type: String },
		email: { type: String, unique: true, required: true, index: true },
		password: { type: String },
		salt: { type: String },
		phoneNumber: { type: String },
		picture: {
			type: Schema.Types.String,
			default: "uploads/images/no-avatar.png",
		},
		resetPasswordCode: { string: String },
		confirmCode: { type: Schema.Types.String },
		active: { type: Schema.Types.Boolean, default: true },
		customerId: { type: Schema.Types.String },
		firstTimeLogin: { type: Schema.Types.Boolean, default: true },
		firstPassword: { type: Schema.Types.String },
		aWeber: { type: Schema.Types.Mixed },
		getResponse: { type: Schema.Types.String },
		mailchimp: { type: Schema.Types.String },
		levelAccess: [{ type: Schema.Types.ObjectId, ref: "level_access" }],

		facebookPixelCode: { type: Schema.Types.String },
		facebookCommentsSdkCode: { type: Schema.Types.String },
		facebookCommentsCodeSnippet: { type: Schema.Types.String },
		facebookChatWidgetCode: { type: Schema.Types.String },
	},
	{ timestamps: true }
);

export default mongoose.model<IUser>("user", UserSchema);
