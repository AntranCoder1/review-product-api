import mongoose, { Schema, Document } from "mongoose";

export interface IExitPopup extends Document {
	name: string;
	heading: string;
	headingFont: string;
	headingFontSize: string;
	headingColor: string;
	image: string;
	imageUrl: string;
	body: string;
	bodyFont: string;
	bodyFontSize: string;
	bodyColor: string;
	buttonText: string;
	buttonTextColor: string;
	buttonColor: string;
	buttonLink: string;
	user: { type: Schema.Types.ObjectId; ref: "user" };
}

export type ExitPopupObject = {
	_id?: string | undefined;
	name?: string | undefined;
	heading?: string | undefined;
	headingFont?: string | undefined;
	headingFontSize?: string | undefined;
	headingColor?: string | undefined;
	image?: string | undefined;
	imageUrl?: string | undefined;
	body?: string | undefined;
	bodyFont?: string | undefined;
	bodyFontSize?: string | undefined;
	bodyColor?: string | undefined;
	buttonText?: string | undefined;
	buttonTextColor?: string | undefined;
	buttonColor?: string | undefined;
	buttonLink?: string | undefined;

	user?: any | undefined;

	$and?: ExitPopupObject[] | undefined;
	$or?: ExitPopupObject[] | undefined;
};

export type ExitPopupFilterObject = {
	_id?: string | undefined;
	name?: string | { $regex: string } | undefined;
	heading?: string | undefined;
	headingFont?: string | undefined;
	headingFontSize?: string | undefined;
	headingColor?: string | undefined;
	image?: string | undefined;
	imageUrl?: string | undefined;
	body?: string | undefined;
	bodyFont?: string | undefined;
	bodyFontSize?: string | undefined;
	bodyColor?: string | undefined;
	buttonText?: string | undefined;
	buttonTextColor?: string | undefined;
	buttonColor?: string | undefined;
	buttonLink?: string | undefined;

	user?: any | undefined;

	$and?: ExitPopupFilterObject[] | undefined;
	$or?: ExitPopupFilterObject[] | undefined;
};
export const ExitPopupSchema: Schema = new Schema(
	{
		name: { type: Schema.Types.String },
		heading: { type: Schema.Types.String },
		headingFont: { type: Schema.Types.String },
		headingFontSize: { type: Schema.Types.String },
		headingColor: { type: Schema.Types.String },
		image: { type: Schema.Types.String },
		imageUrl: { type: Schema.Types.String },
		body: { type: Schema.Types.String },
		bodyFont: { type: Schema.Types.String },
		bodyFontSize: { type: Schema.Types.String },
		bodyColor: { type: Schema.Types.String },
		buttonText: { type: Schema.Types.String },
		buttonTextColor: { type: Schema.Types.String },
		buttonColor: { type: Schema.Types.String },
		buttonLink: { type: Schema.Types.String },
		user: { type: Schema.Types.ObjectId, ref: "user" },
	},
	{ timestamps: true }
);

export default mongoose.model<IExitPopup>("exit_popup", ExitPopupSchema);
