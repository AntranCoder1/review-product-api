import mongoose, { Schema, Document } from "mongoose";

export interface IAdsManagement extends Document {
  image: string;
  link: string;
  status: boolean;
  position: string;
  user: { type: Schema.Types.ObjectId; ref: "user" };
  subDomain: { type: Schema.Types.ObjectId; ref: "sub_domain" };
}

export type AdsManagementObject = {
  _id?: any | undefined;
  image?: string | undefined;
  link?: string | undefined;
  status?: boolean | undefined;
  position?: string | undefined;
  user?: any | undefined;
  subDomain?: any | undefined;

  $and?: AdsManagementObject[] | undefined;
  $or?: AdsManagementObject[] | undefined;
};

export const AdsManagementSchema: Schema = new Schema(
  {
    image: { type: Schema.Types.String },
    link: { type: Schema.Types.String },
    status: { type: Schema.Types.Boolean },
    position: { type: Schema.Types.String },
    user: { type: Schema.Types.ObjectId, ref: "user" },
    subDomain: { type: Schema.Types.ObjectId, ref: "sub_domain" },
  },
  { timestamps: true }
);

export default mongoose.model<IAdsManagement>(
  "ads_management",
  AdsManagementSchema
);
