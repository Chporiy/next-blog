import { postModel, useGetPostsQuery } from '~/entities/post';

import { PostList } from '../../base';

export const AllPosts = () => {
  const { data: posts, isSuccess } = useGetPostsQuery(undefined, {
    selectFromResult: (result) => ({
      ...result,
      data: postModel.selectors.sortPostsByDescDate(result),
    }),
  });

  if (!isSuccess) {
    return null;
  }

  return <PostList posts={posts} />;
};
