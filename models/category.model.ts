import mongoose, { Document, Schema } from "mongoose";

export interface ICategory extends Document {
  name: string;
  slug: string;
  status: string;
  parentCategory: { type: Schema.Types.ObjectId; ref: "category" };
  subDomain: { type: Schema.Types.ObjectId; ref: "subDomain" };
}

export type CategoryObject = {
  _id?: any | undefined;
  name?: string | undefined;
  slug?: string | undefined;
  status?: string | undefined;
  parentCategory?: any | undefined;
  subDomain?: any | undefined;

  $and?: CategoryObject[] | undefined;
  $or?: CategoryObject[] | undefined;
};

const CategorySchema: Schema = new Schema(
  {
    name: { type: Schema.Types.String },
    slug: { type: Schema.Types.String },
    status: { type: Schema.Types.String },
    parentCategory: { type: Schema.Types.ObjectId, ref: "category" },
    subDomain: { type: Schema.Types.ObjectId, ref: "subDomain" },
  },
  { timestamps: true }
);

export default mongoose.model<ICategory>("category", CategorySchema);
