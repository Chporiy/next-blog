import { postModel, useGetPostsByUserQuery } from '~/entities/post';

import { User } from '~/shared/model';

import { PostList } from '../../base';

interface Props {
  userId: User['id'];
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
