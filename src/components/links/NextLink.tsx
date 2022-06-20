import Link, { LinkProps } from 'next/link';
import React, { PropsWithChildren } from 'react';

/**
 * Custom component for Next <Link />
 *
 * @see {@link https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/issues/402}
 */
const NextLink = ({ children, ...linkProps }: PropsWithChildren<LinkProps>) => (
  <Link {...linkProps} passHref>
    <a href="passRef">{children}</a>
  </Link>
);

export default NextLink;
