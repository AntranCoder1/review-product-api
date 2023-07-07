import mongoose, { Document, Schema } from "mongoose";
import { type } from "os";

export interface ILevelAccess extends Document {
	_idCustom: string;
	name: string;
	description: string;
	permission: any;
}

export type LevelAccessObject = {
	_id?: any | undefined;
	_idCustom?: any | undefined;
	name?: string | undefined;
	description?: string | undefined;
	permission?: any;

	$and?: any | undefined;
	$or?: any | undefined;
};

const LevelAccessSchema: Schema = new Schema(
	{
		_idCustom: { type: Schema.Types.String, unique: true },
		name: { type: Schema.Types.String },
		description: { type: Schema.Types.String },
		permission: { type: Schema.Types.Array },
	},
	{ timestamps: true }
);

export default mongoose.model<ILevelAccess>("level_access", LevelAccessSchema);
