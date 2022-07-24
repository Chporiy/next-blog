import { Box, Container } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import logo from '../../../public/logo.png';

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
  >
    <Container h="full" w="full" maxW="container.xl">
      <Box h="full" display="flex" alignItems="center">
        <Image src={logo} alt="logo" />
      </Box>
    </Container>
  </Box>
);

export default Header;