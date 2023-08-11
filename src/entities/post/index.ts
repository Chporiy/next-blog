import { sortPostsByDescDate } from './model/selectors';
import CreatePostButton from './ui/create-post-button/CreatePostButton';
import PostIcon from './ui/post-icon/PostIcon';
import PostImage from './ui/post-image/PostImage';
import PostTitle from './ui/post-title/PostTitle';

export * from './api/postsApi';

export type { Post } from './model/types';
export type {
  CreatePostRequest,
  GetPostRequest,
  GetPostsRequest,
  GetPostsByUserRequest,
} from './api/types';
export {
  PostTitle,
  PostIcon,
  PostImage,
  CreatePostButton,
  sortPostsByDescDate,
};
