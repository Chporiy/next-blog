import { Button } from '@chakra-ui/react';

import { ROUTES } from '~/shared/config';
import { NextLink } from '~/shared/ui';

const SignInButton = () => (
  <NextLink next={{ href: ROUTES.auth.signIn }}>
    <Button>Sign in</Button>
  </NextLink>
);

export default SignInButton;
