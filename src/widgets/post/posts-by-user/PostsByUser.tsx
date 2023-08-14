import { postModel, useGetPostsByUserQuery } from '~/entities/post';

import PostList from '../post-list/PostList';

interface Props {
  userId: number;
}

const PostsByUser = ({ userId }: Props) => {
  const { data: posts, isSuccess } = useGetPostsByUserQuery(userId, {
    selectFromResult: (result) => ({
      ...result,
      data: postModel.selectors.sortPostsByDescDate(result),
    }),
  });

  if (!isSuccess) return null;

  return <PostList posts={posts} />;
};
export default PostsByUser;
