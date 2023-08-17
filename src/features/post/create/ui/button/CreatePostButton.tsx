import { Button as ChakraButton } from '@chakra-ui/react';

import { ROUTES } from '~/shared/config';
import { NextLink } from '~/shared/ui';

export const Button = () => (
  <NextLink next={{ href: ROUTES.posts.create }}>
    <ChakraButton variant="outline" colorScheme="teal">
      Create Post
    </ChakraButton>
  </NextLink>
);
