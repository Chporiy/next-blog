import { Box, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';

import { userModel } from '~/entities/user';

import { Comment } from '~/shared/model';
import { ContentWrapper } from '~/shared/ui';

import { CommentAuthor } from '../../author';
import { CreateInnerCommentForm } from '../../create';

import { ReplyButton } from './reply-button/ReplyButton';

type Props = {
  comment: Comment;
  slots?: {
    commentsList?: (...args: any[]) => JSX.Element;
  };
};

export const Card = ({
  comment,
  slots = { commentsList: () => null },
}: Props) => {
  const [isCreateCommentFormOpen, setIsCreateCommentFormOpen] = useState(false);

  const openCreateCommentForm = () => setIsCreateCommentFormOpen(true);
  const closeCreateCommentForm = () => setIsCreateCommentFormOpen(false);

  const user = userModel.selectors.useCurrentUser();

  return (
    <>
      <ContentWrapper align="start" p="4">
        <CommentAuthor comment={comment} />
        <Text mt="3">{comment.body}</Text>
        {user && (
          <Flex mt="3">
            <ReplyButton onClick={openCreateCommentForm} />
          </Flex>
        )}
      </ContentWrapper>
      {isCreateCommentFormOpen && (
        <Box mt="2">
          <CreateInnerCommentForm
            postId={comment.postId}
            commentId={comment.id}
            close={closeCreateCommentForm}
          />
        </Box>
      )}
      <Box mt="4" pl="4">
        <slots.commentsList commentId={comment.id} />
      </Box>
    </>
  );
};
