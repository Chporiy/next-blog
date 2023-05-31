import { Button } from '@chakra-ui/react';
import NextLink from '../../../components/links/NextLink';
import ROUTES from '../../../utils/routes/routes';

const SignInButton = () => (
  <NextLink next={{ href: ROUTES.auth.signIn }}>
    <Button>Sign in</Button>
  </NextLink>
);

export default SignInButton;
