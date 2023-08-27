import { Text } from '@chakra-ui/react';

import { convertDateToLocalString } from '~/shared/lib';
import { Comment } from '~/shared/model';

interface Props {
  comment: Comment;
}

export const Date = ({ comment }: Props) => (
  <Text color="gray.400" fontSize="sm">
    {convertDateToLocalString(comment.date)}
  </Text>
);
