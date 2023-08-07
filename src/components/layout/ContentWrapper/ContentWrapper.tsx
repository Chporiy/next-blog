import { Flex, LayoutProps } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

type Props = Pick<LayoutProps, 'maxWidth'>;

const ContentWrapper = ({ maxWidth, children }: PropsWithChildren<Props>) => (
  <Flex
    maxWidth={maxWidth}
    mx="auto"
    p="12"
    direction="column"
    align="center"
    justify="center"
    bg="white"
    borderRadius="md"
    shadow="xs"
    flex="1 auto"
  >
    {children}
  </Flex>
);

export default ContentWrapper;
