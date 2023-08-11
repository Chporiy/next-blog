import { Button } from '@chakra-ui/react';

import { ROUTES } from '~/shared/config';
import { NextLink } from '~/shared/ui';

const CreatePostButton = () => (
  <NextLink next={{ href: ROUTES.posts.create }}>
    <Button variant="outline" colorScheme="teal">
      Create Post
    </Button>
  </NextLink>
);

export default CreatePostButton;
