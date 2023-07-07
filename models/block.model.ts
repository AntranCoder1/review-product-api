import mongoose, { Document, Schema } from "mongoose";
import { type } from "os";

export interface IBlock extends Document {
  category: { type: Schema.Types.ObjectId; ref: "category" };
  post: [];
  position: string;
  type: string;
  status: boolean;
  subDomain: { type: Schema.Types.ObjectId; ref: "subDomain" };
}

export type BlockObject = {
  _id?: any | undefined;
  category?: any | undefined;
  post?: any | undefined;
  position?: string | undefined;
  type?: string | undefined;
  status?: boolean | undefined;
  subDomain?: any | undefined;
};

const BlockSchema: Schema = new Schema(
  {
    category: { type: Schema.Types.ObjectId, ref: "category" },
    post: [{ postId: { type: Schema.Types.ObjectId, ref: "post" } }],
    position: { type: Schema.Types.String },
    type: { type: Schema.Types.String },
    status: { type: Schema.Types.Boolean },
    subDomain: { type: Schema.Types.ObjectId, ref: "subDomain" },
  },
  { timestamps: true }
);

export default mongoose.model<IBlock>("block", BlockSchema);
