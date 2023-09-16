import { Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  icon: ReactNode;
  text: string;
}
export const Activity = ({ icon, text }: Props) => (
  <Flex gap="2" alignItems="center">
    {icon}
    {text}
  </Flex>
);
