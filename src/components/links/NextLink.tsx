import Link, { LinkProps } from 'next/link';
import { Link as ChakraLink } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

/**
 * Custom component for Next <Link />
 *
 * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402}
 */
const NextLink = ({ children, ...linkProps }: PropsWithChildren<LinkProps>) => (
  <Link {...linkProps} passHref>
    <ChakraLink>{children}</ChakraLink>
  </Link>
);

export default NextLink;
