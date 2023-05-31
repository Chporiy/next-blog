import { Box, Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import logo from '../../../../public/logo.png';
import NextLink from '../../links/NextLink';
import ROUTES from '../../../utils/routes/routes';
import useUser from '../../../hooks/useUser/useUser';
import UserPanel from '../UserPanel/UserPanel';
import SignInButton from '../../../features/auth/SignInButton/SignInButton';

const Header = () => {
  const user = useUser();

  return (
    <Box
      as="header"
      maxW="full"
      h="14"
      bg="white"
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex="sticky"
      shadow="xs"
    >
      <Container h="full" w="full" maxW="container.xl">
        <Flex h="full" alignItems="center" justifyContent="space-between">
          <NextLink next={{ href: ROUTES.index }}>
            <Image src={logo} alt="logo" />
          </NextLink>
          {user ? <UserPanel /> : <SignInButton />}
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
