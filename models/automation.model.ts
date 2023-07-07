import mongoose, { Schema, Document } from "mongoose";

export interface IAutomation extends Document {
	keyword: string;
	noOfPosts: number;
	timeRange: number;
	checkInDescriptionOrContent: boolean;
	lastAdded: Date;
	status: boolean;
	times: number;

	user: { type: Schema.Types.ObjectId; ref: "user" };
	subDomain: { type: Schema.Types.ObjectId; ref: "sub_domain" };
}

export type AutomationObject = {
	_id?: any | undefined;
	keyword?: string | undefined;
	noOfPosts?: number | undefined;
	timeRange?: number | undefined;
	checkInDescriptionOrContent?: boolean | undefined;
	lastAdded?: Date | undefined;
	status?: boolean | undefined;
	user?: any | undefined;
	subDomain?: any | undefined;
	times?: number | undefined;

	$and?: AutomationObject[] | undefined;
	$or?: AutomationObject[] | undefined;
	$inc?: AutomationObject | undefined;
};

export const AutomationSchema: Schema = new Schema(
	{
		keyword: { type: Schema.Types.String },
		noOfPosts: { type: Schema.Types.Number },
		timeRange: { type: Schema.Types.Number },
		checkInDescriptionOrContent: { type: Schema.Types.Boolean },
		lastAdded: { type: Schema.Types.Date },
		status: { type: Schema.Types.Boolean, default: true },
		times: { type: Schema.Types.Number, default: 0 },

		user: { type: Schema.Types.ObjectId, ref: "user" },
		subDomain: { type: Schema.Types.ObjectId, ref: "sub_domain" },
	},
	{ timestamps: true }
);

export default mongoose.model<IAutomation>("automation", AutomationSchema);
