import mongoose, { Schema, Document } from "mongoose";

export interface ISocialProofPopup extends Document {
	image: string;
	imageUrl: string;
	title: string;
	content: string;
	link: string;
	displayTime: number;
	timeDifference: number;
	user: { type: Schema.Types.ObjectId; ref: "user" };
}

export type SocialProofPopupObject = {
	_id?: any | undefined;
	image?: string | undefined;
	imageUrl?: string | undefined;
	title?: string | undefined;
	content?: string | undefined;
	link?: string | undefined;
	displayTime?: number | undefined;
	timeDifference?: number | undefined;
	user?: any | undefined | undefined;

	$and?: SocialProofPopupObject[] | undefined;
	$or?: SocialProofPopupObject[] | undefined;
};

export type SocialProofPopupFilterObject = {
	_id?: any | undefined;
	image?: string | undefined;
	imageUrl?: string | undefined;
	title?: string | { $regex: string } | undefined;
	content?: string | undefined;
	link?: string | undefined;
	displayTime?: number | undefined;
	timeDifference?: number | undefined;

	user?: any | undefined;

	$and?: SocialProofPopupFilterObject[] | undefined;
	$or?: SocialProofPopupFilterObject[] | undefined;
};
export const SocialProofPopupSchema: Schema = new Schema(
	{
		image: { type: Schema.Types.String },
		imageUrl: { type: Schema.Types.String },
		title: { type: Schema.Types.String },
		content: { type: Schema.Types.String },
		link: { type: Schema.Types.String },
		displayTime: { type: Schema.Types.Number },
		timeDifference: { type: Schema.Types.Number },
		user: { type: Schema.Types.ObjectId, ref: "user" },
	},
	{ timestamps: true }
);

export default mongoose.model<ISocialProofPopup>(
	"social_proof_popup",
	SocialProofPopupSchema
);
