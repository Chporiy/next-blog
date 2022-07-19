import { Heading } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

/**
 * A component for post title
 * Render title as <h2> with font-size
 *
 */
const PostTitle = ({ children }: PropsWithChildren) => (
  <Heading fontSize="3xl" marginTop={3}>
    {children}
  </Heading>
);

export default PostTitle;
