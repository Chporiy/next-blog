import { Box, Text } from '@chakra-ui/react';

import { Comment } from '~/shared/model';
import { ContentWrapper } from '~/shared/ui';

import { CommentAuthor } from '../../author';

type Props = {
  comment: Comment;
  slots?: {
    commentsList?: (...args: any[]) => JSX.Element;
  };
};

export const Card = ({
  comment,
  slots = { commentsList: () => null },
}: Props) => (
  <>
    <ContentWrapper align="start" p="4">
      <CommentAuthor comment={comment} />
      <Text mt="3">{comment.body}</Text>
    </ContentWrapper>
    <Box mt="4" pl="4">
      <slots.commentsList commentId={comment.id} />
    </Box>
  </>
);
