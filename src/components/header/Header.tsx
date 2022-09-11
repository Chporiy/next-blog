import { Box, Container } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.png';
import NextLink from '../links/NextLink';

const Header = () => (
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
      <Box h="full" display="flex" alignItems="center">
        <NextLink next={{ href: '/' }}>
          <Image src={logo} alt="logo" />
        </NextLink>
      </Box>
    </Container>
  </Box>
);

export default Header;
