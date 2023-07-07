import mongoose, { Schema, Document } from "mongoose";

export interface IFeedUrl extends Document {
	url: string;
	active: boolean;
	systemCreated: boolean;
	user: { type: Schema.Types.ObjectId; ref: "user" };
	subDomain: { type: Schema.Types.ObjectId; ref: "sub_domain" };
	createdAt: Date;
}

export type FeedUrlObject = {
	_id?: any | undefined;
	url?: string | undefined;
	active?: boolean | undefined;
	systemCreated?: boolean | undefined;
	user?: any | undefined;
	subDomain?: any | undefined;

	$and?: FeedUrlObject[] | undefined;
	$or?: FeedUrlObject[] | undefined;
};

export const FeedUrlSchema: Schema = new Schema(
	{
		url: { type: Schema.Types.String },
		active: { type: Schema.Types.Boolean, default: false },
		systemCreated: { type: Schema.Types.Boolean, default: false },
		user: { type: Schema.Types.ObjectId, ref: "user" },
		subDomain: { type: Schema.Types.ObjectId, ref: "sub_domain" },
		createdAt: { type: Schema.Types.Date },
	},
	{ timestamps: true }
);

export default mongoose.model<IFeedUrl>("feed_url", FeedUrlSchema);
