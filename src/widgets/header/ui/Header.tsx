import { Box, Container, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

import { UserPanel } from '~/widgets/user';

import { SignInButton } from '~/features/auth';

import { userModel } from '~/entities/user';

import { ROUTES } from '~/shared/config';
import { NextLink } from '~/shared/ui';

import logo from '../../../../public/images/logo.png';

export const Header = () => {
  const user = userModel.selectors.useCurrentUser();

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
