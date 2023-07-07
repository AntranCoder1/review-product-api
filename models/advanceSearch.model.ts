import mongoose, { Schema, Document } from "mongoose";

export interface IAdvanceSearch extends Document {
	itemGravity: string;
	itemIntialDSale: string;
	itemAvgDSale: string;
	itemAvgRebill: string;
	itemAvgPerSale: string;
	itemPerRebill: string;
	language: string;
	sortBy: string;
	maxResult: string;

	user: { type: Schema.Types.ObjectId; ref: "user" };
	subDomain: { type: Schema.Types.ObjectId; ref: "sub_domain" };
}

export type AdvanceSearchObject = {
	_id?: any | undefined;
	itemGravity?: string | undefined;
	itemIntialDSale?: string | undefined;
	itemAvgDSale?: string | undefined;
	itemAvgRebill?: string | undefined;
	itemAvgPerSale?: string | undefined;
	itemPerRebill?: string | undefined;
	language?: string | undefined;
	sortBy?: string | undefined;
	maxResult?: string | undefined;

	user?: any | undefined;
	subDomain?: any | undefined;

	$and?: AdvanceSearchObject[] | undefined;
	$or?: AdvanceSearchObject[] | undefined;
};

export const AdvanceSearchSchema: Schema = new Schema(
	{
		itemGravity: { type: Schema.Types.String },
		itemIntialDSale: { type: Schema.Types.String },
		itemAvgDSale: { type: Schema.Types.String },
		itemAvgRebill: { type: Schema.Types.String },
		itemAvgPerSale: { type: Schema.Types.String },
		itemPerRebill: { type: Schema.Types.String },
		language: { type: Schema.Types.String },
		sortBy: { type: Schema.Types.String },
		maxResult: { type: Schema.Types.String },

		user: { type: Schema.Types.ObjectId, ref: "user" },
		subDomain: { type: Schema.Types.ObjectId, ref: "sub_domain" },
	},
	{ timestamps: true }
);

export default mongoose.model<IAdvanceSearch>(
	"advance_search",
	AdvanceSearchSchema
);
