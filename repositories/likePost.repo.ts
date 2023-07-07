import LikePost, { ILikePost, LikePostObject } from "../models/likePost.model";
import Post, {
  IPost,
  PostObject,
  PostFilterObject,
} from "../models/post.model";
export const create = async (data: LikePostObject) => {
  const newData: ILikePost = new LikePost(data);
  return newData.save();
};

export const updateLike = (postId: any, like) => {
  return Post.updateOne({ _id: postId }, { like });
};

export const getPost = (postId: any) => {
  return Post.findOne({ _id: postId }).select({ like: 1 });
};

export const findUuId = (postId: any, uuId) => {
  return LikePost.findOne({ postId, uuId });
};
