import { ChakraProvider as ChakraProviderElement } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import { theme } from '~/shared/config';

export const ChakraProvider = ({ children }: PropsWithChildren<unknown>) => (
  <ChakraProviderElement theme={theme}>{children}</ChakraProviderElement>
);
