import PostsList from '../../posts/PostsList/PostsList';
import { User } from '../types';
import { useGetUserPostsQuery } from '../usersApi';

interface Props {
  userId: User['id'];
}

const UserPosts = ({ userId }: Props) => {
  const { data: posts, isSuccess } = useGetUserPostsQuery(userId);

  if (!isSuccess) return null;

  return <PostsList posts={posts} />;
};
export default UserPosts;
