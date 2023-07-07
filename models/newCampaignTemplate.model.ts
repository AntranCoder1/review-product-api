import mongoose, { Document, Schema } from "mongoose";

export interface INewCampaignTemplate extends Document {
	name: string;
	optIn: string;
	webinar: string;
	download: string;
	image: string;
	status: boolean;
}

const NewCampaignTemplateSchema: Schema = new Schema(
	{
		name: { type: Schema.Types.String },
		optIn: { type: Schema.Types.String },
		webinar: { type: Schema.Types.String },
		download: { type: Schema.Types.String },
		image: { type: Schema.Types.String },
		status: { type: Schema.Types.Boolean, default: true },
	},
	{ timestamps: true }
);

export default mongoose.model<INewCampaignTemplate>(
	"new_campaign_template",
	NewCampaignTemplateSchema
);
