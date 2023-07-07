import mongoose, { Document, Schema } from "mongoose";
import { type } from "os";

export interface IPage extends Document {
  content: string;
  title: string;
  slug: string;
  status: boolean;
  subDomain: { type: Schema.Types.ObjectId; ref: "subDomain" };
  user: { type: Schema.Types.ObjectId; ref: "user" };
}

export type PageObject = {
  _id?: any | undefined;
  content?: string | undefined;
  title?: string | undefined;
  slug?: string | undefined;
  status?: boolean | undefined;

  subDomain?: any | undefined;
  user?: any | undefined;

  $and?: PageObject[] | undefined;
  $or?: PageObject[] | undefined;
};

const PageSchema: Schema = new Schema(
  {
    content: { type: Schema.Types.String },
    title: { type: Schema.Types.String },
    slug: { type: Schema.Types.String },
    status: { type: Schema.Types.Boolean, default: false },
    subDomain: { type: Schema.Types.ObjectId, ref: "sub_domain" },
    user: { type: Schema.Types.ObjectId, ref: "user" },
  },
  { timestamps: true }
);

export default mongoose.model<IPage>("page", PageSchema);
