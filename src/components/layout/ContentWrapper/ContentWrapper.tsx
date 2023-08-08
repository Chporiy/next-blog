import { Flex, FlexProps } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

const ContentWrapper = ({
  children,
  ...rest
}: PropsWithChildren<FlexProps>) => (
  <Flex
    {...rest}
    mx="auto"
    direction="column"
    align="center"
    justify="center"
    bg="white"
    borderRadius="md"
    shadow="xs"
    flex="1 auto"
    overflow="hidden"
  >
    {children}
  </Flex>
);

export default ContentWrapper;
