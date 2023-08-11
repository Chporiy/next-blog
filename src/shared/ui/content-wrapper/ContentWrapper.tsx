import { Flex, FlexProps } from '@chakra-ui/react';
import React, { PropsWithChildren } from 'react';

const ContentWrapper = ({
  children,
  ...rest
}: PropsWithChildren<FlexProps>) => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    bg="white"
    borderRadius="md"
    shadow="xs"
    overflow="hidden"
    {...rest}
  >
    {children}
  </Flex>
);

export default ContentWrapper;
