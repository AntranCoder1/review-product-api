import mongoose, { Document, Schema } from "mongoose";

export interface ILikePost extends Document {
  uuId: string;
  like: number;
  postId: { type: Schema.Types.ObjectId; ref: "post" };
}

export type LikePostObject = {
  _id?: any | undefined;
  uuId?: string | undefined;
  like?: number | undefined;
  postId?: any | undefined;

  $and?: LikePostObject[] | undefined;
  $or?: LikePostObject[] | undefined;
};

const LikePostSchema: Schema = new Schema(
  {
    uuId: { type: String },
    like: { type: Number, default: 1 },
    postId: { type: Schema.Types.ObjectId, ref: "post" },
  },
  { timestamps: true }
);

export default mongoose.model<ILikePost>("like_post", LikePostSchema);
