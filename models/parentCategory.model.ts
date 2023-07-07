import mongoose, { Document, Schema } from "mongoose";

export interface IParentCategory extends Document {
  name: string;
  subDomain: { type: Schema.Types.ObjectId; ref: "subDomain" };
}

export type ParentCategoryObject = {
  _id?: any | undefined;
  name?: string | undefined;
  subDomain?: any | undefined;

  $and?: ParentCategoryObject[] | undefined;
  $or?: ParentCategoryObject[] | undefined;
};

const ParentCategorySchema: Schema = new Schema(
  {
    name: { type: Schema.Types.String },
    subDomain: { type: Schema.Types.ObjectId, ref: "subDomain" },
  },
  { timestamps: true }
);

export default mongoose.model<IParentCategory>(
  "parent_category",
  ParentCategorySchema
);
