import { List as ChakraList, ListItem } from '@chakra-ui/react';

import { CommentCard } from '~/features/comment';

import { Comment } from '~/shared/model';

interface Props {
  comments: Comment[];
}

export const List = ({ comments }: Props) => (
  <ChakraList spacing={4}>
    {comments.map((comment) => (
      <ListItem key={comment.id}>
        <CommentCard comment={comment} />
      </ListItem>
    ))}
  </ChakraList>
);
