import { Button } from '@chakra-ui/react';

import { ROUTES } from '~/shared/config';
import { NextLink } from '~/shared/ui';

export const SignInButton = () => (
  <NextLink next={{ href: ROUTES.auth.signIn }}>
    <Button>Sign in</Button>
  </NextLink>
);
