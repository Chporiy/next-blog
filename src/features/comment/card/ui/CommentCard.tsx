import { Text } from '@chakra-ui/react';

import { Comment } from '~/shared/model';
import { ContentWrapper } from '~/shared/ui';

import { CommentAuthor } from '../../author';

type Props = {
  comment: Comment;
};

export const Card = ({ comment }: Props) => (
  <ContentWrapper align="start" p="4">
    <CommentAuthor comment={comment} />
    <Text mt="3">{comment.body}</Text>
  </ContentWrapper>
);
