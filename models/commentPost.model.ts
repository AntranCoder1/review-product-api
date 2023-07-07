import mongoose, { Document, Schema } from "mongoose";

export interface ICommentPost extends Document {
  message: string;
  like: number;
  dislike: number;
  firstname: string;
  lastname: string;
  email: string;
  show: boolean;
  postId: { type: Schema.Types.ObjectId; ref: "post" };
  isReply: boolean;
  parentComment: { type: Schema.Types.ObjectId; ref: "comment_post" };
  fullname: string;
}

export type CommentPostObject = {
  _id?: any | undefined;
  message?: string | undefined;
  like?: number | undefined;
  dislike?: number | undefined;
  firstname: string | undefined;
  lastname: string | undefined;
  email: string | undefined;
  postId?: any | undefined;
  show?: boolean;
  isReply?: boolean;
  parentComment?: any | undefined;
  fullname?: string;
  $and?: CommentPostObject[] | undefined;
  $or?: CommentPostObject[] | undefined;
};

const CommentPostSchema: Schema = new Schema(
  {
    message: { type: String },
    like: { type: Number, default: 0 },
    dislike: { type: Number, default: 0 },
    firstname: { type: String },
    lastname: { type: String },
    email: { type: String },
    show: { type: Boolean, default: true },
    postId: { type: Schema.Types.ObjectId, ref: "post" },
    isReply: { type: Boolean, default: false },
    parentComment: { type: Schema.Types.ObjectId, ref: "comment_post" },
    fullname: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<ICommentPost>("comment_post", CommentPostSchema);
