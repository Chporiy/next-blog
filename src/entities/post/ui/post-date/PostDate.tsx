import { Text } from '@chakra-ui/react';

import { convertDateToLocalDate } from '~/shared/lib';
import { Post } from '~/shared/model';

interface Props {
  post: Post;
}

export const Date = ({ post }: Props) => (
  <Text color="gray.400" fontSize="sm">
    {convertDateToLocalDate(post.date)}
  </Text>
);
