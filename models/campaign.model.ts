import mongoose, { Schema, Document } from "mongoose";

export interface ICampaign extends Document {
	campaignName: string;
	clickBankId: string;
	headerScriptOrPixelCode: string;
	offer: any;
	percent: number;
	count: number;
	active: boolean;
	user: { type: Schema.Types.ObjectId; ref: "user" };
}

export type CampaignObject = {
	_id?: any | undefined;
	campaignName?: string | undefined;
	clickBankId?: string | undefined;
	headerScriptOrPixelCode?: string | undefined;
	offer?: any | undefined;
	percent?: number | undefined;
	count?: number | undefined;
	active?: boolean | undefined;
	user?: any | undefined;

	$and?: CampaignObject[] | undefined;
	$or?: CampaignObject[] | undefined;
};

export const CampaignSchema: Schema = new Schema(
	{
		campaignName: { type: Schema.Types.String },
		clickBankId: { type: Schema.Types.String },
		headerScriptOrPixelCode: { type: Schema.Types.String },
		offer: { type: Schema.Types.Mixed },
		percent: { type: Schema.Types.Number, default: 0 },
		count: { type: Schema.Types.Number, default: 0 },
		active: { type: Schema.Types.Boolean, default: true },
		user: { type: Schema.Types.ObjectId, ref: "user" },
	},
	{ timestamps: true }
);

export default mongoose.model<ICampaign>("campaign", CampaignSchema);
