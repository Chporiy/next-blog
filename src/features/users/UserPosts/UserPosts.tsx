import PostsList from '../../posts/PostsList/PostsList';
import { sortPostsByDescDate } from '../../posts/selectors';
import { User } from '../types';
import { useGetUserPostsQuery } from '../usersApi';

interface Props {
  userId: User['id'];
}

const UserPosts = ({ userId }: Props) => {
  const { data: posts, isSuccess } = useGetUserPostsQuery(userId, {
    selectFromResult: (result) => ({
      ...result,
      data: sortPostsByDescDate(result),
    }),
  });

  if (!isSuccess) return null;

  return <PostsList posts={posts} />;
};
export default UserPosts;
