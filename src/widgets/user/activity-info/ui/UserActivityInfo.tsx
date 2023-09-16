import { TabList } from '@chakra-ui/react';

import { CommentIcon, useGetCommentsByUserQuery } from '~/entities/comment';
import { PostIcon, useGetPostsByUserQuery } from '~/entities/post';

import { User } from '~/shared/model';

import { getEntitiesAmount } from '../lib';

import { Activity } from './activity/Activity';

interface Props {
  userId: User['id'];
}

export const UserActivityInfo = ({ userId }: Props) => {
  const { data: posts, isSuccess: isPostsSuccess } =
    useGetPostsByUserQuery(userId);
  const { data: comments, isSuccess: isCommentsSuccess } =
    useGetCommentsByUserQuery(userId);

  return (
    <TabList>
      {isPostsSuccess && (
        <Activity
          icon={<PostIcon />}
          text={`${getEntitiesAmount(posts)} published posts`}
        />
      )}
      {isCommentsSuccess && (
        <Activity
          icon={<CommentIcon />}
          text={`${getEntitiesAmount(comments)} published comments`}
        />
      )}
    </TabList>
  );
};
