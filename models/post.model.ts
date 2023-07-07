import mongoose, { Document, Schema } from "mongoose";

export interface IPost extends Document {
  title: string;
  slug: string;
  description: string;
  content: string;
  publicStatus: boolean;
  feedSource: string;
  postThumbnailLink: string;
  postThumbnail: string;
  productTitle: string;
  productDescription: string;
  buyNowLink: string;
  buyNowImageLink: string;
  buyNowImage: string;
  view: number;

  createdAt: any | undefined;
  updatedAt: any | undefined;
  user: { type: Schema.Types.ObjectId; ref: "user" };
  subDomain?: { type: Schema.Types.ObjectId; ref: "subDomain" };
  statusPopup: boolean;
  titlePopup: string;
  descriptionPopup: string;
  linkBuyPopup: string;
  timePopup: number;
  buttonTextPopup: string;
  popupImage: string;
  popupImageLink: string;
  keywords: string;
  like?: number | undefined;

  category_id: [];
}

export type PostObject = {
  _id?: any | undefined;
  title?: string | undefined;
  slug?: string | undefined;
  description?: string | undefined;
  content?: string | undefined;
  publicStatus?: boolean | undefined;
  feedSource?: string | undefined;
  postThumbnail?: string | undefined;
  postThumbnailLink?: string | undefined;
  productTitle?: string | undefined;
  productDescription?: string | undefined;
  buyNowLink?: string | undefined;
  buyNowImageLink?: string | undefined;
  buyNowImage?: string | undefined;
  view?: number | undefined;
  user?: any | undefined;
  subDomain?: any | undefined;

  $and?: PostObject[] | undefined;
  $or?: PostObject[] | undefined;

  statusPopup?: boolean | undefined;
  titlePopup?: string | undefined;
  descriptionPopup?: string | undefined;
  linkBuyPopup?: string | undefined;
  timePopup?: number | undefined;
  buttonTextPopup?: string | undefined;
  popupImage?: string | undefined;
  popupImageLink?: string | undefined;
  updatedAt?: any | undefined;
  keywords?: string | undefined;
  like?: number | undefined;

  category_id?: any | undefined;
};

export type PostFilterObject = {
  _id?: any | undefined;
  title?: string | { $regex: string } | undefined;
  slug?: string | undefined;
  description?: string | { $regex: string } | undefined;
  content?: string | { $regex: string } | undefined;
  publicStatus?: boolean | undefined;
  feedSource?: string | undefined;
  postThumbnailLink?: string | undefined;
  postThumbnail?: string | undefined;
  productTitle?: string | { $regex: string } | undefined;
  productDescription?: string | { $regex: string } | undefined;
  buyNowLink?: string | undefined;
  buyNowImageLink?: string | undefined;
  buyNowImage?: string | undefined;
  view?: number | undefined;
  user?: any | undefined;
  subDomain?: any | undefined;

  createdAt?: any | undefined;
  updatedAt?: any | undefined;
  $and?: PostFilterObject[] | undefined;
  $or?: PostFilterObject[] | undefined;

  keywords?: string | undefined;
  like?: number | undefined;

  category_id?: any | undefined;
};

const PostSchema: Schema = new Schema(
  {
    title: { type: Schema.Types.String },
    slug: { type: Schema.Types.String },
    description: { type: Schema.Types.String },
    content: { type: Schema.Types.String },
    publicStatus: { type: Schema.Types.Boolean },
    feedSource: { type: Schema.Types.String },
    postThumbnailLink: { type: Schema.Types.String },
    postThumbnail: { type: Schema.Types.String },
    productTitle: { type: Schema.Types.String },
    productDescription: { type: Schema.Types.String },
    buyNowLink: { type: Schema.Types.String },
    buyNowImageLink: { type: Schema.Types.String },
    buyNowImage: { type: Schema.Types.String },
    view: { type: Schema.Types.Number, default: 0 },
    user: { type: Schema.Types.ObjectId, ref: "user" },
    subDomain: { type: Schema.Types.ObjectId, ref: "subDomain" },
    statusPopup: { type: Schema.Types.Boolean },
    titlePopup: { type: Schema.Types.String },
    descriptionPopup: { type: Schema.Types.String },
    linkBuyPopup: { type: Schema.Types.String },
    timePopup: { type: Schema.Types.Number, default: 0 },
    buttonTextPopup: { type: Schema.Types.String },
    popupImage: { type: Schema.Types.String },
    popupImageLink: { type: Schema.Types.String },
    keywords: { type: Schema.Types.String },
    like: { type: Schema.Types.Number, default: 0 },

    category_id: [{ catId: { type: Schema.Types.ObjectId, ref: "category" } }],
  },
  { timestamps: true }
);

export default mongoose.model<IPost>("post", PostSchema);
