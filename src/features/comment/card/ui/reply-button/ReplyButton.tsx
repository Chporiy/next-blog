import { Button, ButtonProps } from '@chakra-ui/react';

import { CommentIcon } from '~/entities/comment';

type Props = Pick<ButtonProps, 'onClick'>;

export const ReplyButton = ({ onClick }: Props) => (
  <Button variant="ghost" leftIcon={<CommentIcon />} onClick={onClick}>
    Reply
  </Button>
);
