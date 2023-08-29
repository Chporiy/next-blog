import { postModel, useGetPostsByUserQuery } from '~/entities/post';

import { PostList } from '../../base';

interface Props {
  userId: number;
}

export const PostsByUser = ({ userId }: Props) => {
  const { data: posts, isSuccess } = useGetPostsByUserQuery(userId, {
    selectFromResult: (result) => ({
      ...result,
      data: postModel.selectors.sortPostsByDescDate(result),
    }),
  });

  if (!isSuccess) return null;

  return <PostList posts={posts} />;
};
