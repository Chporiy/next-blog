import Link, { LinkProps } from 'next/link';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

type Props = {
  next: LinkProps;
  chakra?: ChakraLinkProps;
};
/**
 * Custom component for Next <Link />
 *
 * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402}
 */
const NextLink = ({ children, next, chakra }: PropsWithChildren<Props>) => (
  <Link {...next} passHref>
    <ChakraLink {...chakra}>{children}</ChakraLink>
  </Link>
);

NextLink.defaultProps = {
  chakra: {},
};

export default NextLink;
