import mongoose, { Document, Schema } from "mongoose";

export interface ITutorial extends Document {
	title: string;
	url: string;
	urlPdf: string;
}

export type TutorialObject = {
	title?: string | undefined;
	url?: string | undefined;
	urlPdf?: string | undefined;
};

const TutorialSchema: Schema = new Schema(
	{
		title: { type: Schema.Types.String },
		url: { type: Schema.Types.String },
		urlPdf: { type: Schema.Types.String },
	},
	{ timestamps: true }
);

export default mongoose.model<ITutorial>("tutorial", TutorialSchema);
