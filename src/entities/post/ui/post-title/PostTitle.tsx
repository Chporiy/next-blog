import { Box, BoxProps, Heading } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

/**
 * A component for post title
 * Render title as <h2> with font-size
 *
 */
export const Title = ({
  children,
  ...boxProps
}: PropsWithChildren<BoxProps>) => (
  <Box {...boxProps}>
    <Heading fontSize="3xl">{children}</Heading>
  </Box>
);
