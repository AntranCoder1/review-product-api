import mongoose, { Document, Schema } from "mongoose";
import { type } from "os";

export interface INicheSite extends Document {
	name: string;
}

export type NicheSiteObject = {
	name?: string | undefined;
};

const NicheSiteSchema: Schema = new Schema(
	{
		name: { type: Schema.Types.String },
	},
	{ timestamps: true }
);

export default mongoose.model<INicheSite>("niche_site", NicheSiteSchema);
