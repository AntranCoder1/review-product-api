import mongoose, { Document, Schema } from "mongoose";

export interface IMarketingTool extends Document {
	type: string;
	position: string;
	imageUrl: string;
	linkUrl: string;
	yourScriptCode: string;
	autoResponderScriptCode: string;
	user: { type: Schema.Types.ObjectId; ref: "user" };
	subDomain: { type: Schema.Types.ObjectId; ref: "sub_domain" };
}

export type MarketingToolObject = {
	_id?: any | undefined;
	type?: string | undefined;
	position?: string | undefined;
	imageUrl?: string | undefined;
	linkUrl?: string | undefined;
	yourScriptCode?: string | undefined;
	autoResponderScriptCode?: string | undefined;
	user?: any | undefined;
	subDomain?: any | undefined;

	$and?: MarketingToolObject[] | undefined;
	$or?: MarketingToolObject[] | undefined;
};

const MarketingToolPageSchema: Schema = new Schema(
	{
		type: { type: Schema.Types.String },
		position: { type: Schema.Types.String },
		imageUrl: { type: Schema.Types.String },
		linkUrl: { type: Schema.Types.String },
		yourScriptCode: { type: Schema.Types.String },
		autoResponderScriptCode: { type: Schema.Types.String },
		user: { type: Schema.Types.ObjectId, ref: "user" },
		subDomain: { type: Schema.Types.ObjectId, ref: "sub_domain" },
	},
	{ timestamps: true }
);

export default mongoose.model<IMarketingTool>(
	"marketing_tool",
	MarketingToolPageSchema
);
